@extends('layouts.auth')

@section('title', 'Log in')

@section('content')
<div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div class="sm:mx-auto sm:w-full sm:max-w-sm">
    <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
      alt="">
    <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight tw-text">Sign in to your
      account</h2>
  </div>

  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form class="space-y-6" action="#" method="POST">
      <div>
        <label for="email" class="tw-label">Username</label>
        <div class="mt-2">
          <input type="email" name="email" id="email" autocomplete="email" required class="tw-input" placeholder="Email or phone number">
        </div>
      </div>

      <div>
        <div class="flex items-center justify-between">
          <label for="password" class="tw-label">Password</label>
          <div class="text-sm">
            <a href="#" class="tw-link">Forgot password?</a>
          </div>
        </div>
        <div class="mt-2">
          <input type="password" name="password" id="password" autocomplete="current-password" required
            class="tw-input" value="password">
        </div>
      </div>

      <div>
        <button type="submit" class="tw-button">Sign
          in</button>
      </div>
    </form>

    <p class="mt-10 text-center text-sm/6 tw-subtext">
      Not a member?
      <a href="#" class="tw-link">Start a 14 day free trial</a>
    </p>
  </div>
</div>
@endsection