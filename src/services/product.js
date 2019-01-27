import api from '../config/api';

export const getProductByCode = id => new Promise((resolve, reject) => {
  api
    .get(`/products/get-product-by-code/${id}`)
    .then((res) => {
      resolve(res.data.data);
    })
    .catch((error) => {
      reject(error);
    });
});
