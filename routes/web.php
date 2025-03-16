<?php

use App\Http\Controllers\Admin\AdminDashboardController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;


Route::middleware('auth')->group(function () {
    Route::middleware('verified')->group(function () {
        Route::get('/dashboard', DashboardController::class)->name('dashboard');
        Route::get('/admin/dashboard', AdminDashboardController::class)->name('dashboard');
    });
    
    // Route::name('profile')->controller(ProfileController::class)->group(function () {
    //     Route::get('/profile', 'edit')->name('.edit');
    //     Route::patch('/profile', 'update')->name('.update');
    //     Route::delete('/profile', 'destroy')->name('.destroy');
    // });
    // GET profile (show), GET /profile/edit (edit), PATCH /profile (update)
    Route::singleton('profile', ProfileController::class);
});


require __DIR__ . '/auth.php';
require __DIR__ . '/web/admin.php';