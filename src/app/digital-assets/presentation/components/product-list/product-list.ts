import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Product } from '../../../domain/model/product.entity';
import { ProductItem } from '../product-item/product-item';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductItem, TranslatePipe],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductList {
  products = input.required<Product[]>();
}
