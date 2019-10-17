import React from 'react';

import logo from './img/brand/logo.png';
import sygnet from './img/brand/sygnet.svg'

import "@coreui/icons/css/coreui-icons.min.css"
import "flag-icon-css/css/flag-icon.min.css"
import "font-awesome/css/font-awesome.min.css"
import "simple-line-icons/css/simple-line-icons.css"
import './style.min.css';

import PanelHeader from "./components/cpanel/PanelHeader";
import PanelSidebar from './components/cpanel/PanelSideBar';
import ItemHelper from "./components/item-helper/ItemHelper";
import ContractForm from './components/contracts/ContractForm';
import QuotationForm from './components/sales/QuotationForm';

function App() {

	const notification = {
		link: "#",
		count: 4
	}
	
	return (
		<div className="app header-fixed sidebar-fixed aside-menu-fixed sidebar-lg-show">
			<PanelHeader 
				imgFull={logo} 
				imgMin={sygnet} 
				notification={notification} />
			<div className="app-body">
				<PanelSidebar />
				<main className="main">
					<ol className="breadcrumb">
						<li class="breadcrumb-item">
							<a href="#">Home</a>
						</li>
						<li class="breadcrumb-item">Quotation</li>
					</ol>
					<QuotationForm	 />
				</main>
			</div>
		</div>
	);
}

export default App;
