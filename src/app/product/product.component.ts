import { Component, OnInit } from '@angular/core';
import {ProductMockService} from './product.mock.service'
import { Product } from '../shared/product';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products : Product[];
  constructor(private productService : ProductMockService) { }

  ngOnInit() {
    this.products=this.productService.getProducts();
  }

}
