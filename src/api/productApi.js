import ProductService from '../services/ProductService';
import {
  getSingleProductPending, getSingleProductSuccess,
  getSingleProductFail, fetchProductsPending,
  fetchProductsSuccess, fetchProductsFail,
} from '../store/actions/productActions';

const productService = new ProductService();

export const fetchProducts = () => async (dispatch) => {
  dispatch(fetchProductsPending());
  await productService.getAll()
    .then((response) => dispatch(fetchProductsSuccess(response.data)))
    .catch((error) => dispatch(fetchProductsFail(error.message)));
};

export const getSingleProduct = (id) => async (dispatch) => {
  dispatch(getSingleProductPending());
  await productService.getSingleProduct(id)
    .then((response) => dispatch(getSingleProductSuccess(response.data)))
    .catch((error) => dispatch(getSingleProductFail(error.message)));
};
