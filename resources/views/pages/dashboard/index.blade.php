@extends('layouts.dashboard-layout')

@section('title', 'Dashboard')

@section('content')

<div class="container-fluid">
  {{-- TITLE BAR --}}
  @includeIf('shared.title-bar', ['title' => 'Dashboard'])
  {{-- KPI CARDS --}}
  @includeIf('pages.dashboard.partials.kpi-cards')
  <div class="row">
    {{-- SALES ANALYSIS CHART --}}
    @includeIf('pages.dashboard.partials.sales-analysis-chart')
    {{-- TOP PRODUCTS --}}
    @includeIf('pages.dashboard.partials.top-products')
  </div>
  <div class="row">
    {{-- TOP USERS --}}
    @includeIf('pages.dashboard.partials.top-users')
    {{-- ACTIVITY LOGS --}}
    @includeIf('pages.dashboard.partials.activity-logs')
    {{-- SOCIAL MEDIA KPIS --}}
    @includeIf('pages.dashboard.partials.social-media-kpis')
  </div>
  {{--LATEST TRANSACTIONS --}}
  @includeIf('pages.dashboard.partials.latest-transactions')
</div>

@endsection

@push('inline-scripts')
@vite([
'resources/assets/libs/apexcharts/apexcharts.min.js',
'resources/assets/js/pages/dashboard.init.js',
])
@endpush