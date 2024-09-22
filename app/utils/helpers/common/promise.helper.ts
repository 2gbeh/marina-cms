export class PromiseHelper {
  static mockApiCall = (secs = 3) =>
    new Promise((resolve) =>
      setTimeout(() => resolve(Math.random() < 0.5), secs * 1000)
    );

  static mockApiCallSuccessOnly = <T>(response: T, secs = 3): Promise<T> =>
    new Promise((resolve) => setTimeout(() => resolve(response), secs * 1000));

  static mockApiCallSuccessOrError = <T, K>(
    responseSuccess: T,
    responseError: K,
    secs = 3
  ): Promise<T | K> =>
    new Promise((resolve) =>
      setTimeout(
        () => resolve(Math.random() < 0.5 ? responseSuccess : responseError),
        secs * 1000
      )
    );
}
