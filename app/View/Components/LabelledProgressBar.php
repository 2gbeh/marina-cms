<?php

namespace App\View\Components;

use Illuminate\View\Component;
use Illuminate\View\View;

class LabelledProgressBar extends Component
{
  public object $color;
  /**
   * Create the component instance.
   */
  public function __construct(
    public string $label,
    public ?int $value,
  ) {
    $color = new \stdClass();
    if ($this->value >= 66) {
      $color->text = 'text-success';
      $color->bg = 'bg-success';
    } else if ($this->value >= 33 && $this->value < 66) {
      $color->text = 'text-warning';
      $color->bg = 'bg-warning';
    } else {
      $color->text = 'text-danger';
      $color->bg = 'bg-danger';
    }
    $this->color = $color;
  }

  /**
   * Get the view / contents that represents the component.
   */
  public function render(): View
  {
    return view('components.labelled-progress-bar');
  }
}
