import dayjs from 'dayjs';

export function result<T>(data: T) {
  return {
    status: 200,
    message: 'success',
    data,
    time: dayjs().format('YYYY-MM-DD HH:mm:ss'),
  };
}
