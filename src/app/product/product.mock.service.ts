import { Product } from "../shared/product";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn : "root"
})
export class ProductMockService{
      PRODUCTS : Product[]=[];

      constructor(){
          let p1 : Product = new Product('livre',50,20);
          let p2 : Product = new Product('stylo',10,90);
          let p3 : Product = new Product('chaier',60,20);

          this.PRODUCTS.push(p1);
          this.PRODUCTS.push(p2);
          this.PRODUCTS.push(p3);
      }

      public getProducts() : Product []{
          return this.PRODUCTS;
      }
}