<x-sidebar.section>
  Super Admin
</x-sidebar.section>
{{-- --}}
<x-sidebar.menu icon="uil-home-alt">
  Dashboard
</x-sidebar.menu>
<x-sidebar.menu icon="uil-bill">
  Transactions
</x-sidebar.menu>
<x-sidebar.menu icon="uil-tag-alt">
  Charges
  <x-slot:is-nested>
    <x-sidebar.sub-menu>
      Added Charges
    </x-sidebar.sub-menu>
    <x-sidebar.sub-menu>
      Charge Payments
    </x-sidebar.sub-menu>
    </x-slot>
</x-sidebar.menu>
<x-sidebar.menu icon="uil-user">
  Users
  <x-slot:is-nested>
    <x-sidebar.sub-menu>
      Add User
    </x-sidebar.sub-menu>
    <x-sidebar.sub-menu>
      View Users
    </x-sidebar.sub-menu>
    </x-slot>
</x-sidebar.menu>
<x-sidebar.menu icon="uil-user-md">
  Administrators
  <x-slot:is-nested>
    <x-sidebar.sub-menu>
      Add Admin
    </x-sidebar.sub-menu>
    <x-sidebar.sub-menu>
      View Admins
    </x-sidebar.sub-menu>
    </x-slot>
</x-sidebar.menu>