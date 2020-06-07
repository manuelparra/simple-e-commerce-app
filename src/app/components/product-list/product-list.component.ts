import { Component, OnInit } from '@angular/core';

import { products } from '../../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products = products;

  constructor() { }

  ngOnInit() {
  }

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    console.log('Hizo click');
    window.alert('You will be notified when the product goes on sale');
  }

  onShownotify() {
    console.log("I'm over button now");
  }
}