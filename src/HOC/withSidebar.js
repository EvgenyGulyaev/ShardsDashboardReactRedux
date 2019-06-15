import React from 'react';
import hoistStatics from 'hoist-non-react-statics';
import { Consumer } from './SidebarProvider';

export const withSidebar = (Component) => {
  class ComponentWithSidebar extends React.Component {
    static displayName = `withSidebar(${Component.displayName || Component.name})`;

    render() {
      const { onRef } = this.props;
      return (
        <Consumer>
          {({
              menuVisible,
              navItems,
              toggleSidebar,
            }) => (
            <Component
              {...this.props}
              ref={onRef}
              menuVisible={menuVisible}
              navItems={navItems}
              toggleSidebar={toggleSidebar}
            />
          )}
        </Consumer>
      );
    }
  }

  return hoistStatics(ComponentWithSidebar, Component);
};