import { Component, ContentChild, OnInit } from '@angular/core';
import { Widget } from '../../widgets/widget';
import { WIDGET } from '../../widgets/widget.token';

@Component({
    selector: 'app-wrapper',
    templateUrl: './wrapper.component.html',
    styleUrls: ['./wrapper.component.scss'],
})
export class WrapperComponent implements OnInit {
    @ContentChild(WIDGET as any, { static: true }) widget: Widget;

    constructor() {}

    ngOnInit() {}

    onRefresh() {
        this.widget.refresh();
    }
}
