@extends('layouts.root-layout')

@section('body')

<body class="authentication-bg">
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
                    <div class="card">
                        @yield('content')
                    </div>

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
    // jQuery
    'resources/assets/libs/jquery/jquery.min.js',
    // Bootstrap
    'resources/assets/libs/bootstrap/js/bootstrap.bundle.min.js',
    ])

    {{-- Child scripts --}}
    @stack('inline-scripts')

    {{-- App js --}}
    @vite('resources/assets/js/app.js')
</body>
@endsection