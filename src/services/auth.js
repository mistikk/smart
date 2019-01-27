import api from '../config/api';

export const login = data => new Promise((resolve, reject) => {
  const token = localStorage.getItem('token');
  if (token) {
    api.defaults.headers.common.authtoken = token;
    resolve(token);
  } else {
    api
      .post('/auth', data)
      .then((res) => {
        api.defaults.headers.common.authtoken = res.data.data.token;
        localStorage.setItem('token', res.data.data.token);
        resolve(res.data.data);
      })
      .catch((error) => {
        reject(error);
      });
  }
});
