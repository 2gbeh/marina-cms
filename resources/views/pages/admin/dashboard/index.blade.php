@inject('partials', 'App\Helpers\BladePartialsHelper')

@extends('layouts.dashboard-layout')

@section('title', 'Dashboard')

@php
$partials->set("admin/dashboard")
@endphp

@section('content')

<div class="container-fluid">
  {{-- HEADING --}}
  <x-title-bar title="Dashboard" />
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
])
@endpush