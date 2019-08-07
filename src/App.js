import React, { Component } from "react";
import {
    MDBInput,
    MDBNavbar,
    MDBNavbarNav,
    MDBNavItem,
    MDBNavLink,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBIcon,
} from "mdbreact";
import CTSideNav from "./components/CTSideNav";
import CTSideNavNav from "./components/CTSideNavNav";
import CTSideNavCat from "./components/CTSideNavCat";
import CTSideNavItem from "./components/CTSideNavItem";
import logo from "./images/logo.png";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggleStateA: false,
            breakWidth: 1300,
            windowWidth: 0
        };
    }

    componentDidMount() {
        this.handleResize();
        window.addEventListener("resize", this.handleResize);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.handleResize);
    }

    handleResize = () =>
        this.setState({
            windowWidth: window.innerWidth
        });

    handleToggleClickA = () => {
        this.setState({
            toggleStateA: !this.state.toggleStateA
        });
    };

    render() {
        const navStyle = {
            paddingLeft:
                this.state.windowWidth > this.state.breakWidth ? "210px" : "16px"
        };

        const mainStyle = {
            margin: "0 6%",
            paddingTop: "5.5rem",
            paddingLeft:
                this.state.windowWidth > this.state.breakWidth ? "240px" : "0"
        };

        const specialCaseNavbarStyles = {
            WebkitBoxOrient: "horizontal",
            flexDirection: "row"
        };

        return (
            <Router>
                <div className="fixed-sn light-blue-skin">
                    <CTSideNav
                        logo={logo}
                        triggerOpening={this.state.toggleStateA}
                        breakWidth={this.state.breakWidth}
                        bg="https://mdbootstrap.com/img/Photos/Others/sidenav4.jpg"
                        mask="strong"
                        fixed
                    >
                        <li>
                            <div className="logo-wrapper waves-light waves-effect waves-light">
                                <a href="#"><img src="https://mdbootstrap.com/img/logo/mdb-transparent.png"
                                                 className="img-fluid flex-center"/>
                                </a>
                            </div>
                        </li>
                        <li>
                            <ul className="social">
                                <li>
                                    <a href="#!">
                                        <MDBIcon fab icon="facebook-f" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#!">
                                        <MDBIcon fab icon="pinterest" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#!">
                                        <MDBIcon fab icon="google-plus-g" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#!">
                                        <MDBIcon fab icon="twitter" />
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <MDBInput
                            type="text"
                            hint="Search"
                            style={{
                                color: "#fff",
                                padding: "0 10px 8px 30px",
                                boxSizing: "border-box"
                            }}
                        />
                        <CTSideNavNav>
                            <CTSideNavCat
                                name="Submit blog"
                                id="submit-blog-cat"
                                icon="chevron-right"
                            >
                                <CTSideNavItem>Submit listing</CTSideNavItem>
                                <CTSideNavItem>Registration form</CTSideNavItem>
                            </CTSideNavCat>
                            <CTSideNavCat
                                iconRegular
                                name="Instruction"
                                id="instruction-cat"
                                icon="hand-pointer"
                            >
                                <CTSideNavItem>For bloggers</CTSideNavItem>
                                <CTSideNavItem>For authors</CTSideNavItem>
                            </CTSideNavCat>
                            <CTSideNavCat name="About" id="about-cat" icon="eye">
                                <CTSideNavItem>Instruction</CTSideNavItem>
                                <CTSideNavItem>Monthly meetings</CTSideNavItem>
                            </CTSideNavCat>
                            <CTSideNavCat
                                name="Contact me"
                                id="contact-me-cat"
                                icon="envelope"
                            >
                                <CTSideNavItem>FAQ</CTSideNavItem>
                                <CTSideNavItem>Write a message</CTSideNavItem>
                            </CTSideNavCat>
                        </CTSideNavNav>
                    </CTSideNav>
                    <MDBNavbar color="indigo" dark style={navStyle} double expand="md" fixed="top" scrolling>
                        <MDBNavbarNav left>
                            <MDBNavItem>
                                <div
                                    onClick={this.handleToggleClickA}
                                    key="sideNavToggleA"
                                    style={{
                                        lineHeight: "32px",
                                        marginRight: "1em",
                                        verticalAlign: "middle"
                                    }}
                                >
                                    <MDBIcon icon="bars" color="white" size="2x" />
                                </div>
                            </MDBNavItem>
                            <MDBNavItem className="d-none d-md-inline" style={{ paddingTop: 5 }}>
                                <strong className="text-white font-weight-bold">Kilala Admin Dashboard</strong>
                            </MDBNavItem>
                        </MDBNavbarNav>
                        <MDBNavbarNav right style={specialCaseNavbarStyles}>
                            <MDBNavItem active>
                                <MDBNavLink to="#!">
                                    <MDBIcon icon="envelope" className="d-inline-inline" />{" "}
                                    <div className="d-none d-md-inline">Contact</div>
                                </MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to="#!">
                                    <MDBIcon far icon="comments" className="d-inline-inline" />{" "}
                                    <div className="d-none d-md-inline">Support</div>
                                </MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to="#!">
                                    <MDBIcon icon="user" className="d-inline-inline" />{" "}
                                    <div className="d-none d-md-inline">Account</div>
                                </MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBDropdown>
                                    <MDBDropdownToggle nav caret>
                                        <div className="d-none d-md-inline">Dropdown</div>
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu right>
                                        <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                                        <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                                        <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                                        <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                            </MDBNavItem>
                        </MDBNavbarNav>
                    </MDBNavbar>
                    <main style={mainStyle}>
                        <Routes />
                    </main>
                </div>
            </Router>
        );
    }
}

export default App;