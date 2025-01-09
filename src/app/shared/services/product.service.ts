import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductType} from "../../../types/product.type";

@Injectable()
export class ProductService {

  private api: string = 'https://testologia.ru/tea';
  private products: ProductType[] | null = null;

  constructor(private http: HttpClient) { }

  getProducts(): Observable<ProductType[]> {
    return this.http.get<ProductType[]>(this.api);
  }

  getProduct(id: number): Observable<ProductType> {
    return this.http.get<ProductType>(this.api + '?id=' + id);
  }
}
