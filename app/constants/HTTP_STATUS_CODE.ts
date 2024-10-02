// https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
export const HTTP_STATUS_CODE = {
  PROCESSING: 102,
  //
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  //
  MOVED_PERMANENTLY: 301,
  FOUND: 302,
  SEE_OTHER: 303,
  TEMPORARY_REDIRECT: 307,
  PERMANENT_REDIRECT: 308,
  //
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  REQUEST_TIMEOUT: 408,
  CONTENT_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  I_AM_A_TEAPOT: 418,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  //
  INTERNAL_SERVER_ERROR: 500,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
};

const normalizeText = (str:string)=>str.replaceAll("_", " ").toLocaleLowerCase()

export function getStatusText(int: number) {
  let arr = Object.entries(HTTP_STATUS_CODE).find(([_, v]) => int == v);
  return arr
    ? normalizeText(arr[0])
    : "Undefined";
}

export function getStatus(str: string) {
  let arr = Object.entries(HTTP_STATUS_CODE).find(([k, _]) => normalizeText(str) == normalizeText(k));
  return arr
    ? arr[1]
    : 0;
}