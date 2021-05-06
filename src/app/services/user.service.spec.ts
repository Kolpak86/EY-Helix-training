import { asyncData } from 'src/testing';
import { User } from '../models';

import { UserService } from './user.service';

describe('UserService', () => {
    let httpClientSpy: { get: jasmine.Spy };
    let userService: UserService;

    beforeEach(() => {
        const alertServiceSpy = jasmine.createSpyObj('AlertService', ['error']);
        httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
        userService = new UserService(httpClientSpy as any, alertServiceSpy);
    });

    it('should return expected users (HttpClient called once)', () => {
        const expectedUsers: User[] = [
            {
                firstName: 'Andrew',
                lastName: 'Kolpak',
                username: 'pokemon',
                password: '123456',
                amount: 35,
                country: 'Belarus',
                adhar: 111111111111,
                createdAt: '2021-05-06T13:03:52.619Z',
                id: 1,
            },
            {
                firstName: 'Sergey',
                lastName: 'Ivanov',
                username: 'sergio',
                password: '123456',
                amount: 75,
                country: 'Belarus',
                adhar: 111111111112,
                createdAt: '2021-05-06T13:06:01.846Z',
                id: 2,
            },
        ];

        httpClientSpy.get.and.returnValue(asyncData(expectedUsers));

        userService.getUsers().subscribe((users) => expect(users).toEqual(expectedUsers, 'expected users'), fail);
        expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
    });
});
