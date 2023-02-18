import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/models/product';
import { AppState } from '../../store/app-stats';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent {
  @Input() product:Product = {Id: 0,Name : "",Image : "", Comment :"",Price : 0, Discount:0, LikeCount:0}
  @Input() readonly:boolean = false; 
  constructor(private readonly store: AppState) {}
  
  @Output() OnAddProduct:EventEmitter<number> = new  EventEmitter<number>();
  get DiscountPrice(): number {
    return this.product.Price * this.product.Discount / 100
  }

  AddProduct(){ 
    //this.store.setIds(this.product.Id);
    this.OnAddProduct.emit(this.product.Id);
  }
 
}