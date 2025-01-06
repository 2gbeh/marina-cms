@extends('layouts.dashboard-layout')

@section('title', 'Dashboard')

@section('content')

<div class="container-fluid">
  {{-- HEADING --}}
  @includeIf('shared.title-bar', ['title' => 'Dashboard'])
  <div class="row">
    {{-- CARDS --}}
    @includeIf('pages.dashboard.partials.kpi-cards')
  </div>
  <div class="row">
    <div class="col-xl-8">
      {{-- TABLE --}}
      @includeIf('pages.dashboard.partials.latest-transactions')
    </div>
    <div class="col-xl-4">
      {{-- TIMELINE --}}
      @includeIf('pages.dashboard.partials.activity-logs')
    </div>
  </div>
</div>

@endsection

@push('inline-scripts')
@vite([
'resources/assets/libs/jquery.counterup/jquery.counterup.min.js',
'resources/assets/libs/apexcharts/apexcharts.min.js',
'resources/assets/js/pages/dashboard.init.js',
])
@endpush