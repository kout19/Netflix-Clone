import React from 'react'
import './header.css';
import SearchIcon from '@mui/icons-material/Search';
import netflixLogo from '../../assets/images/netflix-logo.png';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
 const Header = () => {
  return (
    <div className='header_outer_container'>
      <div className='header_container'>
        <div className='header_left header_list'>
          <ul>
          <li><img src={netflixLogo} alt='logo_image' width='100'/> </li>
            <li>Home</li>
            <li>TVMovies</li>
            <li>MyMovies</li>
            <li>Latest</li>
            <li>MyList</li>
            <li>Browser by languages</li>
          </ul>
        </div>
        <div className='header_right header_list'>
          <ul>
            <li>
              <SearchIcon style={{fontSize:24}}/>
            </li>
            <li>
              <NotificationsNoneIcon style={{ fontSize: 24 }} /></li>
            <li>
              <AccountBoxIcon style={{ fontSize: 24 }} />
              </li>
            <li>
              <ArrowDropDownIcon style={{fontSize:24}}/>
              </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header;