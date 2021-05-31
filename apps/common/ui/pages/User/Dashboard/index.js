/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import getNavs from '../../getNavs';

import SidebarWithSearchAndAvatar from '../../../components/SidebarWithSearchAndAvatar';

export default function DashboardUser(props) {
  const { roles } = props;
  return (
    <SidebarWithSearchAndAvatar currentPageName="Dashboard" navigations={getNavs(roles)} {...props}>
      <p>Terima kasih telah mendaftar!</p>
      <br />
      <p>
        Upload foto e-KTP anda di <Link to="/idcard">tautan berikut ini</Link>
      </p>
      <br />
      <p>
        Email verifikasi telah dikirimkan ke email yang didaftarkan. Harap buka email tersebut dan
        click link di dalam email tersebut untuk menverifikasi akun email anda
      </p>
    </SidebarWithSearchAndAvatar>
  );
}

DashboardUser.propTypes = {
  roles: PropTypes.arrayOf(PropTypes.string).isRequired,
};
