import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductivityKitchenComponent } from './productivity-kitchen.component';

describe('ProductivityKitchenComponent', () => {
  let component: ProductivityKitchenComponent;
  let fixture: ComponentFixture<ProductivityKitchenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductivityKitchenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductivityKitchenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
