@inject('partials', 'App\Helpers\BladePartialsHelper')

@extends('layouts.dashboard-layout')

@section('title', 'Dashboard')

@php
$partials->set("dashboard")
@endphp

@section('content')

<div class="container-fluid">
  {{-- HEADING --}}
  <x-title-bar title="Dashboard" />
  {{-- TOOLBAR --}}
  <div class="pb-3 d-flex justify-content-end gap-3">
    <button class="btn btn-primary">
      <i class="uil-money-withdraw me-1"></i>
      Deposit
    </button>
    <button class="btn btn-success">
      <i class="uil-money-insert me-1"></i>
      Withdraw
    </button>
  </div>
  {{-- CARDS --}}
  <div class="row">
    @includeIf($partials->get('kpi-cards'))
  </div>
  <div class="row">
    <div class="col-xl-12">
      {{-- TABLE --}}
      @includeIf($partials->get('recent-transactions'))
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