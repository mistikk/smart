import api from '../config/api';

export const getProductByCode = id => new Promise((resolve, reject) => {
  const product = localStorage.getItem(id);
  const now = new Date();

  if (product && JSON.parse(product).remove_from_cache > now) {
    resolve(JSON.parse(product));
  } else {
    api
      .get(`/products/get-product-by-code/${id}`)
      .then((res) => {
        localStorage.setItem(id, JSON.stringify({ ...res.data.data, remove_from_cache: now.setHours(now.getHours() + 1) }));
        resolve(res.data.data);
      })
      .catch((error) => {
        if (error.response.status === 401) {
          localStorage.removeItem('token');
        }
        reject(error);
      });
  }
});
