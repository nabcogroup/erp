import React from 'react';

import logo from './img/brand/logo.svg';
import sygnet from './img/brand/sygnet.svg'

import "@coreui/icons/css/coreui-icons.min.css"
import "flag-icon-css/css/flag-icon.min.css"
import "font-awesome/css/font-awesome.min.css"
import "simple-line-icons/css/simple-line-icons.css"
import './style.min.css';

import PanelHeader from "./components/cpanel/PanelHeader";
import PanelSidebar from './components/cpanel/PanelSideBar';

function App() {

	const notification = {
		link: "#",
		count: 4
	}

	return (
		<div className="app header-fixed sidebar-fixed aside-menu-fixed sidebar-lg-show">
			<PanelHeader imgFull={logo} imgMin={sygnet} notification={notification} />
			<div className="app-body">
				<PanelSidebar />
				<main className="main">
					
				</main>
			</div>
		</div>
	);
}

export default App;
