<header id="page-topbar">
  <div class="navbar-header">
    <div class="d-flex">
      {{-- LOGO --}}
      <x-drawer-logo />
      {{-- HAMBURGER MENU --}}
      <button type="button" class="btn btn-sm px-3 font-size-16 header-item waves-effect vertical-menu-btn">
        <i class="fa fa-fw fa-bars"></i>
      </button>
    </div>
    <div class="d-flex">
      {{-- NOTIFICATIONS --}}
      <x-header.notifications />
      {{-- ACCOUNT MENU --}}
      <x-header.account-menu>
        {{-- LOGOUT BUTTON --}}
        <x-header.logout-button />
      </x-header.account-menu>
    </div>
  </div>
</header>