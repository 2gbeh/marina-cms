<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\View\View;

class DepositController extends Controller
{
  public function __invoke(): View
  {
    return $this->rootView('deposit.index');
  }
}
