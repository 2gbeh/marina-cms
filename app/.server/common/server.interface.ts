export enum EMethod {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  PATCH = "PATCH",
  DELETE = "DELETE",
}

export interface IAction {
  url: string;
  method: keyof typeof EMethod;
  body: Record<string, unknown>;
}