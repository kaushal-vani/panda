import { Product } from '../models/product-card.interfaces';

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Product A',
    price: 100,
    quantity: 1,
    stock: 50,
    sale: true,
    newArrival: false,
  },
  {
    id: 2,
    name: 'Product B',
    price: 200,
    quantity: 1,
    stock: 20,
    sale: false,
    newArrival: true,
  },
  {
    id: 3,
    name: 'Product C',
    price: 300,
    quantity: 1,
    stock: 10,
    sale: false,
    newArrival: false,
  },
];
