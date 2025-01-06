<!DOCTYPE html>
<html class="dark" lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="description" content="Multi-Tenant Enterprise Application Software" />
    <meta name="owner" content="HWP Labs" />
    <meta name="author" content="Emmanuel Tugbeh" />
    <title>@yield('title') - {!! __('app.stylized') !!}</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

    @vite([
    // Bootstrap Css
    'resources/assets/css/bootstrap.min.css',
    // Icons Css
    'resources/assets/css/icons.min.css',
    // App Css
    'resources/assets/css/app.min.css',
    ])

    {{-- Child styles --}}
    @stack('styles')
    {{-- Child scripts --}}
    @stack('scripts')

    <!-- Compiled assets -->
    @vite(['resources/js/app.js'])
</head>

@yield('body')

</html>