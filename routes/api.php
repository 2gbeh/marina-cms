<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Utils\Transformer;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get(
    '/',
    function () {
        $input = '[
            {
                "bestprice": "400.00",
                "close": 0,
                "ciok": 1,
                "cook": 1,
                "inv": 4,
                "start": "2025-06-14",
                "end": "2025-06-14"
            },
            {
                "bestprice": "300.00",
                "close": 0,
                "ciok": 0,
                "cook": 0,
                "inv": 4,
                "start": "2025-06-15",
                "end": "2026-05-03"
            },
            {
                "bestprice": "-1.00",
                "close": 1,
                "ciok": null,
                "cook": null,
                "inv": 0,
                "start": "2026-05-04",
                "end": "2026-06-07"
            }
        ]';
        // 
        $output = Transformer::transform($input);
        return $output;
    }
);
