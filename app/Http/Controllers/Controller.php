<?php

namespace App\Http\Controllers;

use Illuminate\View\View;

abstract class Controller
{
    //
    protected function pagesView(string $view, array $data = []): View
    {
        return view('pages.' . $view, $data);
    }

    protected function authView(string $view, array $data = []): View
    {
        return view('pages.auth.' . $view, $data);
    }

    protected function mainView(string $view, array $data = []): View
    {
        return view('pages.main.' . $view, $data);
    }
}
