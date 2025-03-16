<?php

namespace App\Helpers;

// @inject('partials', 'App\Helpers\BladePartialsHelper')
// $partials->set('admin/dashboard');
// $partials->get(kpi-cards');

class BladePartialsHelper
{
  private string $basePath;

  // admin/dashboard = admin.dashboard
  function set(string $basePath): void
  {
    $this->basePath = str_replace('/', '.', $basePath);
  }

  // pages.admin.dashboard.partials.kpi-cards
  function get(string $fileName): string
  {
    return "pages.{$this->basePath}.partials.{$fileName}";
  }
}
