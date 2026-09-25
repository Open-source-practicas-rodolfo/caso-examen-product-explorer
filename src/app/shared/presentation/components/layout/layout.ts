import { Component } from '@angular/core';
import { Toolbar } from '../toolbar/toolbar';
import { Footer } from '../footer/footer';
import { ProductCatalogue } from '../../../../digital-assets/presentation/components/product-catalogue/product-catalogue';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [Toolbar, ProductCatalogue, Footer],
  templateUrl: './layout.html',
  styleUrl: './layout.css'
})
export class Layout {
}
