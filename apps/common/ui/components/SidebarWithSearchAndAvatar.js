import React, { useState } from 'react';
import PropTypes from 'prop-types';

import NavbarSide from './NavbarSide';
import NavbarTop from './NavbarTop';

export default function SidebarWithSearchAndAvatar(props) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { currentPageName, navigations, children, user, name, searchForm, createDoc, settings } =
    props;

  return (
    <div className="h-screen flex overflow-hidden">
      <NavbarSide
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        currentPageName={currentPageName}
        navigations={navigations}
        settings={settings}
      />
      <NavbarTop
        setSidebarOpen={setSidebarOpen}
        currentPageName={currentPageName}
        user={user}
        name={name}
        searchForm={searchForm}
        createDoc={createDoc}
      >
        {children}
      </NavbarTop>
    </div>
  );
}

SidebarWithSearchAndAvatar.defaultProps = {
  user: {},
  name: '',
  searchForm: undefined,
  createDoc: undefined,
};

SidebarWithSearchAndAvatar.propTypes = {
  navigations: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentPageName: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  user: PropTypes.object,
  name: PropTypes.string,
  searchForm: PropTypes.func,
  createDoc: PropTypes.func,
  settings: PropTypes.object.isRequired,
};
