import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared/shared.module';

@Component({ selector: 'app-alert', template: '' })
class AlertStubComponent {}

describe('AppComponent', () => {
    beforeEach(async(() => {
        const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

        TestBed.configureTestingModule({
            imports: [RouterTestingModule, SharedModule, HttpClientModule],
            declarations: [AppComponent, AlertStubComponent],
        }).compileComponents();
    }));

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    });

    it(`should not have current user`, () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app.currentUser).toBeFalsy();
    });
});
