import React, { Component } from 'react'

class PanelSidebar extends Component {

    render() {

        return(
            <div className="sidebar">
                <nav className="sidebar-nav">
                    <ul className="nav">
                        <li className="nav-item">
                            <a className="nav-link" href="index.html">
                                <i className="nav-icon icon-speedometer"></i> Dashboard
                                <span className="badge badge-primary">NEW</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
    
}

export default PanelSidebar;
