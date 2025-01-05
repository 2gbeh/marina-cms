@extends('layouts.dashboard-layout')

@section('title', 'Dashboard')

@section('content')

<div id="layout-wrapper">
 {{-- <img src="{{ Vite::images('icon.png') }}" alt="" /> --}}
 @includeIf('shared.header')
 @includeIf('shared.sidebar')
 <div class="main-content">

  <div class="page-content">
   <div class="container-fluid">
    @includeIf('shared.title-bar', ['title' => 'Dashboard'])
    <div class="row">
     <x-kpi-card icon="total-revenue-chart" value="34,152" value-prefix="₦ " label="Total Revenue" rate-value="2.65"
      rate-label="since last week" />
     <x-kpi-card icon="orders-chart" value="5,643" label="Orders" rate-value="0.82" rate-label="since last week" low />
     <x-kpi-card icon="customers-chart" value="45,254" label="Customers" rate-value="6.24" rate-label="since last week"
      low />
     <x-kpi-card icon="growth-chart" value="12.58" value-prefix="+" value-suffix="%" label="Growth" rate-value="10.51"
      rate-label="since last week" />
    </div>
    <div class="row">
     <div class="col-xl-8">
      <x-card>
       <x-card.header label="Sort By:" :options="['Weekly','Monthly','Yearly']" selected="Yearly">
        Sales Analysis</x-card.header>
       @includeIf('pages.dashboard.partials.sales-analysis-chart')
      </x-card>
     </div> <!-- end col-->

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
    </div> <!-- end row-->

    <div class="row">
     <div class="col-xl-4">

      <x-card>
       <x-card.header :options="['All Members','Locations','Revenue','Join Date']">
        Top Users</x-card.header>
       @includeIf('pages.dashboard.partials.top-users')
      </x-card>
     </div><!-- end col -->

     <div class="col-xl-4">
      <x-card>
       <x-card.header :options="['Recent','By Users']">
        Activity Logs</x-card.header>
       @includeIf('pages.dashboard.partials.activity-logs')
      </x-card>
     </div>

     <div class="col-xl-4">
      <x-card>
       <x-card.header class="mb-0" :options="['Yearly','Monthly','Weekly']" selected="Monthly">
        Social Media KPIs</x-card.header>
       @includeIf('pages.dashboard.partials.social-media-kpis')
      </x-card>
     </div>
    </div>
    <!-- end row -->

    <div class="row">
     <div class="col-lg-12">
      <x-card>
       <x-card.header>Latest Transaction</x-card.header>
       <div class="table-responsive">
        @includeIf('pages.dashboard.partials.latest-transactions-table')
       </div>
      </x-card>
     </div>
    </div>
    <!-- end row -->
   </div> <!-- container-fluid -->
  </div>
  <!-- End Page-content -->
  @includeIf('shared.footer')
 </div>
</div>

@includeIf('shared.aside')

@endsection

@push('inline-scripts')
@vite([
'resources/assets/libs/apexcharts/apexcharts.min.js',
'resources/assets/js/pages/dashboard.init.js',
])
@endpush