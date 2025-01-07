<?php

namespace App\View\Components;

use Illuminate\View\Component;
use Illuminate\View\View;

class LiveToast extends Component
{
  public string|null $message;
  public object $ctx;

  public function __construct(
    private ?int $as = 422,
    private null|string|array $errorBag,
  ) {
    $this->setMessage();
    $this->setContext();
  }

  public function render(): View
  {
    return view('components.live-toast');
  }

  private function setMessage(): void
  {
    $errorBag = $this->errorBag;
    switch (gettype($errorBag)) {
      case 'string':
        $this->message = $errorBag;
        break;
      case 'array':
        $this->message = count($errorBag) > 0 ? $errorBag[0] : null;
        break;
      default:
        $this->message = null;
    }
    // $this->message = __('auth.failed');
  }

  private function setContext(): void
  {
    $ctx = match ($this->as) {
      200 => ['title' => 'Success', 'color' => 'text-success', 'icon' => 'uil-check-circle'],
      201 => ['title' => 'Success', 'color' => 'text-success', 'icon' => 'uil-check-circle'],
      204 => ['title' => 'Success', 'color' => 'text-success', 'icon' => 'uil-check-circle'],
      400 => ['title' => 'Request Error', 'color' => 'text-danger', 'icon' => 'uil-exclamation-triangle'],
      401 => ['title' => 'Authorization Error', 'color' => 'text-danger', 'icon' => 'uil-exclamation-triangle'],
      403 => ['title' => 'Permissions Error', 'color' => 'text-info', 'icon' => 'uil-info-circle'],
      404 => ['title' => 'Response Error', 'color' => 'text-danger', 'icon' => 'uil-exclamation-triangle'],
      422 => ['title' => 'Validation Error', 'color' => 'text-danger', 'icon' => 'uil-exclamation-triangle'],
      500 => ['title' => 'Server Error', 'color' => 'text-danger', 'icon' => 'uil-exclamation-triangle'],
      default => ['title' => 'Validation Error', 'color' => 'text-danger', 'icon' => 'uil-exclamation-triangle'],
    };
    // 
    $this->ctx = (object) $ctx;
  }
}

// PROCESSING: 102,
// OK: 200,
// CREATED: 201,
// NO_CONTENT: 204,
// MOVED_PERMANENTLY: 301,
// FOUND: 302,
// SEE_OTHER: 303,
// TEMPORARY_REDIRECT: 307,
// PERMANENT_REDIRECT: 308,
// BAD_REQUEST: 400,
// UNAUTHORIZED: 401,
// PAYMENT_REQUIRED: 402,
// FORBIDDEN: 403,
// NOT_FOUND: 404,
// METHOD_NOT_ALLOWED: 405,
// REQUEST_TIMEOUT: 408,
// CONTENT_TOO_LARGE: 413,
// UNSUPPORTED_MEDIA_TYPE: 415,
// I_AM_A_TEAPOT: 418,
// PAGE_EXPIRED: 419,
// UNPROCESSABLE_CONTENT: 422,
// TOO_MANY_REQUESTS: 429,
// INTERNAL_SERVER_ERROR: 500,
// BAD_GATEWAY: 502,
// SERVICE_UNAVAILABLE: 503,
// GATEWAY_TIMEOUT: 504,