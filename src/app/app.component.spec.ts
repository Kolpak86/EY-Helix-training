import { Component, DebugElement } from '@angular/core';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { RouterLinkDirectiveStub } from 'src/testing';
import { AppComponent } from './app.component';
import { AuthenticationService } from './services/authentication.service';

@Component({ selector: 'app-users', template: '' })
export class UsersComponent {}

@Component({ selector: 'app-alert', template: '' })
export class AlertComponent {}
@Component({ selector: 'app-footer', template: '' })
export class FooterComponent {}

describe('AppComponent', () => {
    let app: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
    let linkDes: DebugElement[];
    let routerLinks: RouterLinkDirectiveStub[];

    beforeEach(async(() => {
        const authService = { currentUser: of(true) };

        TestBed.configureTestingModule({
            imports: [RouterTestingModule.withRoutes([{ path: 'users', component: UsersComponent }])],
            declarations: [AppComponent, RouterLinkDirectiveStub, UsersComponent, AlertComponent, FooterComponent],
            providers: [{ provide: AuthenticationService, useValue: authService }],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        app = fixture.debugElement.componentInstance;

        fixture.detectChanges(); // trigger initial data binding

        // find DebugElements with an attached RouterLinkStubDirective
        linkDes = fixture.debugElement.queryAll(By.directive(RouterLinkDirectiveStub));

        // get attached link directive instances
        // using each DebugElement's injector
        routerLinks = linkDes.map((de) => de.injector.get(RouterLinkDirectiveStub));
    });

    it('should create the app', () => {
        expect(app).toBeTruthy();
    });

    it(`should have current user`, () => {
        expect(app.currentUser).toBeTruthy();
    });

    it('can get RouterLinks from template', () => {
        expect(routerLinks.length).toBe(1, 'should have 1 routerLink');
        expect(routerLinks[0].linkParams).toBe('/users');
    });

    it('can click Users link in template', () => {
        // const usersLinkDe = linkDes[0]; // users link DebugElement
        const usersLink = routerLinks[0]; // users link directive

        expect(usersLink.navigatedTo).toBeNull('should not have navigated yet');

        // find the user's link DebugElement and element
        const usersLinkDe = fixture.debugElement.query(By.css('.nav-link'));
        const usersLinkEl = usersLinkDe.nativeElement;

        // usersLinkDe.triggerEventHandler('click', null);

        usersLinkEl.click();
        // fixture.detectChanges();

        expect(usersLink.navigatedTo).toBe('/users');
    });
});
