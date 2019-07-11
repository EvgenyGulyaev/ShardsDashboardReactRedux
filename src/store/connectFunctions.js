import { connect } from 'react-redux';
import { toggleSidebar } from './actions/sidebar';

export const withSidebar = connect(
  (state) => ({
    menuVisible: state.toggleSidebar.menuVisible,
    navItems: state.toggleSidebar.navItems,
  }),
  { toggleSidebar }
);
