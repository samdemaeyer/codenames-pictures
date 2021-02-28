import React from 'react'
import PropTypes from 'prop-types'
import './Badge.scss'
import classNames from 'classnames'

interface IProps {
  classname?: string,
  children?: any;
}

const Badge: React.FC<IProps> = ({ classname, children }) => 
  <span className={classNames('Badge', classname)}>
    {children}
  </span>

Badge.propTypes = {
  classname: PropTypes.string,
  children: PropTypes.any,
}

export default Badge
