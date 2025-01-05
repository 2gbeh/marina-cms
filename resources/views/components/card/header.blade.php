{{-- NOTE: class-based component --}}

@isset ($options)
<div class="float-end">
    <div class="dropdown">
        @if ($label)
        <a class="dropdown-toggle text-reset" href="#" id="dropdownMenuButton5" data-bs-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">
            <span class="fw-semibold">{{ $label }}</span> <span class="text-muted">{{ $selected }}<i
                    class="mdi mdi-chevron-down ms-1"></i></span>
        </a>
        @else
        <a class="dropdown-toggle" href="#" id="dropdownMenuButton4" data-bs-toggle="dropdown" aria-haspopup="true"
            aria-expanded="false">
            <span class="text-muted">{{ $selected }}<i class="mdi mdi-chevron-down ms-1"></i></span>
        </a>
        @endif
        <div class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton4">
            @foreach ($options as $option)
            <a class="dropdown-item" href="#">{{$option}}</a>
            @endforeach
        </div>
    </div>
</div>
@endisset

<h4 class="card-title mb-4">{{ $slot }}</h4>