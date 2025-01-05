<?php

namespace App\View\Components\Card;

use Illuminate\Contracts\View\View;
use Illuminate\View\Component;

class Header extends Component
{
    /**
     * Create a new component instance.
     */
    public function __construct(
        public ?string $label,
        public ?array $options,
        public ?string $selected,
    ) {
        $this->selected = $selected ?? $options[0] ?? '';
    }

    /**
     * Get the view / contents that represent the component.
     */
    public function render(): View
    {
        return view('components.card.header');
    }
}
