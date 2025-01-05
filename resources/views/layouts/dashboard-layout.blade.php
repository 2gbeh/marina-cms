@extends('layouts.root-layout')

@section('body')

<!-- <body data-layout="horizontal" data-topbar="colored"> -->

<body class="">
    <div id="layout-wrapper">
        {{-- HEADER--}}
        @includeIf('shared.header')
        {{-- SIDEBAR --}}
        @includeIf('shared.sidebar')
        <div class="main-content">
            <div class="page-content">
                @yield('content')
            </div>
        </div>
        {{-- FOOTER --}}
        @includeIf('shared.footer')
    </div>

    @includeIf('shared.aside')

    @vite([
    // jQuery
    'resources/assets/libs/jquery/jquery.min.js',
    'resources/assets/libs/jquery.counterup/jquery.counterup.min.js',
    // Bootstrap
    'resources/assets/libs/bootstrap/js/bootstrap.bundle.min.js',
    // Page js
    'resources/assets/libs/metismenu/metisMenu.min.js',
    'resources/assets/libs/simplebar/simplebar.min.js',
    'resources/assets/libs/node-waves/waves.min.js',
    'resources/assets/libs/waypoints/lib/jquery.waypoints.min.js',
    ])

    {{-- Child scripts --}}
    @stack('inline-scripts')

    {{-- App js --}}
    @vite('resources/assets/js/app.js')
</body>
@endsection