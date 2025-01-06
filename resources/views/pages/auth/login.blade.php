@extends('layouts.auth-layout')

@section('title', 'Log in')

@section('content')
<div class="card-body p-4">
  <div class="text-center mt-2">
    <h5 class="text-primary">Welcome Back !</h5>
    <p class="text-muted">Sign in to continue to Minible.</p>
  </div>
  <div class="p-2 mt-4">
    <form method="POST" action="{{ route('login') }}">
      @csrf

      <div class="mb-3">
        <label class="form-label" for="email">Email</label>
        <input type="email" class="form-control" id="email" name="email" placeholder="Enter email"
          value="{{ old('email', $formData->email) }}" required />
      </div>

      <div class="mb-3">
        <div class="float-end">
          <a href="{{ route('forgot-password') }}" class="text-muted">Forgot password?</a>
        </div>
        <label class="form-label" for="password">Password</label>
        <input type="password" class="form-control" id="password" name="password" placeholder="Enter password"
          value="{{ old('password', $formData->password) }}" required />
      </div>

      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="auth-remember-check">
        <label class="form-check-label" for="auth-remember-check">Remember me</label>
      </div>

      <div class="mt-3 text-end">
        <button class="btn btn-primary w-sm waves-effect waves-light" type="submit">Log In</button>
      </div>

      <div class="mt-4 text-center">
        <p class="mb-0">Don't have an account ?
          <a href="{{ route('register') }}" class="fw-medium text-primary">
            Register
          </a>
        </p>
      </div>
    </form>
  </div>

</div>
@endsection