/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';

import SidebarWithSearchAndAvatar from '../components/SidebarWithSearchAndAvatar';
import TableSimpleWithStatus from '../components/TableSimpleWithStatus';
import PaginationButton from '../components/PaginationButton';
import Tabs from '../components/Tabs';

import EntityList from '../containers/EntityList';

import getNavs from './getNavs';

class PageList extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);

    this.state = {
      currentPage: 1,
    };
  }

  render() {
    const {
      Entity,
      parser,
      jsonDefs,
      tabs,
      sort,
      perPage,
      settings,
      history,
      roles,
      currentPageName,
      currentTabName,
      publishName,
      createDoc,
    } = this.props;
    const { search, currentPage } = this.state;
    const { perPage: perPageSetting } = settings;

    const searchForm = (event) => {
      this.setState({ search: event.target.value, currentPage: 1 });
    };

    return (
      <SidebarWithSearchAndAvatar
        currentPageName={currentPageName}
        searchForm={searchForm}
        navigations={getNavs(roles)}
        createDoc={createDoc}
        {...this.props}
      >
        {tabs && <Tabs tabs={tabs} current={currentTabName} history={history} />}
        <EntityList
          Entity={Entity}
          jsonDefs={jsonDefs}
          sort={sort}
          publishName={publishName}
          parser={parser}
          componentTable={TableSimpleWithStatus}
          componentPagination={PaginationButton}
          settings={settings}
          search={(search && search.length) >= (settings.minCharSearch || 3) ? search : undefined}
          currentPage={currentPage}
          perPage={perPage || perPageSetting}
          onChangePage={(currentPageNow) => this.setState({ currentPage: currentPageNow })}
        />
      </SidebarWithSearchAndAvatar>
    );
  }
}

PageList.defaultProps = {
  tabs: undefined,
  createDoc: undefined,
  perPage: undefined,
};

PageList.propTypes = {
  Entity: PropTypes.object.isRequired,
  parser: PropTypes.func.isRequired,
  jsonDefs: PropTypes.func.isRequired,
  tabs: PropTypes.arrayOf(PropTypes.object),
  roles: PropTypes.arrayOf(PropTypes.string).isRequired,
  sort: PropTypes.object.isRequired,
  perPage: PropTypes.number,
  settings: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  currentPageName: PropTypes.string.isRequired,
  currentTabName: PropTypes.string.isRequired,
  publishName: PropTypes.string.isRequired,
  createDoc: PropTypes.func,
};

export default PageList;
