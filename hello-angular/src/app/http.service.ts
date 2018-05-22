import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class HttpService {
  constructor(private _http: HttpClient) {
   }

  getProducts() {
    return this._http.get('/products');
  }
  findProducts(ID) {
    return this._http.get('/products/' + ID);
  }
  deleteProducts(ID) {
    let tempObservable = this._http.delete('/products/' + ID);
    tempObservable.subscribe(data => console.log('Deleted product with id: ', data));
    return this._http.get('/pets');
  }
  add_product(new_product) {
    console.log('made it to service');
    console.log(new_product);
    return this._http.post('/products', new_product);
  }
  edit_product(ID, edit_product) {
    console.log('Made it to edit_product in SERVICE');
    return this._http.put('/products/' + ID, edit_product);
  }

}
