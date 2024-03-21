import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { listResponseModel } from '../models/listResponsemodel';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiurl = 'http://localhost:5233/api/';

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
}
