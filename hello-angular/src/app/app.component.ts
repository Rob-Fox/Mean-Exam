  import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Commerce Manager';
  products = [];
  product = {};
  new_product: any;
  edit_product: any;
  error_check: Boolean = false;
  error_arr = [];

  constructor(private _httpService: HttpService) { }
    ngOnInit() {
      this.new_product = {name: ''};
      this.edit_product = {name: ''};
    }
    on_submit() {
      console.log('form submitted');
      // console.log(add_task);
      let add_product = this._httpService.add_product(this.new_product);
      add_product.subscribe(data => {
        console.log('Adding a product', data['error']);
        if ( data['error'] !==  '') {
          this.error_check = true;
          this.error_arr.push({'bullshit': data['error']['errors']['name']['message']});
          console.log(this.error_arr);
        }
      });
      this.new_product = { name: ''};
      this.error_arr = [];
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
      let observable_product = this._httpService.findProducts(ID);
      observable_product.subscribe(data => {
        console.log('Got specified product', data);
        this.product = data['data'];
        console.log('dude', this.product);
      });
    }
  // editTask(ID) {
  //   let observable_task = this._httpService.findTasks(ID);
  //   observable_task.subscribe(data => {
  //     console.log('Got specified task', data);
  //     this.task = data['data'];
  //     console.log('dude', this.task);
  //   });
  // }
    on_edit(ID) {
      console.log('Product edited');
      let editable_product = this._httpService.edit_product(ID, this.edit_product);
      // let editable_task = this._httpService.findTasks(ID);
      editable_product.subscribe(data => {
        console.log('got an editable author');

      });
    }
    delete_product(ID){
      let deletable_products = this._httpService.deleteProducts(ID);
    }
}
