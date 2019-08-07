import React, { Component } from "react";

class CTSideNavNav extends Component {

    render() {
        return (
            <div>
                <h1>nav 4</h1>
                {this.props.children}
            </div>
        );
    }
}

export default CTSideNavNav;