import React, { Component } from 'react';


class Sidebar extends Component {
    render() {
        return (
            <div className="Sidebar">
                <aside class="left-sidebar" data-sidebarbg="skin5">
                    <div class="scroll-sidebar">
                        <nav class="sidebar-nav">
                            <ul id="sidebarnav" class="p-t-30">
                                <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link" href aria-expanded="false"><i class="mdi mdi-view-dashboard"></i><span class="hide-menu">Dashboard</span></a></li>
                                <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link" href aria-expanded="false"><i class="mdi mdi-chart-bar"></i><span class="hide-menu">Control Panel</span></a></li>
                                <li class="sidebar-item"> <a class="sidebar-link has-arrow waves-effect waves-dark" href aria-expanded="false"><i class="mdi mdi-receipt"></i><span class="hide-menu">Masters </span></a>
                                    <ul aria-expanded="false" class="collapse  first-level">
                                        <li class="sidebar-item"><a href class="sidebar-link"><i class="mdi mdi-note-outline"></i><span class="hide-menu"> Topic </span></a></li>
                                        <li class="sidebar-item"><a href class="sidebar-link"><i class="mdi mdi-note-plus"></i><span class="hide-menu"> State </span></a></li>
                                        <li class="sidebar-item"><a href class="sidebar-link"><i class="mdi mdi-note-plus"></i><span class="hide-menu"> District </span></a></li>
                                    </ul>
                                </li>
                                <li class="sidebar-item"> <a class="sidebar-link has-arrow waves-effect waves-dark" href aria-expanded="false"><i class="mdi mdi-face"></i><span class="hide-menu">User Management </span></a>
                                    <ul aria-expanded="false" class="collapse  first-level">
                                        <li class="sidebar-item"><a href class="sidebar-link"><i class="mdi mdi-emoticon"></i><span class="hide-menu"> Create User </span></a></li>
                                        <li class="sidebar-item"><a href class="sidebar-link"><i class="mdi mdi-emoticon-cool"></i><span class="hide-menu"> View User </span></a></li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </aside>
            </div>
        );
    }
}

export default Sidebar;

