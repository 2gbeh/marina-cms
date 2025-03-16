<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\View\View;

class AdminDashboardController extends Controller
{
  public function __invoke(): View
  {
    return $this->adminView('dashboard.index');
  }
}
