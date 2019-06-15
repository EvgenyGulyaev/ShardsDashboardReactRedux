import React from "react";
import { Nav } from "shards-react";

import SidebarNavItem from "./SidebarNavItem";
import { withSidebar } from '../../../HOC/withSidebar';

class SidebarNavItems extends React.Component {
  render() {
    const { navItems: items } = this.props;
    return (
      <div className="nav-wrapper">
        <Nav className="nav--no-borders flex-column">
          {items.map((item, idx) => (
            <SidebarNavItem key={idx} item={item} />
          ))}
        </Nav>
      </div>
    )
  }
}

export default withSidebar(SidebarNavItems);
