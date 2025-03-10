import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ProductResult } from '../models/product-result.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  httpClient = inject(HttpClient);
  constructor() { }

  search(codeBarre: string) {
    return this.httpClient.get<ProductResult>(
      `https://world.openfoodfacts.org/api/v3/product/${codeBarre}.json`
    );
  }
}
