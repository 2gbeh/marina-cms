<div class="modal fade" id="depositDialog" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
  role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Deposit</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
        </button>
      </div>
      <div class="modal-body text-center">
        <img class="" src="{{ Vite::images('btc.png') }}" alt="" width="100" />
        <div class="mt-4">
          <h3>1A1zP1eP5QGefi2DMPTfTL5SLmv7Divf</h3>
          <strong>BTC Wallet Address</strong>
        </div>
        <div class="mt-3">
          <input class="form-control" type="file" name="receipt" id="receipt" />
          <div class="mt-1">
            <small class="text-muted">Complete deposit by uploading payment receipt or valid proof of payment
              above.</small>
          </div>
        </div>
      </div>
      <div class="d-flex align-items-center justify-content-between py-3 px-3">
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
        <button type="button" class="btn btn-primary">Finish
          <i class="uil-save"></i>
        </button>
      </div>
    </div>
  </div>
</div>