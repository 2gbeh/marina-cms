<!-- ========== Left Sidebar Start ========== -->
<div class="vertical-menu">
    {{-- LOGO --}}
    <x-drawer-logo />
    {{-- HAMBURGER MENU --}}
    <button type="button" class="btn btn-sm px-3 font-size-16 header-item waves-effect vertical-menu-btn">
        <i class="fa fa-fw fa-bars"></i>
    </button>
    <div data-simplebar class="sidebar-menu-scroll">
        <div id="sidebar-menu">
            {{-- SIDEBAR MENU --}}
            <ul class="metismenu list-unstyled" id="side-menu">
                <li>
                    <a href="/dashboard">
                        <i class="uil-home-alt"></i>
                        <span>Dashboard</span>
                    </a>
                </li>
                <li>
                    <a href="/collectors" class="waves-effect">
                        <i class="uil-invoice"></i>
                        <span class="badge rounded-pill bg-danger float-end">15</span>
                        <span>Transactions</span>
                    </a>
                </li>
                <li>
                    <a href="/customers" class="waves-effect">
                        <i class="uil-book-alt"></i>
                        <span class="badge rounded-pill bg-danger float-end">92</span>
                        <span>Customers</span>
                    </a>
                </li>
                <li>
                    <a href="/collectors" class="waves-effect">
                        <i class="uil-user-circle"></i>
                        <span>Collectors</span>
                    </a>
                </li>
                <li>
                    <a href="/collectors" class="waves-effect">
                        <i class="uil-chart-pie"></i>
                        <span>Reports</span>
                    </a>
                </li>
                <li>
                    <a href="/collectors" class="waves-effect">
                        <i class="uil-server-connection"></i>
                        <span class="badge rounded-pill bg-warning float-end">New</span>
                        <span>Activity Logs</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</div>