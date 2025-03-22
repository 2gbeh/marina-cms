<x-modal id="withdrawDialog" title="Withdraw">
  <x-slot:body>
    <img class="" src="{{ Vite::images('wallet.png') }}" alt="" width="100" />
    <div class="mt-4">
      <h3>₦ 834,150</h3>
      <strong>Available Balance</strong>
    </div>
    <div class="mt-3">
      <input class="form-control" type="number" placeholder="Enter amount" name="amount" id="amount" />
      {{-- <div class="mt-1">
        <small class="text-muted">Complete deposit by uploading payment receipt or valid proof of payment
          above.</small>
      </div> --}}
    </div>
    </x-slot>
    <x-modal.footer flex>
      <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
      <button type="button" class="btn btn-success">Continue
        <i class="uil-arrow-right"></i>
      </button>
    </x-modal.footer>
</x-modal>