import { Component } from '@angular/core';
import { Product } from 'src/models/product';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})

export class HelloWorldComponent {

    pro : Product = {
    Id:1,
    Name : "Card title",
    Image : "Product1.png",
    Comment : `Some quick example text to build on the card title
               and make up the bulk of the card's content.`,
    Price : 109.99
    }

  constructor() {}

  ngOnInit() {}
  
}
