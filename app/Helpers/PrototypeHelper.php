<?php

namespace App\Helpers;

// use App\Helpers\PrototypeHelper as Ph;
// Ph::auth()->formData;

class PrototypeHelper
{
  static function auth(): object
  {
    return  (object) ['loader' => 0, 'formData' => 1, 'action' => 0, 'router' => 0];
  }
}

