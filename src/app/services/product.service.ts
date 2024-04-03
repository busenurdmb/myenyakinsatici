import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { listResponseModel } from '../models/listResponsemodel';
import { responseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/SingleResponselModel';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiurl = 'http://localhost:27392/api/';

  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<listResponseModel<Product>> {
    let newPath = this.apiurl + 'Products/getall';
    return this.httpClient.get<listResponseModel<Product>>(newPath);
  }

  getProductsbycategory(
    categoryid: number
  ): Observable<listResponseModel<Product>> {
    let newPath = this.apiurl + 'Products/getbycategory/ ' + categoryid;

    return this.httpClient.get<listResponseModel<Product>>(newPath);
  }

  getProductsDetails(
    productId: number
  ): Observable<SingleResponseModel<Product>> {
    let newPath = this.apiurl + 'Products/getbyid/' + productId;
    return this.httpClient.get<SingleResponseModel<Product>>(newPath);
  }

  add(product: Product): Observable<responseModel> {
    console.log('3');
    return this.httpClient.post<responseModel>(
      this.apiurl + 'Products/add',
      product
    );
  }
  update(product: Product): Observable<responseModel> {
    console.log('update service');
    return this.httpClient.post<responseModel>(
      this.apiurl + 'Products/update',
      product
    );
  }
  deleteProduct(product: Product): Observable<responseModel> {
    console.log('update service');
    return this.httpClient.post<responseModel>(
      this.apiurl + 'Products/delete',
      product
    );
  }
}
