<x-modal id="depositDialogBTC" title="Deposit BTC" sticky>
  <x-slot:body>
    <img class="" src="{{ Vite::images('qrcode-btc.jpeg') }}" alt="" width="320" />
    <div class="mt-3">
      <input class="form-control" type="file" name="receipt" id="receipt" />
      <div class="mt-1">
        <small class="text-muted">Complete deposit by uploading payment receipt or valid proof of payment
          above.</small>
      </div>
    </div>
    </x-slot>
    <x-modal.footer flex>
      <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
      <button type="button" class="btn btn-success">Send
        <i class="uil-save"></i>
      </button>
    </x-modal.footer>
</x-modal>