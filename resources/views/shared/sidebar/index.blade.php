<div class="vertical-menu" style="background-color: #1c2742;">
  {{-- LOGO --}}
  <x-drawer-logo />
  {{-- HAMBURGER MENU --}}
  <button type="button" class="btn btn-sm px-3 font-size-16 header-item waves-effect vertical-menu-btn">
    <i class="mdi mdi-menu"></i>
  </button>
  <div data-simplebar class="sidebar-menu-scroll">
    <div id="sidebar-menu">
      {{-- SIDEBAR MENU --}}
      <ul class="metismenu list-unstyled" id="side-menu">
        @includeIf('shared.sidebar.user-sidebar')
        {{-- --}}
        @includeIf('shared.sidebar.admin-sidebar')
        {{-- --}}
        @includeIf('shared.sidebar.super-admin-sidebar')
      </ul>
    </div>
  </div>
</div>