<x-sidebar.section>
  Admin
</x-sidebar.section>
{{--  --}}
<x-sidebar.menu :href="route('admin.dashboard')" icon="uil-home-alt">
  Dashboard
</x-sidebar.menu>
<x-sidebar.menu icon="uil-money-withdraw">
  Deposits
</x-sidebar.menu>
<x-sidebar.menu icon="uil-money-insert">
  Withdrawals
</x-sidebar.menu>
<x-sidebar.menu icon="uil-tag-alt">
  Manage Charges
  <x-slot:is-nested>
    <x-sidebar.sub-menu>
      Edit Charges
    </x-sidebar.sub-menu>
    <x-sidebar.sub-menu>
      Charge Payments
    </x-sidebar.sub-menu>
    </x-slot>
</x-sidebar.menu>
<x-sidebar.menu icon="uil-users-alt">
  Accounts
</x-sidebar.menu>