<!-- ========== Left Sidebar Start ========== -->
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
                <li>
                    <a href="/dashboard_" class="waves-effect" style="background-color: #1c2742; color: #fff;">
                        <i class="uil-home-alt" style="color: #fff;"></i>
                        <span>Dashboard</span>
                    </a>
                </li>
                <li>
                    <a href="/collectors" class="waves-effect" style="color: #ccc;">
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
                    <a href="/collectors" class="waves-effect" style="color: #ccc;">
                        <i class="uil-server-connection" style="color: #ccc;"></i>
                        <span class="badge rounded-pill bg-warning float-end">New</span>
                        <span>Activity Logs</span>
                    </a>
                </li>
                <li>
                    <a href="/collectors" class="waves-effect" style="color: #ccc;">
                        <i class="uil-chart-pie" style="color: #ccc;"></i>
                        <span>Reports</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</div>