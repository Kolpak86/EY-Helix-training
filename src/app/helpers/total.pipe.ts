import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../models';
import { reducer } from '../utility';

@Pipe({
    name: 'total',
})
export class TotalPipe implements PipeTransform {
    transform(users: User[]): number {
        if (!users) {
            return;
        }
        if (users.length === 0) {
            return 0;
        }
        const totalAmount = users.map(({ amount }) => amount).reduce(reducer);
        return totalAmount;
    }
}
