import React from 'react';
import PropTypes from 'prop-types';
import './Badge.scss';
import classNames from 'classnames';

const Badge = ({classname, children}) => {
  return (
    <span className={classNames('Badge', classname)}>
      {children}
    </span>
  );
};

Badge.propTypes = {
  classname: PropTypes.string,
  children: PropTypes.any,
};

export default Badge;
