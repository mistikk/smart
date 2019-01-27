import api from '../config/api';

export const login = data => new Promise((resolve, reject) => {
  api
    .post('/auth', data)
    .then((res) => {
      api.defaults.headers.common.authtoken = res.data.data.token;
      resolve(res.data.data);
    })
    .catch((error) => {
      reject(error);
    });
});
