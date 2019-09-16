import React, { Component } from 'react';



const NotificationBellComponents = ({item}) => {

    return(
        <a className="nav-link" href={item.link}>
            <i className="icon-bell"></i>
            <span className="badge badge-pill badge-danger">{item.count}</span>
        </a>
    )

}

class PanelHeader extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { imgFull, imgMin,rightIcon, notification }= this.props;
        return(
            <header className="app-header navbar">
                <button className="navbar-toggler sidebar-toggler d-lg-none mr-auto" type="button" data-toggle="sidebar-show">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand" href="#">
                    <img className="navbar-brand-full" src={imgFull} width="89" height="25" alt="CoreUI Logo" />
                    <img className="navbar-brand-minimized" src={imgMin} width="30" height="30" alt="CoreUI Logo" />
                </a>
                <button className="navbar-toggler sidebar-toggler d-md-down-none" type="button" data-toggle="sidebar-lg-show">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <ul className="nav navbar-nav d-md-down-none">
                    <li className="nav-item px-3">
                        <a className="nav-link" href="#">Dashboard</a>
                    </li>
                    <li className="nav-item px-3">
                        <a className="nav-link" href="#">Item Help</a>
                    </li>
                    <li className="nav-item px-3">
                        <a className="nav-link" href="#">Reports</a>
                    </li>
                    <li className="nav-item px-3">
                        <a className="nav-link" href="#">Settings</a>
                    </li>
                </ul>

                <ul className="nav navbar-nav ml-auto">
                    <li className="nav-item d-md-down-none">
                        <NotificationBellComponents item={notification}/>
                    </li>
                    <li className="nav-item d-md-down-none">
                        <a className="nav-link" href="#">
                            <i className="icon-list"></i>
                        </a>
                    </li>
                </ul>
		    </header>
        )
    }

}



export default PanelHeader;
