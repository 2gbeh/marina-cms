<div class="modal fade" id="withdrawDialog" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
  role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Withdraw</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
        </button>
      </div>
      <div class="modal-body text-center">
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
      </div>
      <div class="d-flex align-items-center justify-content-between py-3 px-3">
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
        <button type="button" class="btn btn-success">Continue
          <i class="uil-arrow-right"></i>
        </button>
      </div>
    </div>
  </div>
</div>