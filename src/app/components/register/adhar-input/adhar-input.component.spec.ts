import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdharInputComponent } from './adhar-input.component';

describe('AdharInputComponent', () => {
  let component: AdharInputComponent;
  let fixture: ComponentFixture<AdharInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdharInputComponent ]
    })
    .compileComponents();
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
