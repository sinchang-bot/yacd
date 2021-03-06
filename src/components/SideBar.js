import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import Icon from 'c/Icon';

import activity from 's/activity.svg';
import settings from 's/settings.svg';
import globe from 's/globe.svg';
import file from 's/file.svg';
import yacd from 's/yacd.svg';

import s from 'c/SideBar.module.scss';

const SideBarRow = React.memo(function SideBarRow({ iconId, labelText, to }) {
  return (
    <NavLink exact to={to} className={s.row} activeClassName={s.rowActive}>
      <Icon id={iconId} width={28} height={28} />
      <div className={s.label}>{labelText}</div>
    </NavLink>
  );
});

SideBarRow.propTypes = {
  to: PropTypes.string.isRequired,
  iconId: PropTypes.string,
  labelText: PropTypes.string
};

function SideBar() {
  return (
    <div className={s.root}>
      <div className={s.logo}>
        <Icon id={yacd.id} width={80} height={80} />
      </div>

      <div className={s.rows}>
        <SideBarRow to="/" iconId={activity.id} labelText="Overview" />
        <SideBarRow to="/proxies" iconId={globe.id} labelText="Proxies" />
        <SideBarRow to="/configs" iconId={settings.id} labelText="Config" />
        <SideBarRow to="/logs" iconId={file.id} labelText="Logs" />
      </div>
    </div>
  );
}

export default React.memo(SideBar);
