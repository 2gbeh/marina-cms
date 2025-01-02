<?php

namespace App\Http\Controllers\Main;

use App\Http\Controllers\Controller;
use Illuminate\View\View;

class DashboardController extends Controller
{
  public function __invoke(): View
  {
    return $this->mainView('dashboard.index');
  }
}