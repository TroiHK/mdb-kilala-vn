import React, { Component } from "react";

class CTSideNavCat extends Component {

    render() {
        return (
            <div>
                <h1>nav 2</h1>
                {this.props.children}
            </div>
        );
    }
}

export default CTSideNavCat;