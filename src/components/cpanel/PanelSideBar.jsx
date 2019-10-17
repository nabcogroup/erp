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
                        <li className="nav-title">Account Receivable</li>
                        <li className="nav-item nav-dropdown open">
                            <a className="nav-link nav-dropdown-toggle" href="#" >
                                <i class="nav-icon icon-puzzle"></i> Sales
                            </a>
                            <ul className="nav-dropdown-items">
                                <li className="nav-item">
                                    <a className="nav-link active" href="#">Quotation</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link " href="#">Invoice</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link " href="#">Delivery Note</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link " href="#">Book</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link " href="#">Sales Return</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Cash Receipt</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
    
}

export default PanelSidebar;
