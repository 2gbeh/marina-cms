@extends('layouts.app-layout')

@section('body')

<body class="">
    {{-- TOAST --}}
    {{-- <x-live-toast :error-bag="$errors->get('email')" /> --}}
    {{-- CONTAINER --}}
    <div id="layout-wrapper">
        {{-- HEADER--}}
        @includeIf('shared.header')
        {{-- SIDEBAR --}}
        @includeIf('shared.sidebar')
        <main class="main-content">
            <div class="page-content">
                @yield('content')
            </div>
        </main>
        {{-- FOOTER --}}
        @includeIf('shared.footer')
    </div>

    @includeIf('shared.aside')

    @vite([
    // Bootstrap
    'resources/assets/libs/bootstrap/js/bootstrap.bundle.min.js',
    // Others
    'resources/assets/js/pages/bootstrap-toasts.init.js',
    'resources/assets/libs/node-waves/waves.min.js',
    'resources/assets/libs/metismenu/metisMenu.min.js',
    'resources/assets/libs/simplebar/simplebar.min.js',
    'resources/assets/libs/waypoints/lib/jquery.waypoints.min.js',
    ])

    {{-- Child scripts --}}
    @stack('scripts')

    {{-- App js --}}
    @vite('resources/assets/js/app.js')
</body>
@endsection