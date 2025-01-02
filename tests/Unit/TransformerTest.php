<?php

use App\Utils\Transformer;

beforeEach(function () {
  $input = '[
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
  // 
  $this->output = Transformer::transform($input);
});

it('should be same size with input array', function () {
  expect($this->output)->toHaveCount(3);
});

test('specified rules data types', function () {
  $obj = $this->output[0];
  expect($obj->dates)->toBeArray();
  expect($obj->availability)->toBeBool();
  expect($obj->availableCount)->toBeInt();
  expect($obj->price)->toBeInt();
  expect($obj->closedToArrival)->toBeBool();
  expect($obj->closedToDeparture)->toBeBool();
});

test('specified rules transformed format', function () {
  $obj1 = $this->output[0];
  expect($obj1)->toMatchObject([
    "dates" => [
      "2025-06-14:2025-06-14"
    ],
    "availability" => true,
    "availableCount" => 4,
    "price" => 400,
    "closedToArrival" => false,
    "closedToDeparture" => false
  ]);

  $obj2 = $this->output[1];
  expect($obj2)->toMatchObject([
    "dates" => [
      "2025-06-15:2026-05-03"
    ],
    "availability" => true,
    "availableCount" => 4,
    "price" => 300,
    "closedToArrival" => true,
    "closedToDeparture" => true
  ]);

  $obj3 = $this->output[2];
  expect($obj3)->toMatchObject([
    "dates" => [
      "2026-05-04:2026-06-07"
    ],
    "availability" => false
  ]);
});

test('specified rules if close equals 1', function () {
  $obj = $this->output[2];
  expect($obj->dates)->toBeArray();
  expect($obj->availability)->toBeFalse();
  expect($obj)->not->toHaveProperties([
    'availableCount',
    'price',
    'closedToArrival',
    'closedToDeparture'
  ]);
});
