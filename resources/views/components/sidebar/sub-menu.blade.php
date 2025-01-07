@props(['href'=>'#','badge','feat'])

<li>
    <a href="{{ $href }}">
        {{-- BADGE --}}
        @isset($badge)
        <span class="badge rounded-pill bg-danger float-end">{{ $badge }}</span>
        @endisset
      
        {{-- FEATURE --}}
        @isset($feat)
        <span class="badge rounded-pill bg-warning float-end">New</span>
        @endisset
      
        {{ $slot }}
    </a>
</li>