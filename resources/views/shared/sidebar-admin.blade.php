<x-sidebar.section>
  Organization
</x-sidebar.section>
{{-- --}}
<x-sidebar.menu icon="uil-chart-pie">
  Reports
</x-sidebar.menu>
{{-- --}}
<x-sidebar.menu icon="uil-lock-access">
  Policies
  <x-slot:is-nested>
    <x-sidebar.sub-menu>
      Manage Roles
    </x-sidebar.sub-menu>
    <x-sidebar.sub-menu>
      Manage Permissions
    </x-sidebar.sub-menu>
    </x-slot>
</x-sidebar.menu>
{{-- --}}
<x-sidebar.menu icon="uil-users-alt">
  Accounts
  <x-slot:is-nested>
    <x-sidebar.sub-menu>
      Add Account
    </x-sidebar.sub-menu>
    <x-sidebar.sub-menu>
      View Accounts
    </x-sidebar.sub-menu>
    </x-slot>
</x-sidebar.menu>