import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersCarComponent } from './orders-car.component';

describe('OrdersCarComponent', () => {
  let component: OrdersCarComponent;
  let fixture: ComponentFixture<OrdersCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersCarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
