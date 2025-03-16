<?php

namespace App\Helpers;

// @use('App\Helpers\StringHelper', 'StringHelper')
// {{ StringHelper::methodName() }}

class StringHelper
{
  // 1,970
  static function asMoney(int|string $value)
  {
    return number_format(str_replace(',', '', $value));
  }
  // 15,000 to 800,000
  static function randomAmount(bool $asMoney = false)
  {
    $amount = mt_rand(15000, 800000);
    return $asMoney ? number_format($amount) : $amount;
  }
}
