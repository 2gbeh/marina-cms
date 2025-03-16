<?php

namespace App\Helpers;

// use App\Helpers\PrototypeHelper as Prototype;
// Prototype::auth()->formData;

class PrototypeHelper
{
  static function auth(): object
  {
    return  (object) ['router' => 0, 'loader' => 0, 'portal' => 0, 'formData' => 1, 'action' => 0];
  }
}
