import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { AdharInputComponent } from './adhar-input.component';

describe('AdharInputComponent', () => {
    let component: AdharInputComponent;
    let fixture: ComponentFixture<AdharInputComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AdharInputComponent],
            imports: [ReactiveFormsModule, HttpClientTestingModule, RouterTestingModule],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AdharInputComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
