import React from 'react';
import { Nav } from 'shards-react';

import SidebarNavItem from './SidebarNavItem';
import { withSidebar } from '../../../store/connectFunctions';

const SidebarNavItems = ({ navItems: items }) => (
  <div className="nav-wrapper">
    <Nav className="nav--no-borders flex-column">
      {items.map((item, idx) => (
        <SidebarNavItem key={idx} item={item}/>
      ))}
    </Nav>
  </div>
);

export default withSidebar(SidebarNavItems);
