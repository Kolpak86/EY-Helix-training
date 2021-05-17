import { Component } from '@angular/core';

@Component({
    selector: 'app-users',
    template: `<app-wrapper>
        <app-user-table></app-user-table>
    </app-wrapper>`,
    styles: [':host{width: 100%}'],
})
export class UsersComponent {}
