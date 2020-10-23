import React from 'react'
import { Avatar, Icon } from '@material-ui/core'
import './SidebarRow.css'
const SidebarRow = ({ src, Icon, title }) => {
  return (
    <div className="sidebarRow">
      {src && <Avatar scr={src} />}
      {Icon && <Icon />}
      <h4>{title}</h4>
    </div>
  )
}

export default SidebarRow
