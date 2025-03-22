@inject('partials', 'App\Helpers\BladePartialsHelper')
@extends('layouts.dashboard-layout')
@section('title', 'Deposit')

@php
$partials->set("deposit")
@endphp


@section('content')
<div class="container-fluid">
  <div class="row justify-content-center">
    <div class="col-lg-5">
      <div class="text-center mt-3 mb-5">
        <h4>Deposit</h4>
        <p class="text-muted mb-4">Deposit from exchange by direct transfer from your account</p>
      </div>
    </div>
  </div>
  <!-- end row -->

  <div class="row justify-content-center">
    <div class="col-lg-9">
      <div class="row">
        <div class="col-xl-4">
          <x-cards.crypto-wallet title="BTC" subtitle="Bitcoin" address="bc1qsdgcwwnzn4psrf60fvcwnf6dqkpedu49ldw4tx">
            <img class="" src="{{ Vite::images('coin-btc.png') }}" alt="" width="100" />
          </x-cards.crypto-wallet>
        </div>
        <div class="col-xl-4">
          <x-cards.crypto-wallet title="ETH" subtitle="Ethereum" address="0xD140662736144Fe19031496216DceB6E0E276147">
            <img class="" src="{{ Vite::images('coin-eth.png') }}" alt="" width="100" />
          </x-cards.crypto-wallet>
        </div>
        <div class="col-xl-4">
          <x-cards.crypto-wallet title="USDT" subtitle="BNB Smart Chain"
            address="0xD140662736144Fe19031496216DceB6E0E276147">
            <img class="" src="{{ Vite::images('coin-usdt.png') }}" alt="" width="100" />
          </x-cards.crypto-wallet>
        </div>
      </div>
      <!-- end row -->
    </div>
  </div>
</div>

{{-- MODALS --}}
@includeIf($partials->get('deposit-dialog-btc'))
@includeIf($partials->get('deposit-dialog-eth'))
@includeIf($partials->get('deposit-dialog-usdt'))
@endsection