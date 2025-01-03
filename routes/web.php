<?php

use App\Http\Controllers\Main\DashboardController;
use App\Http\Controllers\Main\ProfileController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth')->group(function () {
    Route::middleware('verified')->group(function () {
        Route::get('/dashboard', DashboardController::class)->name('dashboard');
    });
    Route::name('profile')->controller(ProfileController::class)->group(function () {
        Route::get('/profile', 'edit')->name('.edit');
        Route::patch('/profile', 'update')->name('.update');
        Route::delete('/profile', 'destroy')->name('.destroy');
    });
});

require __DIR__ . '/auth.php';
