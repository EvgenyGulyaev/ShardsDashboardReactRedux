import React from "react";

import { connect } from 'react-redux';
import { compose } from 'redux';
import { toggleSidebar } from '../store/actions/sidebar';

const connectFunction = connect(
  (state) => ({
    menuVisible: state.toggleSidebar.menuVisible,
    navItems: state.toggleSidebar.navItems,
  }),
  { toggleSidebar }
);


const Context = React.createContext();
export const { Consumer } = Context;


class SidebarProvider extends React.Component {
  render() {
    const {children } = this.props;
    return (
      <Context.Provider value={this.props}>
        {children}
      </Context.Provider>
    )
  }
}

export default  compose(
  connectFunction,
)(SidebarProvider);
