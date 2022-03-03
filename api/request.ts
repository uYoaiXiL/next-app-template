import axios from 'axios';
const instance = axios.create({
  baseURL: 'http://localhost:3005',
  timeout: 10000,
});

instance.interceptors.request.use(
  (config) => {
    const reqType = (config.method as string).toLocaleLowerCase();
    // if (reqType === 'post') {
    //   if (config.data !== 'string' && config?.headers['Content-Type'] !== 'multipart/form-data') {
    //     config.data = qs.stringify(config.data);
    //   }
    // }
    // config.headers.common['Authorization'] = authInfo.prefix + authInfo.token

    return config;
  },
  (err) => Promise.reject(err)
);
instance.interceptors.response.use(
  (res) => res.data,
  (err) => {
    if (err.response) {
      if (err.response.status === 401) {
        // message.error('身份认证失败，请重新登录！')
      } else if (err.response.status === 500) {
        // message.error('服务器异常')
      } else if (err.response.status === 404) {
        // message.error('请求地址不存在')
      } else if (err.data.message.includes('timeout')) {
        // message.error('请求超时！')
      }
      return Promise.reject(err.response.data);
    } else {
      return Promise.reject(err);
    }
  }
);

export default instance;
