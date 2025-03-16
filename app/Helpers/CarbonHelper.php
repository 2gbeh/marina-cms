<?php

namespace App\Helpers;

use Illuminate\Support\Carbon;

// @use('App\Helpers\CarbonHelper', 'CarbonHelper')
// {{ CarbonHelper::methodName() }}

class CarbonHelper
{
  // Sun, Mar 16, 2025 01:00 AM
  static function verbose(string|null $datetime = null)
  {
    $carbon =  $datetime ? Carbon::parse($datetime) : Carbon::now();
    return $carbon->toDayDateTimeString();
  }
  // Mar 16, 2025 
  static function date(string|null $datetime = null)
  {
    $carbon =  $datetime ? Carbon::parse($datetime) : Carbon::now();
    return  $carbon->toFormattedDateString();
  }
  // Sun, Mar 16, 2025
  static function dateLong(string|null $datetime = null)
  {
    $carbon =  $datetime ? Carbon::parse($datetime) : Carbon::now();
    return  $carbon->toFormattedDayDateString();
  }
  // Mar 16
  static function dateShort(string|null $datetime = null)
  {
    $carbon = $datetime ? Carbon::parse($datetime) : Carbon::now();
    return $carbon->format('M j');
  }
  // 10:00 AM
  static function time(string|null $datetime = null)
  {
    $carbon = $datetime ? Carbon::parse($datetime) : Carbon::now();
    return $carbon->format('h:i A');
  }
  // 1742155215882051
  static function uuid(string|null $datetime = null)
  {
    $carbon = $datetime ? Carbon::parse($datetime) : Carbon::now();
    return $carbon->format('Uu');
  }
}
