<script>
  function logout(event) {
    event.preventDefault();
    if (confirm('Are you sure?')) {
      document.getElementById('logout-form').submit();
    }
  }
</script>
<div class="dropdown d-inline-block">
  <button type="button" class="btn header-item waves-effect" id="page-header-user-dropdown" data-bs-toggle="dropdown"
    aria-haspopup="true" aria-expanded="false">
    <img class="rounded-circle header-profile-user" src="{{ Vite::images('my-avatar.png') }}" alt="Header Avatar">
    <span class="d-none d-xl-inline-block ms-1 fw-medium font-size-15">{{ Auth::user()->name }}</span>
    <i class="uil-angle-down d-none d-xl-inline-block font-size-15"></i>
  </button>
  <div class="dropdown-menu dropdown-menu-end">
    <!-- item-->
    <a class="dropdown-item" href="#"><i class="uil uil-user-circle font-size-18 align-middle text-muted me-1"></i>
      <span class="align-middle">View
        Profile</span></a>
    <a class="dropdown-item" href="#"><i class="uil uil-wallet font-size-18 align-middle me-1 text-muted"></i>
      <span class="align-middle">My Wallet</span></a>
    <a class="dropdown-item d-block" href="#"><i class="uil uil-cog font-size-18 align-middle me-1 text-muted"></i>
      <span class="align-middle">Settings</span> <span
        class="badge bg-soft-success rounded-pill mt-1 ms-2">03</span></a>
    <a class="dropdown-item" href="#"><i class="uil uil-lock-alt font-size-18 align-middle me-1 text-muted"></i>
      <span class="align-middle">Lock screen</span></a>
    <a class="dropdown-item" href="javascript:void(0);" onClick="logout(event)">
      <i class="uil uil-sign-out-alt font-size-18 align-middle me-1 text-muted"></i>
      <span class="align-middle">Sign out</span>
    </a>
    <form method="POST" action="{{ route('logout') }}" class="d-none" id="logout-form">
      @csrf
    </form>
  </div>
</div>