@props(['flex' => false])

<div @class([ 'modal-footer'=> !$flex,
  'd-flex align-items-center justify-content-between py-3 px-3' => $flex,
  ])
  >
  {{ $slot }}
</div>