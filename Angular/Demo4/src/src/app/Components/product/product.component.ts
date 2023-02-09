import { Component, Input } from '@angular/core';
import { Product } from 'src/src/models/product';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent {

  public valueLikes : number = 0;

constructor() {}

@Input() product = {Id: 0,Name : "",Image : "", Comment :"",Price : 0, Discount:0}

ngOnInit() {}

IncrementLikes(){
  this.valueLikes++;
}
  
}
