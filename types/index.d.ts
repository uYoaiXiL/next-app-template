declare namespace API {
  interface PageParams {
    pageNo: number;
    pageSize: number;
  }

  interface BasicProps<T> {
    value: T;
    onValue: (value: T) => void;
  }

  interface DataOption<K = string, V = string> {
    label: K;
    value: V;
  }

  interface PageResult<T> {
    total: number;
    list: T;
  }
}
