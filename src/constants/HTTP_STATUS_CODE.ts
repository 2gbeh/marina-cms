// https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
const Obj = Object.freeze({
  PROCESSING: 102,
  //
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  //
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
});

const rawText = (str:string)=>str.replaceAll("_", " ").toLocaleLowerCase()

export function getStatusText(int: number) {
  let arr = Object.entries(Obj).find(([_, v]) => int == v);
  return arr
    ? rawText(arr[0])
    : "Undefined";
}

export function getStatusCode(str: string) {
  let arr = Object.entries(Obj).find(([k, _]) => rawText(str) == rawText(k));
  return arr
    ? arr[1]
    : 0;
}

export default Obj;
