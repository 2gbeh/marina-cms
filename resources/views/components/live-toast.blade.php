{{-- CLASS-BASED COMPONENT --}}

@isset($message)

<button type="button" class="d-none" id="liveToastBtn">Toast!</button>

<div class="position-fixed top-0 end-0 p-3" style="z-index: 11">
  <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header">
      <i @class(["me-2", $ctx->icon, $ctx->color])></i>
      <strong @class(["me-auto", $ctx->color])>{{ $ctx->title }}</strong>
      <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body">
      {{ $message }}
    </div>
  </div>
</div>

@push('scripts')
<script>
  $(() => $('#liveToastBtn').click());
  // $(() => $('#liveToast').toggle());
</script>
@endpush

@endisset