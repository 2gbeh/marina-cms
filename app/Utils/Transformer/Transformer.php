<?php

namespace App\Utils\Transformer;

// $input = Transformer::MOCK_INPUT;
// $output = Transformer::transform($input);

class Transformer
{
  const MOCK_INPUT = '[
        {
            "bestprice": "400.00",
            "close": 0,
            "ciok": 1,
            "cook": 1,
            "inv": 4,
            "start": "2025-06-14",
            "end": "2025-06-14"
        },
        {
            "bestprice": "300.00",
            "close": 0,
            "ciok": 0,
            "cook": 0,
            "inv": 4,
            "start": "2025-06-15",
            "end": "2026-05-03"
        },
        {
            "bestprice": "-1.00",
            "close": 1,
            "ciok": null,
            "cook": null,
            "inv": 0,
            "start": "2026-05-04",
            "end": "2026-06-07"
        }
    ]';

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
