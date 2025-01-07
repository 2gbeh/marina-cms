<?php

namespace App\Helpers;

// @use('App\Helpers\PartialsHelper', 'partialsHelper')
// $partialsHelper->set('pages.posts.partials');
// $partialsHelper->get('create-post-form');

class PartialsHelper
{
  function __construct(public string $basePath = 'shared')
  {
  }

  function set(string $basePath): void
  {
    $this->basePath = $basePath;
  }

  function get(string $fileName): string
  {
    return "{$this->basePath}.{$fileName}";
  }
}