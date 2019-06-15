import {
  TOGGLE_SIDEBAR,
} from "../actionNames";

import getSidebarNavItems from "../../data/sidebar-nav-items";

const initialState = {
  menuVisible: false,
  navItems: getSidebarNavItems()
};

const sidebar = (state = initialState, action) => {
  switch (action.type) {

    case TOGGLE_SIDEBAR:
      let { menuVisible, navItems } = state;
      menuVisible = !menuVisible;
      return { navItems, menuVisible };

    default:
      return state;
  }

};

export default sidebar
