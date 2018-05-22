import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  tag_line = 'New Product';
  new_product: any;
  error_check: Boolean = false;
  error_arr = [];
  submit_check: Boolean = false;

  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.new_product = { ID: '', Name: '', quantity: 0, price: 0 };
    if (this.new_product.Name.length > 2) {
      if (this.new_product.quantity >= 0) {
        if (this.new_product.price >= 0) {
          this.submit_check = true;
        }
      }

    }
  }
  on_submit() {
    console.log('form submitted');
    let add_product = this._httpService.add_product(this.new_product);
    // console.log(add_task);
    add_product.subscribe(data => {
      console.log('Adding a product', data['error']);
      if (data['error'] !== undefined) {
        console.log('errors?');
        if (data['error']['errors']['Name'] !== undefined) {
          console.log('data["error"]["errors"]["Name"]', data['error']['errors']['Name']);
          this.error_check = true;
          this.error_arr.push({ 'bullshit': data['error']['errors']['Name']['message'] });
          // console.log('Error_arr', this.error_arr);
        }
        else if (data['error']['errors']['quantity'] !== undefined) {
          console.log('data["error"]["errors"]["quantity"]', data['error']['errors']['quantity']);
          this.error_check = true;
          this.error_arr.push({ 'bullshit': data['error']['errors']['quantity']['message'] });
          // console.log('Error_arr', this.error_arr);
        }
        else if (data['error']['errors']['price'] !== undefined) {
          console.log('data["error"]["errors"]["price"]', data['error']['errors']['price']);
          this.error_check = true;
          this.error_arr.push({ 'bullshit': data['error']['errors']['price']['message'] });
          console.log('Error_arr', this.error_arr);
        }
      }
      else {
        console.log('now I should re route to /products');
        this._router.navigate(['/']);
      }
    });
    this.new_product = { Name: '', quantity: 0, price: 0};
    this.error_arr = [];
  }
  cancel_click() {
    this._router.navigateByUrl('/products');
  }

}
