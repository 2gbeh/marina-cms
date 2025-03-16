@extends('layouts.dashboard-layout')

@section('title', 'Dashboard')

@php
function partial(string $fileName):string{
return "pages.dashboard.partials.{$fileName}";
}
@endphp

@section('content')

<div class="container-fluid">
  {{-- HEADING --}}
  <x-title-bar title="Dashboard" />
  {{-- CARDS --}}
  <div class="row">
    @includeIf(partial('kpi-cards'))
  </div>
  <div class="row">
    <div class="col-xl-8">
      {{-- TABLE --}}
      @includeIf(partial('latest-transactions'))
    </div>
    <div class="col-xl-4">
      {{-- TIMELINE --}}
      @includeIf(partial('activity-logs'))
    </div>
  </div>
</div>

@endsection

@push('scripts')
@vite([
'resources/assets/libs/jquery.counterup/jquery.counterup.min.js',
'resources/assets/libs/apexcharts/apexcharts.min.js',
'resources/assets/js/pages/dashboard.init.js',
])
@endpush