<div class="col-xl-8">
  <x-card>
    <x-card.header label="Sort By:" :options="['Weekly','Monthly','Yearly']" selected="Yearly">
      Sales Analysis</x-card.header>
    <div class="mt-1">
      <ul class="list-inline main-chart mb-0">
        <li class="list-inline-item chart-border-left me-0 border-0">
          <h3 class="text-primary">$<span data-plugin="counterup">2,371</span><span
              class="text-muted d-inline-block font-size-15 ms-3">Income</span>
          </h3>
        </li>
        <li class="list-inline-item chart-border-left me-0">
          <h3><span data-plugin="counterup">258</span><span
              class="text-muted d-inline-block font-size-15 ms-3">Sales</span>
          </h3>
        </li>
        <li class="list-inline-item chart-border-left me-0">
          <h3><span data-plugin="counterup">3.6</span>%<span
              class="text-muted d-inline-block font-size-15 ms-3">Conversation
              Ratio</span></h3>
        </li>
      </ul>
    </div>

    <div class="mt-3">
      <div id="sales-analytics-chart" class="apex-charts" dir="ltr"></div>
    </div>
  </x-card>
</div>