import { Component, OnDestroy, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Subscription } from 'rxjs';
import { sleep } from 'src/app/helpers';
import { UserGraph } from 'src/app/models';
import { UserService } from 'src/app/services/user.service';
import { getDuplicatesFromArray, convertObjectToArray } from 'src/app/utility';
import { Widget } from 'src/app/widgets/widget';
import { WIDGET } from 'src/app/widgets/widget.token';

@Component({
    selector: 'app-month-graph',
    templateUrl: './month-graph.component.html',
    styleUrls: ['./month-graph.component.scss'],
    providers: [{ provide: WIDGET, useExisting: MonthGraphComponent }],
})
export class MonthGraphComponent implements OnInit, OnDestroy, Widget {
    isRefreshing = false;
    Highcharts: typeof Highcharts = Highcharts;
    chartOptions: Highcharts.Options = this.createChartOptions();
    private subscription = new Subscription();

    constructor(private user: UserService) {}

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    ngOnInit() {
        this.getChart();
    }

    async refresh() {
        this.isRefreshing = true;
        await sleep(2000);
        this.isRefreshing = false;
    }

    private getChart() {
        this.subscription.add(
            this.user.getUsers().subscribe((users) => {
                const stringDates = users.map(({ createdAt }) => createdAt.split('T')[0]);

                const counts = getDuplicatesFromArray(stringDates);
                const userDates = convertObjectToArray(counts);
                this.chartOptions = this.createChartOptions(userDates);
            })
        );
    }

    private createChartOptions(data: UserGraph = []): Highcharts.Options {
        return {
            title: {
                text: 'Monthwise register users',
            },
            xAxis: {
                type: 'datetime',
                title: {
                    text: 'Date',
                },
            },
            yAxis: {
                title: {
                    text: 'Count of users',
                },
                min: 0,
            },

            plotOptions: {
                series: {
                    marker: {
                        enabled: true,
                    },
                },
            },

            series: [
                {
                    name: 'Users',
                    type: 'line',
                    data,
                },
            ],

            responsive: {
                rules: [
                    {
                        condition: {
                            maxWidth: 800,
                        },
                        chartOptions: {
                            plotOptions: {
                                series: {
                                    marker: {
                                        radius: 2.5,
                                    },
                                },
                            },
                        },
                    },
                ],
            },
        };
    }
}
