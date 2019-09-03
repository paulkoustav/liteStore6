import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }

  getUser(userId) {
    return this.http.get('https://jsonplaceholder.typicode.com/users/' + userId)
  }

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }

  getProducts(q, p = 1, n = 20) {
    //return this.http.get('https://search.sastasundar.com/product_list_v2?format=0&q='+q)
    return this.http.get('http://127.0.0.1:90/liteStore6/get.php/products/search/q=' + q + '&p=' + p + '&n=' + n)
    //return this.http.get('http://127.0.0.1:90/liteStore6/get.php/products/search/q=' + q)
  }

  getProducts2(param) {
    let q = param.qString
    let p = param.page
    let n = param.limit
    return this.http.get('http://127.0.0.1:90/liteStore6/get.php/products/search/q=' + q + '&p=' + p + '&n=' + n)
  }

  addToCart(data) {
    return this.http.post('http://127.0.0.1:90/liteStore6/post.php/cart/addedit', data);
  }

  createCustomer(data) {
    return this.http.post('http://127.0.0.1:90/liteStore6/post.php/customer/addedit', data);
  }

  getCustomer(data) {
    var url = 'http://127.0.0.1:90/liteStore6/post.php/customer/details';
    var res = this.http.post(url, data);
    return res;
  }

  loginCustomer(data) {
    return this.http.post('http://127.0.0.1:90/liteStore6/post.php/customer/authentication', data);
  }

  homeContent(data) {
    return this.http.get('http://127.0.0.1:4200/assets/home.json');
  }

  cartItems(data) {
    return this.http.post('http://127.0.0.1:90/liteStore6/post.php/cart/details', data);
  }

  getProduct(pid) {
    return this.http.get('https://search.sastasundar.com/product_find?product_id=' + pid)
  }

  addAddress(data) {
    return this.http.post('http://127.0.0.1:90/liteStore6/post.php/cart/addAddress', data);
  }

  setAddress(data) {
    return this.http.post('http://127.0.0.1:90/liteStore6/post.php/cart/setAddress', data);
  }

  getPGdetails(data) {
    return this.http.post('http://127.0.0.1:90/liteStore6/post.php/pg/details', data);
  }

  placeOrder(data) {
    return this.http.post('http://127.0.0.1:90/liteStore6/post.php/cart/placeOrder', data);
  }

  getOrderId(data) {
    return this.http.post('http://127.0.0.1:90/liteStore6/post.php/cart/getOrderId', data);
  }


}
