import React from 'react'
import './SideBar.css'
import SidebarRow from './SidebarRow'
// importin Icons
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital'
import PeopleIcon from '@material-ui/icons/People'
import ChatIcon from '@material-ui/icons/Chat'
import StorefrontIcon from '@material-ui/icons/Storefront'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const SideBar = () => {
  return (
    <div className="sidebar">
      <SidebarRow src="ss" title="Jatin Pratap Singhs" />
      <SidebarRow
        Icon={LocalHospitalIcon}
        title="COVID-19 Information Center"
      />
      <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
      <SidebarRow Icon={PeopleIcon} title="Friends" />
      <SidebarRow Icon={ChatIcon} title="Messanger" />
      <SidebarRow Icon={StorefrontIcon} title="MarketPlace" />
      <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
      <SidebarRow Icon={ExpandMoreIcon} title="MarketPlace" />
    </div>
  )
}

export default SideBar
