import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Cart } from '../cart';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart1',
  templateUrl: './cart1.component.html',
  styleUrls: ['./cart1.component.css']
})
export class Cart1Component implements OnInit {
  cart: Cart = {
    id: 1,
    name: 'Windstorm'
  };
    items;
    
  constructor(
    private cartService: CartService
  ) { }
  
  sendToCart() {
    this.cartService.sendToCart();
    window.alert('Thank you for your order!');
  }
  ngOnInit() {
    this.items = this.cartService.getItems();
  }

 

}
