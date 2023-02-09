import { Component, Input } from '@angular/core';
import { Product } from 'src/src/models/product';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent {

  /*  pro : Product = {
    Id:1,
    Name : "Card title",
    Image : "Product1.png",
    Comment : `Some quick example text to build on the card title
               and make up the bulk of the card's content.`,
    Price : 109.99,
    Discount:50
    }*/

constructor() {}
@Input() product = {Id: 0,Name : "",Image : "", Comment :"",Price : 0, Discount:0}
ngOnInit() {}
  
}
