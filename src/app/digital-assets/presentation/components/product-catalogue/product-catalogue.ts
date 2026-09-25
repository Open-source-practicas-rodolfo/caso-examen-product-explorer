import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { ProductsStore } from '../../../application/products.store';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { TranslatePipe } from '@ngx-translate/core';
import { ProductList } from '../product-list/product-list';

@Component({
  selector: 'app-product-catalogue',
  standalone: true,
  imports: [MatButtonToggleModule, TranslatePipe, ProductList],
  templateUrl: './product-catalogue.html',
  styleUrl: './product-catalogue.css',
  changeDetection: ChangeDetectionStrategy.Eager
})
/**
 * @summary Main presentation component for the Product Catalogue.
 * Orchestrates category selection and passes product data to the list.
 */
export class ProductCatalogue implements OnInit {
  /** Injected application store for the Digital Assets bounded context. */
  protected store = inject(ProductsStore);

  /** Reactive signal containing the list of products. */
  protected readonly products = this.store.products;

  /** Initializes default products when the catalogue is mounted. */
  ngOnInit(): void {
    this.store.loadProducts('phone');
  }

  /**
   * Handles the category selection change from the toggle buttons.
   *
   * @param category - The selected product category ('phone' or 'laptop').
   */
  onCategoryChange(category: string): void {
    this.store.loadProducts(category);
  }
}
