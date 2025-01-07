@extends('layouts.dashboard-layout')

@section('title', 'Dashboard')

@php
function x(string $fileName):string{
return "pages.dashboard.partials.{$fileName}";
}
@endphp

@section('content')

<div class="container-fluid">
  {{-- HEADING --}}
  @includeIf('shared.title-bar', ['title' => 'Dashboard'])
  <div class="row">
    {{-- CARDS --}}
    @includeIf(x('kpi-cards'))
  </div>
  <div class="row">
    <div class="col-xl-8">
      {{-- TABLE --}}
      @includeIf(x('latest-transactions'))
    </div>
    <div class="col-xl-4">
      {{-- TIMELINE --}}
      @includeIf(x('activity-logs'))
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