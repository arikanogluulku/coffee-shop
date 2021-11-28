export const favoriteControl = (data, id) => {
  let isFavorite;
  isFavorite = data.some((f) => f.productID === id);
  return isFavorite;
};
