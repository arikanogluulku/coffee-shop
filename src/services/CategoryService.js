import instance from './instance';

export default class CategoryService {
  getAll() {
    return instance.get('/category');
  }
}
