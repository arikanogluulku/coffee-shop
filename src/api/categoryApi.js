import CategoryService from '../services/CategoryService';
import { fetchCategoriesPending, fetchCategoriesSuccess, fetchCategoriesFail } from '../store/actions/categoryActions';

const categoryService = new CategoryService();

export const fetchCategory = () => async (dispatch) => {
  dispatch(fetchCategoriesPending());
  categoryService.getAll()
    .then((response) => dispatch(fetchCategoriesSuccess(response.data)))
    .catch((error) => dispatch(fetchCategoriesFail(error.message)));
};
