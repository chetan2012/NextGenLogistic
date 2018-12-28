import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export class ConfigTable extends Component {
    render() {
        return (
            <div className="sidenav">
                <NavLink to="/sidebar"> SideBar 1 </NavLink> 
            </div>
        );
    }
}

export default ConfigTable;