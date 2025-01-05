<div class="col-xl-4">
  <x-cta-card />
  <x-card>
    <x-card.header label="Sort By:" :options="['Weekly','Monthly','Yearly']" selected="Monthly">
      Top Selling Products</x-card.header>
    <x-labelled-progress-bar label="Web" value="80" />
    <x-labelled-progress-bar label="Desktop" value="60" />
    <x-labelled-progress-bar label="Tablet" value="40" />
    <x-labelled-progress-bar label="Mobile" value="20" />
    <x-labelled-progress-bar label="Others" />
  </x-card>
</div> <!-- end Col -->