<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Auth\ForgotPasswordController;
use App\Http\Controllers\Auth\ResetPasswordController;
use App\Http\Controllers\Auth\LogoutController;
use Illuminate\Support\Facades\Route;
// 
use App\Http\Controllers\Auth\ConfirmablePasswordController;
use App\Http\Controllers\Auth\EmailVerificationNotificationController;
use App\Http\Controllers\Auth\EmailVerificationPromptController;
use App\Http\Controllers\Auth\VerifyEmailController;

Route::middleware('guest')->group(function () {
    Route::name('login')->controller(LoginController::class)->group(function () {
        Route::get('/', 'create')->name('.create');
        Route::post('/', 'store')->name('.store');
    });

    Route::name('register')->controller(RegisterController::class)->group(function () {
        Route::get('/register', 'create')->name('.create');
        Route::post('/register', 'store')->name('.store');
    });

    Route::name('forgot-password')->controller(ForgotPasswordController::class)->group(function () {
        Route::get('/forgot-password', 'create')->name('.create');
        Route::post('/forgot-password', 'store')->name('.store');
    });

    Route::name('reset-password')->controller(ResetPasswordController::class)->group(function () {
        Route::get('/reset-password/{token}', 'create')->name('.create');
        Route::post('/reset-password', 'store')->name('.store');
    });
});

Route::middleware('auth')->group(function () {
    // Route::get('verify-email', EmailVerificationPromptController::class)
    //     ->name('verification.notice');

    // Route::get('verify-email/{id}/{hash}', VerifyEmailController::class)
    //     ->middleware(['signed', 'throttle:6,1'])
    //     ->name('verification.verify');

    // Route::post('email/verification-notification', [EmailVerificationNotificationController::class, 'store'])
    //     ->middleware('throttle:6,1')
    //     ->name('verification.send');

    // Route::get('confirm-password', [ConfirmablePasswordController::class, 'show'])
    //     ->name('password.confirm');

    // Route::post('confirm-password', [ConfirmablePasswordController::class, 'store']);

    // Route::put('password', [PasswordController::class, 'update'])->name('password.update');

    Route::post('logout', LogoutController::class)->name('logout');
});
