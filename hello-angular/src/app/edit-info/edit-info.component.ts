import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit-info',
  templateUrl: './edit-info.component.html',
  styleUrls: ['./edit-info.component.css']
})
export class EditInfoComponent implements OnInit {
  tag_line = 'Update Product';
  edit_product: any;
  products = [];
  id: any;
  error_check: Boolean = false;
  error_arr = [];

  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }
  ngOnInit() {
    this.edit_product = { ID: '', Name: '', quantity: '', price: ''};
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
  reset_click(ID) {
    console.log('reset click');
    this.get_product(ID);
  }
  edit_submit(ID) {
    console.log('Product edited');
    let editable_product = this._httpService.edit_product(ID, this.edit_product);
    editable_product.subscribe(data => {
      console.log('got an editable product');
      if (data['error'] !== undefined) {
        console.log('Adding a product', data['error']);
        if (data['error']['errors'] !== undefined) {
          console.log('there were errors');
          if (data['error']['errors']['Name'] !== undefined) {
            console.log('data["error"]["errors"]["Name"]', data['error']['errors']['Name']);
            this.error_check = true;
            this.error_arr.push({ 'bullshit': data['error']['errors']['Name']['message'] });
            // console.log('Error_arr', this.error_arr);
          }
          if (data['error']['errors']['quantity'] !== undefined) {
            console.log('data["error"]["errors"]["quantity"]', data['error']['errors']['quantity']);
            this.error_check = true;
            this.error_arr.push({ 'bullshit': data['error']['errors']['quantity']['message'] });
            // console.log('Error_arr', this.error_arr);
          }
          if (data['error']['errors']['price'] !== undefined) {
            console.log('data["error"]["errors"]["price"]', data['error']['errors']['price']);
            this.error_check = true;
            this.error_arr.push({ 'bullshit': data['error']['errors']['price']['message'] });
            console.log('Error_arr', this.error_arr);
          }
        }
      }
      else {
        console.log('no errors');
        this._router.navigate(['/products']);
      }
    });
    if (this.error_arr === []) {
      console.log('empty errors');
    }
    this.error_arr = [];
  }
}
