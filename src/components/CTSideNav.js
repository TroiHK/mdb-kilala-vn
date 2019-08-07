import React, { Component } from "react";
import "./sidenav.css";

class CTSideNav extends Component {

    render() {
        return (
            <div id="slide-out" className="side-nav sn-bg-4 mdb-sidenav fixed">
                <ul className="custom-scrollbar">
                    {this.props.children}
                </ul>
            </div>
        );
    }
}

export default CTSideNav;