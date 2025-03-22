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
    <a href="{{ route('deposit') }}" class="btn btn-primary waves-effect waves-light">
      <i class="uil-money-withdraw me-1"></i>
      Deposit
    </a>
    <button type="button" class="btn btn-success waves-effect waves-light" data-bs-toggle="modal"
      data-bs-target="#withdrawDialog">
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

{{-- MODALS --}}
@includeIf($partials->get('withdraw-dialog'))
@endsection

@push('scripts')
@vite([
'resources/assets/libs/jquery.counterup/jquery.counterup.min.js',
])
@endpush