import instance from './instance';

export default class ProductService {
  getAll() {
    return instance.get('/products');
  }

  getSingleProduct(id) {
    return instance.get(`/products/${id}`);
  }
}
