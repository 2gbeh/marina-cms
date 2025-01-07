<x-sidebar.section>
  Super Admin
</x-sidebar.section>
{{-- --}}
<x-sidebar.menu icon="uil-building">
  Tenants
  <x-slot:is-nested>
    <x-sidebar.sub-menu>
      Add Tenant
    </x-sidebar.sub-menu>
    <x-sidebar.sub-menu>
      View Tenants
    </x-sidebar.sub-menu>
    </x-slot>
</x-sidebar.menu>
{{-- --}}
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
{{-- --}}
<x-sidebar.menu icon="uil-user-md">
  Administrators
  <x-slot:is-nested>
    <x-sidebar.sub-menu>
      Add Administrator
    </x-sidebar.sub-menu>
    <x-sidebar.sub-menu>
      View Administrators
    </x-sidebar.sub-menu>
    </x-slot>
</x-sidebar.menu>