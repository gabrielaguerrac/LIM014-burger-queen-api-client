import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarSideWaiterComponentComponent } from './bar-side-waiter-component.component';

describe('BarSideWaiterComponentComponent', () => {
  let component: BarSideWaiterComponentComponent;
  let fixture: ComponentFixture<BarSideWaiterComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarSideWaiterComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarSideWaiterComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
