import { User } from '../models';

import { UserService } from './user.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { environment } from '../../environments/environment';
import { asyncData } from '../../testing';

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

describe('HeroesService (with mocks)', () => {
    let httpClient: HttpClient;
    let httpTestingController: HttpTestingController;
    let userService: UserService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            // Import the HttpClient mocking services
            imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([])],
            // Provide the service-under-test
            providers: [UserService],
        });

        // Inject the http, test controller, and service-under-test
        // as they will be referenced by each test.
        httpClient = TestBed.get(HttpClient);
        httpTestingController = TestBed.get(HttpTestingController);
        userService = TestBed.get(UserService);
    });

    afterEach(() => {
        // After every test, assert that there are no more pending requests.
        httpTestingController.verify();
    });

    /// HeroService method tests begin ///
    describe('#getUsers', () => {
        let expectedUsers: User[];

        beforeEach(() => {
            userService = TestBed.get(UserService);
            expectedUsers = [
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
            ] as User[];
        });

        it('should return expected users (called once)', () => {
            userService.getUsers().subscribe((users) => expect(users).toEqual(expectedUsers, 'should return expected users'), fail);

            // UsersService should have made one request to GET heroes from expected URL
            const req = httpTestingController.expectOne(environment.apiUrl);
            expect(req.request.method).toEqual('GET');

            // Respond with the mock heroes
            req.flush(expectedUsers);
        });

        it('should be OK returning no heroes', () => {
            userService.getUsers().subscribe((users) => expect(users.length).toEqual(0, 'should have empty users array'), fail);

            const req = httpTestingController.expectOne(environment.apiUrl);
            req.flush([]); // Respond with no users
        });

        it('should return expected users (called multiple times)', () => {
            userService.getUsers().subscribe();
            userService.getUsers().subscribe();
            userService.getUsers().subscribe((users) => expect(users).toEqual(expectedUsers, 'should return expected users'), fail);

            const requests = httpTestingController.match(environment.apiUrl);
            expect(requests.length).toEqual(3, 'calls to getUsers()');

            // Respond to each request with different mock hero results
            requests[0].flush([]);
            requests[1].flush([
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
            ]);
            requests[2].flush(expectedUsers);
        });
    });
});
