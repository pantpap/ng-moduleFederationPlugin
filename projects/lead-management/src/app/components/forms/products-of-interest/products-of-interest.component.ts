import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { productsOfInterest } from '../../../utils/data/products';
import { IProductOfInterest } from '../../../models';
@Component({
  selector: 'app-products-of-interest',
  templateUrl: './products-of-interest.component.html',
  styleUrls: ['./products-of-interest.component.scss']
})
export class ProductsOfInterestComponent implements OnInit {
  products: IProductOfInterest[] = productsOfInterest;
  productsOfInterestForm: FormGroup | undefined;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.productsOfInterestForm = this.toFormGroup(this.products);
    console.log(this.productsOfInterestForm); // Maybe this should be removed
  }

  toFormGroup(products: IProductOfInterest[]): FormGroup {
    const groups = products.reduce((acc, curr) => {
      const hasNested = curr && curr.items && curr.items.length;
      return {
        ...acc,
        [curr.name]: hasNested ? this.fb.array(curr.items.map(() => this.fb.control(false))) : [false]
      };
    }, {});
    return this.fb.group(groups);
  }
}
