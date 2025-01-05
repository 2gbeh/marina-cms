@props(['mobile'=>false])

@if ($mobile)
<div class="dropdown d-inline-block d-lg-none ms-2">
  <button type="button" class="btn header-item noti-icon waves-effect" id="page-header-search-dropdown"
    data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    <i class="uil-search"></i>
  </button>
  <div class="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0" aria-labelledby="page-header-search-dropdown">

    <form class="p-3">
      <div class="m-0">
        <div class="input-group">
          <input type="text" class="form-control" placeholder="Search ..." aria-label="Recipient's username">
          <div class="input-group-append">
            <button class="btn btn-primary" type="submit"><i class="mdi mdi-magnify"></i></button>
          </div>
        </div>
      </div>
    </form>
  </div>
</div>
@else
<form class="app-search d-none d-lg-block">
  <div class="position-relative">
    <input type="text" class="form-control" placeholder="Search ( / )">
    <span class="uil-search"></span>
  </div>
</form>
@endif