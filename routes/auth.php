<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Auth\ForgotPasswordController;
use App\Http\Controllers\Auth\VerifyEmailController;
use App\Http\Controllers\Auth\ResetPasswordController;
use App\Http\Controllers\Auth\ConfirmPasswordController;
use App\Http\Controllers\Auth\UpdatePasswordController;
use App\Http\Controllers\Auth\LogoutController;
use Illuminate\Support\Facades\Route;

Route::middleware('guest')->group(function () {
    Route::name('login')->controller(LoginController::class)->group(function () {
        Route::get('/', 'create');
        Route::post('/', 'store')->name('.store');
    });

    Route::name('register')->controller(RegisterController::class)->group(function () {
        Route::get('/register', 'create');
        Route::post('/register', 'store')->name('.store');
    });

    Route::name('forgot-password')->controller(ForgotPasswordController::class)->group(function () {
        Route::get('/forgot-password', 'create');
        Route::post('/forgot-password', 'store')->name('.store');
    });

    Route::name('reset-password')->controller(ResetPasswordController::class)->group(function () {
        Route::get('/reset-password/{token}', 'create');
        Route::post('/reset-password', 'store')->name('.store');
    });
});

Route::middleware('auth')->group(function () {
    Route::name('verify-email')->controller(VerifyEmailController::class)->group(function () {
        Route::get('/verify-email', 'create');
        Route::middleware('throttle:6,1')->group(function () {
            Route::get('/verify-email/{id}/{hash}', 'verify')->middleware('signed')->name('.verify');
            Route::post('/verify-email', 'store')->name('.store');
        });
    });

    Route::name('confirm-password')->controller(ConfirmPasswordController::class)->group(function () {
        Route::get('/confirm-password', 'create');
        Route::post('/confirm-password', 'store')->name('.store');
    });
    
    Route::patch('/update-password', UpdatePasswordController::class)->name('update-password');

    Route::post('/logout', LogoutController::class)->name('logout');
});
