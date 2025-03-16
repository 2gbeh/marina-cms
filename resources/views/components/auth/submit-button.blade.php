<button class="btn btn-primary w-sm waves-effect waves-light" type="button" id="submit-btn">
  <div class="d-flex align-items-center justify-content-center gap-2">
    <span class="spinner-border spinner-border-sm d-none" aria-hidden="true" id="spinner"></span>
    {{ $text }}
  </div>
</button>

@push('scripts')
<script>
  $('#submit-btn').click(function() {
    $(this).find('#spinner').removeClass('d-none');
    $('#form').submit();
  })
</script>
@endpush