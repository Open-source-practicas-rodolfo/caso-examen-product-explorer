import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Product } from '../../../domain/model/product.entity';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { TranslatePipe } from '@ngx-translate/core';
/**
 * @summary Presentation component that displays a single product in a card format.
 */
@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, TranslatePipe],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductItem {
  /** The product data passed from the parent list component. */
  product = input.required<Product>();
}
