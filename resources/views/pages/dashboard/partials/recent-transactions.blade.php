@use('App\Helpers\StringHelper', 'StringHelper')
@use('App\Helpers\CarbonHelper', 'CarbonHelper')

<x-card>
  <x-card.header>
    <div class="d-flex align-items-center justify-content-between">
      Recent Transactions
      <button class="btn btn-info">View all
      <i class="uil-arrow-up-right"></i>
      </button>
    </div>
  </x-card.header>
  <div class="table-responsive">
    <table class="table table-centered table-nowrap mb-0">
      <x-table.thead :list="['Payment Reference','Transaction Amount','Transaction Type','Transaction Date','']"
        has-checkbox />
      <tbody>
        @for ($i = 0; $i < 10; $i++) <tr>
          <td>
            <x-table.checkbox />
          </td>
          <td>
            <span class="text-body fw-bold">
              #{{CarbonHelper::uuid()}}
            </span>
          </td>
          <td>
            N {{StringHelper::randomAmount(true)}}.00
          </td>
          <td>
            @if ($i % 4 === 0)
            <x-status-badge success>WITHDRAWAL</x-status-badge>
            @else
            <x-status-badge info>DEPOSIT</x-status-badge>
            @endif
          </td>
          <td>
            {{CarbonHelper::verbose()}}
          </td>
          <td>
            <button type="button" class="btn btn-primary btn-sm btn-rounded waves-effect waves-light">
              Receipt
            </button>
          </td>
          </tr>
          @endfor
      </tbody>
    </table>
  </div>
</x-card>