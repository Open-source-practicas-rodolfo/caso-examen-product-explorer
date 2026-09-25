/**
 * @summary Represents a product in the business domain.
 */
export class Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  rating: number;
  image: string;

  constructor() {
    this.id = 0;
    this.title = '';
    this.description = '';
    this.category = '';
    this.price = 0;
    this.rating = 0;
    this.image = '';
  }
}
