import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthGraphComponent } from './month-graph.component';

describe('MonthGraphComponent', () => {
  let component: MonthGraphComponent;
  let fixture: ComponentFixture<MonthGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
