import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsOfInterestComponent } from './products-of-interest.component';

describe('ProductsOfInterestComponent', () => {
  let component: ProductsOfInterestComponent;
  let fixture: ComponentFixture<ProductsOfInterestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsOfInterestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsOfInterestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
