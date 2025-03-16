<?php

use App\Http\Controllers\Admin\AdminDashboardController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'verified'])->prefix('admin')->name('admin.')->group(function () {
  Route::get('/dashboard', AdminDashboardController::class)->name('dashboard');
});

