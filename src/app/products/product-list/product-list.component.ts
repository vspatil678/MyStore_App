import { Component, OnInit } from '@angular/core';
import { IProduct } from '../models/IProduct';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: IProduct[] = [];
  constructor() { }

  ngOnInit(): void {
    this.getProducts();
  }

  public getProducts() {
    this.products = [
      {
        title: 'Phone XL', description: 'A large phone with one of the best screens', price: '45000', quantity: 5, notifyMe: true
      },
      {
        title: 'Phone Mini', description: 'A great phone with one of the best cameras', price: '35000', quantity: 4
      },
      {
        title: 'Phone XL', description: 'A large phone with one of the best screens', price: '25000', quantity: 3
      }
    ]
  }

}
