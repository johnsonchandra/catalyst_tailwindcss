/* eslint-disable react/jsx-props-no-spreading  */

import React from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';

import SidebarWithSearchAndAvatar from '../components/SidebarWithSearchAndAvatar';
import TableSimpleWithStatus from '../components/TableSimpleWithStatus';
import PaginationButton from '../components/PaginationButton';
import Tabs from '../components/Tabs';

import UserList from '../containers/UserList';

import parser from '../../entities/User/ui/utils/UserParser';
import jsonDefs from '../../entities/User/api/utils/getUserJSONdefs';

import getNavs from './Dashboard/getNavs';

class PageUserList extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);

    this.state = {
      currentPage: 1,
    };
  }

  render() {
    const { tabs, settings, history, roles, currentPageName, currentTabName, publishName } =
      this.props;

    const { search, currentPage } = this.state;
    const { perPage } = settings;

    const searchForm = (event) => {
      this.setState({ search: event.target.value, currentPage: 1 });
    };

    return (
      <SidebarWithSearchAndAvatar
        currentPageName={currentPageName}
        searchForm={searchForm}
        navigations={getNavs(roles)}
        {...this.props}
      >
        <Tabs tabs={tabs} current={currentTabName} history={history} />
        <UserList
          jsonDefs={jsonDefs}
          sort={{
            'profile.fullname': 1,
          }}
          publishName={publishName}
          parser={parser}
          componentTable={TableSimpleWithStatus}
          componentPagination={PaginationButton}
          settings={settings}
          search={(search && search.length) >= (settings.minCharSearch || 3) ? search : undefined}
          currentPage={currentPage}
          perPage={perPage}
          onChangePage={(currentPageNow) => this.setState({ currentPage: currentPageNow })}
          roles={roles}
        />
      </SidebarWithSearchAndAvatar>
    );
  }
}

PageUserList.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.object).isRequired,
  roles: PropTypes.arrayOf(PropTypes.string).isRequired,
  settings: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  currentPageName: PropTypes.string.isRequired,
  currentTabName: PropTypes.string.isRequired,
  publishName: PropTypes.string.isRequired,
};

export default PageUserList;
