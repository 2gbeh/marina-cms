@use('App\Helpers\SidebarHelper', 'SidebarHelper')

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
                <x-sidebar.section>
                    Webmaster
                </x-sidebar.section>
                {{--
                <li>
                    <a href="javascript: void(0);" class="has-arrow waves-effect">
                        <i class="uil-store"></i>
                        <span>Transactions</span>
                    </a>
                    <ul class="sub-menu" aria-expanded="false">
                        <li><a href="/transactions">Add New</a></li>
                        <li><a href="transactions/create">View All</a></li>
                    </ul>
                </li>
                <li>
                    <a href="/transactions" class="waves-effect" style="color: #ccc;">
                        <i class="uil-invoice" style="color: #ccc;"></i>
                        <span class="badge rounded-pill bg-danger float-end">15</span>
                        <span>Transactions</span>
                    </a>
                </li>
                <li>
                    <a href="/customers" class="waves-effect" style="color: #ccc;">
                        <i class="uil-book-alt" style="color: #ccc;"></i>
                        <span class="badge rounded-pill bg-danger float-end">92</span>
                        <span>Customers</span>
                    </a>
                </li>
                <li>
                    <a href="/collectors" class="waves-effect" style="color: #ccc;">
                        <i class="uil-user-circle" style="color: #ccc;"></i>
                        <span>Collectors</span>
                    </a>
                </li>
                <li>
                    <a href="/activity-logs" class="waves-effect" style="color: #ccc;">
                        <i class="uil-server-connection" style="color: #ccc;"></i>
                        <span class="badge rounded-pill bg-warning float-end">New</span>
                        <span>Activity Logs</span>
                    </a>
                </li>
                <li>
                    <a href="/reports" class="waves-effect" style="color: #ccc;">
                        <i class="uil-chart-pie" style="color: #ccc;"></i>
                        <span>Reports</span>
                    </a>
                </li> --}}
            </ul>
        </div>
    </div>
</div>