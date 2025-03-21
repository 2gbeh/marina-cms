<div class="dropdown d-inline-block">
  <button type="button" class="btn header-item waves-effect" id="page-header-user-dropdown" data-bs-toggle="dropdown"
    aria-haspopup="true" aria-expanded="false">
    <img class="rounded-circle header-profile-user" src="{{ Vite::images('my-avatar.png') }}" alt="Avatar" />
    <span class="d-none d-xl-inline-block ms-1 fw-medium font-size-15">{{ Auth::user()->name }}</span>
    <i class="uil-angle-down d-none d-xl-inline-block font-size-15"></i>
  </button>
  <div class="dropdown-menu dropdown-menu-end">
    <a class="dropdown-item" href="#"><i class="uil uil-user-circle font-size-18 align-middle text-muted me-1"></i>
      <span class="align-middle">My
        Profile</span></a>
    <a class="dropdown-item d-block" href="#"><i class="uil uil-cog font-size-18 align-middle me-1 text-muted"></i>
      <span class="align-middle">Settings</span> </a>
    {{-- LOGOUT BUTTON --}}
    <x-header.logout-button />
  </div>
</div>