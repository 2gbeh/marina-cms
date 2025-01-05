{{-- NOTE: class-based component --}}

<div class="row align-items-center g-0 mt-3">
  <div class="col-sm-3">
    <p class="text-truncate mt-1 mb-0"><i class="mdi mdi-circle-medium me-2 {{ $color->text }}"></i> {{ $label }} </p>
  </div>

  <div class="col-sm-9">
    <div class="progress mt-1" style="height: 6px;">
      <div class="progress-bar progress-bar {{ $color->bg }}" role="progressbar" style="width: {{ $value }}%"
        aria-valuenow="{{ $value }}" aria-valuemin="0" aria-valuemax="{{ $value }}">
      </div>
    </div>
  </div>
</div>