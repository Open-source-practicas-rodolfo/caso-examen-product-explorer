import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { Product } from '../domain/model/product.entity';
import { DummyjsonProductResource, DummyJsonSearchResponse } from './dummyjson-response';
import { ProductAssembler } from './product-assembler';

@Injectable({ providedIn: 'root' })
/**
 * @summary Service responsible for fetching products from DummyJSON API.
 */
export class ProductsApi {
  private baseUrl = environment.dummyjsonApiBaseUrl;
  private endpoint = environment.productsDummyjsonProductsEndpointPath;

  constructor(private http: HttpClient) {}

  /**
   * Fetches products based on a search query with a limit of 12.
   * @param query - The search term.
   */
  getProductsByQuery(query: string): Observable<Product[]> {
    const url = `${this.baseUrl}${this.endpoint}?q=${query}&limit=12`;

    return this.http
      .get<DummyJsonSearchResponse>(url)
      .pipe(
        map((response) => ProductAssembler.toEntitiesFromResponse(response.products))
      );
  }
}
