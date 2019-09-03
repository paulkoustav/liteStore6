import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  api_endpoint = 'http://127.0.0.1/api_liteStore/';

  constructor(private http: HttpClient) { }

  getProducts(q, p = 1, n = 20) {
    return this.http.get(this.api_endpoint + 'get.php/products/search/q=' + q + '&p=' + p + '&n=' + n)
  }

  getProductsList(param) {
    let q = param.qString
    let p = param.page
    let n = param.limit
    return this.http.get(this.api_endpoint + 'get.php/products/search/q=' + q + '&p=' + p + '&n=' + n)
  }

  getMyOrders(param) {
    let q = param.userId
    let p = param.page
    let n = param.limit
    return this.http.get(this.api_endpoint + 'get.php/customer/myorders/q=' + q + '&p=' + p + '&n=' + n)
  }

  addToCart(data) {
    return this.http.post(this.api_endpoint + 'post.php/cart/addedit', data);
  }

  createCustomer(data) {
    return this.http.post(this.api_endpoint + 'post.php/customer/addedit', data);
  }

  getCustomer(data) {
    var url = this.api_endpoint + 'post.php/customer/details';
    var res = this.http.post(url, data);
    return res;
  }

  loginCustomer(data) {
    return this.http.post(this.api_endpoint + 'post.php/customer/authentication', data);
  }

  homeContent() {
    return this.http.get('http://127.0.0.1:4201/assets/home.json');
  }

  getCategories() {
    return this.http.get(this.api_endpoint + 'get.php/products/categories/')
  }

  cartItems(data) {
    return this.http.post(this.api_endpoint + 'post.php/cart/details', data);
  }

  getProduct(pid) {
    return this.http.get(this.api_endpoint + 'get.php/products/details/id=' + pid )
  }

  addAddress(data) {
    return this.http.post(this.api_endpoint + 'post.php/cart/addAddress', data);
  }

  setAddress(data) {
    return this.http.post(this.api_endpoint + 'post.php/cart/setAddress', data);
  }

  getPGdetails(data) {
    return this.http.post(this.api_endpoint + 'post.php/pg/details', data);
  }

  placeOrder(data) {
    return this.http.post(this.api_endpoint + 'post.php/cart/placeOrder', data);
  }

  getOrderId(data) {
    return this.http.post(this.api_endpoint + 'post.php/cart/getOrderId', data);
  }


}
