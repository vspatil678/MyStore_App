import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  items!: MenuItem[];
  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'My Store'
      },
      {
          label: 'Checkout',
          icon: 'pi pi-shopping-cart',

      }
  ];
  }

}
