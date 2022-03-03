import * as axios from 'axios';

declare module 'axios' {
  export interface AxiosResult<T = any> {
    status: number;
    message: string;
    data: T;
    time: string;
  }
}
