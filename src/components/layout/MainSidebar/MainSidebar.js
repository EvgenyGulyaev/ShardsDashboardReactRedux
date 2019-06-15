import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Col } from "shards-react";

import SidebarMainNavbar from "./SidebarMainNavbar";
import SidebarSearch from "./SidebarSearch";
import SidebarNavItems from "./SidebarNavItems";

import { connect } from 'react-redux';
import { toggleSidebar } from '../../../store/actions/sidebar';
import { compose } from 'redux';

const connectFunction = connect(
  (state) => ({
    menuVisible: state.toggleSidebar.menuVisible,
    navItems: state.toggleSidebar.navItems,
  }),
  { toggleSidebar }
);

class MainSidebar extends React.Component {
  render() {
    const { menuVisible} = this.props;
    const classes = classNames(
      "main-sidebar",
      "px-0",
      "col-12",
      menuVisible && "open"
    );

    return (
      <Col
        tag="aside"
        className={classes}
        lg={{ size: 2 }}
        md={{ size: 3 }}
      >
        <SidebarMainNavbar hideLogoText={this.props.hideLogoText} />
        <SidebarSearch />
        <SidebarNavItems />
      </Col>
    );
  }
}

MainSidebar.propTypes = {
  /**
   * Whether to hide the logo text, or not.
   */
  hideLogoText: PropTypes.bool
};

MainSidebar.defaultProps = {
  hideLogoText: false
};

export default compose(
  connectFunction,
)(MainSidebar);
