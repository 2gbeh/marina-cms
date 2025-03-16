@extends('layouts.app-layout')

@section('body')

<body class="authentication-bg">
    {{-- TOAST --}}
    {{-- <x-live-toast :error-bag="$errors->get('email')" /> --}}
    {{-- CONTAINER --}}
    <div class="account-pages my-5 pt-sm-5">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="text-center">
                        <a href="index.html" class="mb-5 d-block auth-logo">
                            <img src="{{ Vite::images('logo.png') }}" alt="" height="22" class="logo logo-dark">
                        </a>
                    </div>
                </div>
            </div>
            <div class="row align-items-center justify-content-center">
                <div class="col-md-8 col-lg-6 col-xl-5">
                    <main class="card">
                        @yield('content')
                    </main>

                    <div class="mt-5 text-center">
                        {!! __('app.copyright') !!}
                    </div>

                </div>
            </div>
            <!-- end row -->
        </div>
        <!-- end container -->
    </div>

    @vite([
    // Bootstrap
    'resources/assets/libs/bootstrap/js/bootstrap.bundle.min.js',
    // Others
    'resources/assets/js/pages/bootstrap-toasts.init.js',
    ])

    {{-- Child scripts --}}
    @stack('scripts')

    {{-- App js --}}
    @vite('resources/assets/js/app.js')
</body>
@endsection