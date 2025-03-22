@props([
'id',
'title',
'sticky'=>false
])

@if ($sticky)
<div class="modal fade" id="{{$id}}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" role="dialog"
  aria-labelledby="staticBackdropLabel" aria-hidden="true">
  @else
  <div class="modal fade" id="{{$id}}" tabindex="-1" role="dialog" aria-labelledby="defaultBackdropLabel"
    aria-hidden="true">
    @endif

    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{$title}}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
          </button>
        </div>
        {{-- WRAPPED BODY CONTENT --}}
        @isset($body)
        <div class="modal-body text-center">{{$body}}</div>
        @endisset

        {{-- CONTENT --}}
        {{ $slot }}
      </div>
    </div>
  </div>