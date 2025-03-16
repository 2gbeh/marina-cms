<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Helpers\PrototypeHelper as P;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/ping', fn () => P::auth());
