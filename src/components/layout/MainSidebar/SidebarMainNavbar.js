import React from "react";
import PropTypes from "prop-types";
import { Navbar, NavbarBrand } from "shards-react";
import {Link} from 'react-router-dom'
import { Dispatcher, Constants } from "flux";

class SidebarMainNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.handleToggleSidebar = this.handleToggleSidebar.bind(this);
  }

  handleToggleSidebar() {
    Dispatcher.dispatch({
      actionType: Constants.TOGGLE_SIDEBAR
    });
  }

  render() {
    const { hideLogoText } = this.props;
    return (
      <div className="main-navbar">
        <Navbar
          className="align-items-stretch bg-white flex-md-nowrap border-bottom p-0"
          type="light"
        >
          <NavbarBrand
            className="w-100 mr-0"
            style={{ lineHeight: "25px" }}
            href="/"
          >
            <div className="d-flex m-auto align-items-center">
                <img
                  id="main-logo"
                  className="d-inline-block align-top mr-1"
                  style={{ maxWidth: "60px" }}
                  src={require("assets/images/site/newlogo-gishniz.png")}
                  alt="Gishniz"
                />
              {!hideLogoText && (
                <span className="d-flex d-md-inline ml-1 align-items-center" style={{fontSize:'20px',fontWeight:"500",color: "#525252"
              }}>
                  Gishniz
                </span>
              )}
            </div>
          </NavbarBrand>
          <a
            className="toggle-sidebar d-sm-inline d-md-none d-lg-none"
            onClick={this.handleToggleSidebar}
          >
            <i className="material-icons">&#xE5C4;</i>
          </a>
        </Navbar>
      </div>
    );
  }
}

SidebarMainNavbar.propTypes = {
  /**
   * Whether to hide the logo text, or not.
   */
  hideLogoText: PropTypes.bool
};

SidebarMainNavbar.defaultProps = {
  hideLogoText: false
};

export default SidebarMainNavbar;
