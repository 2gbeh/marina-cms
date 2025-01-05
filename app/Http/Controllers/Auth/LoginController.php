<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\View\View;
use App\Helpers\PrototypeHelper as Ph;

class LoginController extends Controller
{
    /**
     * Display the login view.
     */
    public function create(): View
    {
        $formData = new \stdClass();
        $formData->email = '';
        $formData->password = '';

        if (Ph::auth()->formData) {
            $formData->email = 'dehphantom@yahoo.com';
            $formData->password = 'password';
        }

        return $this->authView('login', ['formData' => $formData]);
    }

    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request): RedirectResponse
    {
        $request->authenticate();

        $request->session()->regenerate();

        return redirect()->intended(route('dashboard', absolute: false));
    }
}
