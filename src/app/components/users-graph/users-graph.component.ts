import { Component, OnDestroy, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Subscription } from 'rxjs';
import { UserGraph } from 'src/app/models';
import { UserService } from 'src/app/services/user.service';
import { convertObjectToArray, getDuplicatesFromArray } from 'src/app/utility';

@Component({
    selector: 'app-users-graph',
    templateUrl: './users-graph.component.html',
    styleUrls: ['./users-graph.component.scss'],
})
export class UsersGraphComponent implements OnInit, OnDestroy {
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
