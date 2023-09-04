export interface IApiResult<T> {
  ok: boolean;
  isUnExpected: boolean;
  data: T;
}
