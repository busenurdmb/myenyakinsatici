import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Category } from '../models/category';
import { listResponseModel } from '../models/listResponsemodel';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  apiurl = 'http://localhost:5233/api/Categories/getall';

  constructor(private httpClient: HttpClient) {}

  getCategorys(): Observable<listResponseModel<Category>> {
    return this.httpClient.get<listResponseModel<Category>>(this.apiurl);
  }
}
