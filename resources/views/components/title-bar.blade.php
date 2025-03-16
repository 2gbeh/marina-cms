@props(['title'])

<div class="row">
  <div class="col-12">
    <div class="page-title-box d-flex align-items-center justify-content-between">
      <h4 class="mb-0">{{ $title }}</h4>

      <div class="page-title-right">
        <ol class="breadcrumb m-0">
          <li class="breadcrumb-item">
            <i class="uil-home-alt"></i>
            <a href="/dashboard">Home</a>
          </li>
          <li class="breadcrumb-item active">{{ $title }}</li>
        </ol>
      </div>

    </div>
  </div>
</div>