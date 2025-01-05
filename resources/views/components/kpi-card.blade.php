@props([
'icon',
'value',
'valuePrefix'=>'',
'valueSuffix'=>'',
'label',
'rateValue',
'rateLabel'=>'',
'low'=>false
])

<div class="col-md-6 col-xl-3">
  <div class="card">
    <div class="card-body">
      <div class="float-end mt-2">
        <div id="{{ $icon }}"></div>
      </div>
      <div>
        <h4 class="mb-1 mt-1">
          {{ $valuePrefix }}<span data-plugin="counterup">{{ $value }}</span>{{ $valueSuffix }}
        </h4>
        <p class="text-muted mb-0">{{ $label }}</p>
      </div>
      @isset ($rateValue)
      <p class="text-muted mt-3 mb-0">
        <span @class([ 'me-1' , $low ? 'text-danger' :'text-success'])>
          <i @class([ 'me-1' , $low ? 'mdi mdi-arrow-down-bold' :'mdi mdi-arrow-up-bold'])></i>
          {{ $rateValue }}%
        </span>
        {{ $rateLabel }}
      </p>
      @endisset
    </div>
  </div>
</div>