@props(['title'=>'Error', 'message'])

<button type="button" class="d-none" id="liveToastBtn"></button>
<div class="position-fixed bottom-0 end-0 p-3" style="z-index: 11">
  <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header">
      <img src="{{ Vite::images('icon.png') }}" alt="" class="me-2" height="18">
      <strong class="me-auto">{{ $title }}</strong>
      <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body">
      {{ $message }}
    </div>
  </div>
</div>


@push('scripts')
<script>
$(() => {
  console.log("jQuery is working!");
});
</script>
@endpush