import { Component, Input } from '@angular/core';
import { Product } from 'src/models/product';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent {
  
get message () {
 return this.product.LikeCount > 10 ? "Offers star" : ""; 
}

@Input() product:Product = {Id: 0,Name : "",Image : "", Comment :"",Price : 0, Discount:0, LikeCount:0}
 
}
