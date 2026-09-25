/**
 * @summary Maps the JSON structure of a single product returned by DummyJSON API.
 */
export interface DummyjsonProductResource {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  rating: number;
  thumbnail: string;
}

/**
 * @summary Maps the root JSON structure returned by the DummyJSON search endpoint.
 */
export interface DummyJsonSearchResponse {
  products: DummyjsonProductResource[];
  total: number;
  skip: number;
  limit: number;
}
