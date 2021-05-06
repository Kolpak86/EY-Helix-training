import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { Router } from '@angular/router';
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
            providers: [{ provide: Router, useValue: routerSpy }],
        }).compileComponents();
    }));

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    });

    it(`should have as title 'test-banking'`, () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app.currentUser).toBeFalsy();
    });

    it('should render title', () => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('.content span').textContent).toContain('test-banking app is running!');
    });
});
