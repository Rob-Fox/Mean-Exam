import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class HomeComponent implements OnInit {
  tag_line = 'Product List';
  products = [];
  product = {};
  edit_product: any;

  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }
  ngOnInit() {
    this.edit_product = { Name: '' };
    let products_get = this._httpService.getProducts();
    products_get.subscribe(data => {
      console.log('displaying products', data);
      this.products = data['data'];
    });
  }
  getProducts() {
    let observable_products = this._httpService.getProducts();
    observable_products.subscribe(data => {
      console.log('Got all products', data);
      this.products = data['data'];
      console.log('Hey', this.products);
    });
    // this._httpService.getTasks();
  }
  showProduct(ID) {
    console.log('attempting to show product', ID);
    let show_product_observable = this._httpService.findProducts(ID);
    show_product_observable.subscribe(data => {
      console.log('made it in to subscribe', data['data']);
      this.product = data['data'];
    });
    this._router.navigate(['/products/' + ID]);
  }
  on_new(ID) {
    this._router.navigate(['/products/new']);
  }
  on_edit(ID) {
    this._router.navigate(['/products/' + ID + '/edit']);
  }
  delete_product(ID) {
    let deletable_products = this._httpService.deleteProducts(ID);
  }
  go_new() {
    this._router.navigate(['/new']);
  }
}
