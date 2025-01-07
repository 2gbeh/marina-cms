<?php

namespace App\View\Components\Card;

use Illuminate\Contracts\View\View;
use Illuminate\View\Component;

class Header extends Component
{
    public function __construct(
        public ?string $label,
        public ?array $options,
        public ?string $selected,
    ) {
        $this->selected = $selected ?? $options[0] ?? '';
    }

    public function render(): View
    {
        return view('components.card.header');
    }
}
