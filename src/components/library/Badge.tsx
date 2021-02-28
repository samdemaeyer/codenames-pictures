import React from 'react'
import classNames from 'classnames'
import 'components/library/Badge.scss'

interface IProps {
  classname?: string
}

const Badge: React.FC<IProps> = ({ classname, children }) =>
  <span className={classNames('Badge', classname)}>
    {children}
  </span>

export default Badge
