<form method="POST" action="{{ route('logout') }}" id="logout-form">
  @csrf
  <div class="dropdown-item cursor-pointer" role="button" id="logout-btn">
    <i class="uil uil-sign-out-alt font-size-18 align-middle me-1 text-muted"></i>
    <span class="align-middle">Logout</span>
  </div>
</form>

@push('scripts')
<script>
  $('#logout-btn').click(() => {
    if (confirm('Exit Application?')){
      $('#logout-form').submit();
    }
  })
</script>
@endpush