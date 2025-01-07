<?php

namespace App\Helpers;

// @use('App\Helpers\SidebarHelper', 'SidebarHelper')
// SidebarHelper::menu()

class SidebarHelper
{
  static function menu(): array
  {
    return  [
      'Dashboard' => (object) ['href' => route('dashboard'), 'icon' => 'uil-home-alt'],
    ];
  }
}
