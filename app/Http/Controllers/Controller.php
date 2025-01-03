<?php

namespace App\Http\Controllers;

use Illuminate\View\View;

abstract class Controller
{
    protected function rootView(string $view, array $data = []): View
    {
        return view('pages.' . $view, $data);
    }

    protected function authView(string $view, array $data = []): View
    {
        return view('pages.auth.' . $view, $data);
    }
}
