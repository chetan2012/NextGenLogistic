import React, { Component } from 'react';
import Header from './Header';
import SideBar from './SideBar';


export default class Layout extends Component {

	render() {
		return (
			<div className="layoutContainer">
				<Header/>
				<SideBar/>
			</div>
		);
	}
}

