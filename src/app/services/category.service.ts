import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Category } from '../models/category';
import { listResponseModel } from '../models/listResponsemodel';
import { SingleResponseModel } from '../models/SingleResponselModel';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  apiurl = 'http://localhost:27392/api/';

  constructor(private httpClient: HttpClient) {}

  getCategorys(): Observable<listResponseModel<Category>> {
    let newurl = this.apiurl + 'Categories/getall';
    return this.httpClient.get<listResponseModel<Category>>(newurl);
  }

  getcategorybyproductıd(
    productId: number
  ): Observable<SingleResponseModel<Category>> {
    let newurl = this.apiurl + 'Categories/getbycategory/' + productId;
    return this.httpClient.get<SingleResponseModel<Category>>(newurl);
  }
}
