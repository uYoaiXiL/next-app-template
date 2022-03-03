import instance from './request';
import { AxiosRequestConfig, AxiosResult } from 'axios';

export interface AxiosService {
  <P, R>(url: string, data?: P, config?: AxiosRequestConfig): Promise<AxiosResult<R>>;
}

const get: AxiosService = (url, params, config) => instance.get(url, { params, ...config });

const post: AxiosService = (url, data, config) => instance.post(url, data, config);

const put: AxiosService = (url, params, config) => instance.get(url, { params, ...config });

const remove: AxiosService = (url, params, config) => instance.delete(url, { params, ...config });

const service = {
  get,
  post,
  put,
  remove,
};
export default service;
