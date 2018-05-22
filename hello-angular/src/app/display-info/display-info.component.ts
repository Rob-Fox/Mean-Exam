import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-display-info',
  templateUrl: './display-info.component.html',
  styleUrls: ['./display-info.component.css']
})
export class DisplayInfoComponent implements OnInit {
  tag_line = 'Product Details';
  edit_product: any;
  products = [];
  id: any;
  like_button: Boolean = true;

  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }
  ngOnInit() {
    this.edit_product = {  ID: '', Name: '', quantity: '', price: ''};
    this.id = this._route.snapshot.paramMap.get('id');
    console.log('ID gotten from parammap', this.id);
    this.get_product(this.id);
  }
  get_product(ID) {
    let product = this._httpService.findProducts(ID);
    product.subscribe(data => {
      console.log('Found product data', data);
      this.edit_product = data['data'];
    });
  }
  remove_product(ID) {
    let product = this._httpService.deleteProducts(ID);
    product.subscribe(data => {
      console.log('Component deleting product');
    });
    this._router.navigateByUrl('/products');
  }
  cancel_click() {
    this._router.navigateByUrl('/products');
  }
}
