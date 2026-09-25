import { Product } from '../domain/model/product.entity';
import { DummyjsonProductResource } from './dummyjson-response';

/**
 * @summary Utility class to transform raw external DTOs into pure Domain Entities.
 */
export class ProductAssembler {

  static toEntityFromResource(resource: DummyjsonProductResource): Product {
    const entity = new Product();
    entity.id = resource.id;
    entity.title = resource.title;
    entity.description = resource.description;
    entity.category = resource.category;
    entity.price = resource.price;
    entity.rating = resource.rating;

    // Asignamos el thumbnail de la API a nuestra propiedad image
    entity.image = resource.thumbnail;

    return entity;
  }

  static toEntitiesFromResponse(resources: DummyjsonProductResource[]): Product[] {
    return resources.map((resource) => this.toEntityFromResource(resource));
  }
}
