@props(['errors'])

@if ($errors)
    <ul {{ $attributes->merge(['class' => 'text-danger list-unstyled']) }}>
        @foreach ((array) $errors as $error)
            <li class="">{{ $error }}</li>
        @endforeach
    </ul>
@endif
