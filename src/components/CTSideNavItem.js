import React, { Component } from "react";

class CTSideNavItem extends Component {

    render() {
        return (
            <div>
                <h1>nav 3</h1>
                {this.props.children}
            </div>
        );
    }
}

export default CTSideNavItem;