import { computed, inject, Injectable, signal } from '@angular/core';
import { Product } from '../domain/model/product.entity';
import { ProductsApi } from '../infrastructure/products-api';

@Injectable({ providedIn: 'root' })
/**
 * @summary Application service that coordinates state for the Product Catalogue.
 */
export class ProductsStore {
  private productsSignal = signal<Product[]>([]);
  private productsApi = inject(ProductsApi);

  readonly products = computed(() => this.productsSignal());

  /**
   * Loads products based on the user's category selection (phone/laptop).
   * @param query The search term to send to the API.
   */
  loadProducts(query: string) {
    this.productsApi.getProductsByQuery(query).subscribe((products) => {
      this.productsSignal.set(products);
    });
  }
}
