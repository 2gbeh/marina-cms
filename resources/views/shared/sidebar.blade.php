<div class="vertical-menu" style="background-color: #1c2742;">
    {{-- LOGO --}}
    <x-drawer-logo />
    {{-- HAMBURGER MENU --}}
    <button type="button" class="btn btn-sm px-3 font-size-16 header-item waves-effect vertical-menu-btn">
        <i class="mdi mdi-menu"></i>
    </button>
    <div data-simplebar class="sidebar-menu-scroll">
        <div id="sidebar-menu">
            {{-- SIDEBAR MENU --}}
            <ul class="metismenu list-unstyled" id="side-menu">
                <x-sidebar.menu :href="route('dashboard')" icon="uil-home-alt">
                    Dashboard
                </x-sidebar.menu>
                {{-- --}}
                <x-sidebar.menu icon="uil-invoice">
                    Transactions
                    <x-slot:is-nested>
                        <x-sidebar.sub-menu>
                            Add Transaction
                        </x-sidebar.sub-menu>
                        <x-sidebar.sub-menu badge="15">
                            View Transactions
                        </x-sidebar.sub-menu>
                        </x-slot>
                </x-sidebar.menu>
                {{-- --}}
                <x-sidebar.menu icon="uil-user-circle">
                    Customers
                    <x-slot:is-nested>
                        <x-sidebar.sub-menu>
                            Add Customer
                        </x-sidebar.sub-menu>
                        <x-sidebar.sub-menu badge="92">
                            View Customers
                        </x-sidebar.sub-menu>
                        </x-slot>
                </x-sidebar.menu>
                {{-- --}}
                <x-sidebar.menu icon="uil-user-nurse">
                    Collectors
                    <x-slot:is-nested>
                        <x-sidebar.sub-menu>
                            Add Collector
                        </x-sidebar.sub-menu>
                        <x-sidebar.sub-menu>
                            View Collectors
                        </x-sidebar.sub-menu>
                        </x-slot>
                </x-sidebar.menu>
                {{-- --}}
                <x-sidebar.menu icon="uil-server-connection" feat>
                    Activity Logs
                </x-sidebar.menu>
                {{-- --}}
                @includeIf('shared.sidebar-admin')
                {{-- --}}
                @includeIf('shared.sidebar-super-admin')
            </ul>
        </div>
    </div>
</div>