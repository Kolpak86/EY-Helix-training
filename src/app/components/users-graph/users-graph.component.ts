import { Component } from '@angular/core';

@Component({
    selector: 'app-users-graph',
    template: '<app-wrapper><app-month-graph></app-month-graph> </app-wrapper>',
    styles: [':host{width: 100%}'],
})
export class UsersGraphComponent {}
