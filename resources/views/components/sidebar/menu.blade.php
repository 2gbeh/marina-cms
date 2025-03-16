@props(['href'=>'#','icon','badge','feat','isNested'=>false])

<li class="">
    <a href="{{ $isNested ? 'javascript:void(0);' : $href }}" @class(["waves-effect", 'has-arrow'=>
        $isNested])
        style="color: #ccc;">
        {{-- ICON --}}
        <i @class([$icon]) style="color: #ccc;"></i>

        {{-- BADGE --}}
        @isset($badge)
        <span class="badge rounded-pill bg-danger float-end">{{ $badge }}</span>
        @endisset

        {{-- FEATURE --}}
        @isset($feat)
        <span class="badge rounded-pill bg-warning float-end">New</span>
        @endisset

        {{-- LABEL --}}
        <span>{{ $slot }}</span>
    </a>

    {{-- SUB-MENU --}}
    @isset($isNested)
    <ul class="sub-menu" aria-expanded="false">
        {{ $isNested }}
    </ul>
    @endisset
</li>