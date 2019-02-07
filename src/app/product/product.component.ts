import { Component, OnInit } from '@angular/core';
import {ProductMockService} from './product.mock.service'
import { Product } from '../shared/product';
import { FormGroup, Validators ,FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products : Product[];

  productForm : FormGroup;

  constructor(private productService : ProductMockService,private fb:FormBuilder) 
  {
      this.productForm=this.fb.group({
        ref:['',Validators.required],
        quantity:'',
        unitPrice:''
      })
   }

  ngOnInit() {
    this.products=this.productService.getProducts();
  }

}
