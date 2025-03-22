@props([
'title',
'subtitle',
'address',
])

<div class="card pricing-box text-center">
  <div class="card-body p-4">
    <div>
      <div class="mt-3">
        <h5 class="mb-1">{{ $title }}</h5>
        <p class="text-muted">{{ $subtitle }}</p>
      </div>
      <div class="py-3">
        {{-- ICON, LOGO --}}
        {{ $slot }}
      </div>
    </div>
    <div class="py-4">
      <h4 class="font-monospace">{{ $address }}</h4>
      <p class="text-secondary text-decoration-underline">Wallet Address</p>
    </div>
    <div class="text-center plan-btn my-2">
      <button type="button" class="btn btn-primary waves-effect waves-light" data-bs-toggle="modal"
        data-bs-target="#depositDialog{{ $title }}">
        <i class="uil-money-withdraw me-1"></i>
        Deposit
      </button>
    </div>
  </div>
</div>