<?php

namespace App\Utils;

class Transformer
{
  static function transform(string $input): array
  {
    $data = json_decode($input);
    $transformed = [];
    // 
    foreach ($data as $d) {
      $availability =  $d->close === 0;
      // 
      $obj = new \stdClass;
      $obj->dates = ["{$d->start}:{$d->end}"];
      $obj->availability = $availability;
      if ($availability) {
        $obj->availableCount = $d->inv;
        $obj->price = (int) $d->bestprice;
        $obj->closedToArrival = $d->ciok === 0;
        $obj->closedToDeparture = $d->cook === 0;
      }
      // 
      array_push($transformed, $obj);
    }
    // var_dump($input,  $transformed);
    return $transformed;
  }
}
