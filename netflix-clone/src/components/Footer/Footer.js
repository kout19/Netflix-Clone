import React from 'react'
import './footer.css';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
 const Footer = () => {
  return (
    <div className='footer_outer_container'>
      <div className='footer_inner_container'>
        <div className='footer_icons'>
          <FacebookOutlinedIcon/>
          <InstagramIcon />
          <TwitterIcon />
          <YouTubeIcon/>
        </div>
        <div className='footer_data'> 
          <ul>
            <li>Audio Discription</li>
            <li>Invester Relation</li>
            <li>Legal Notice</li>
          </ul>
        </div>
        <div className=''>
          <ul>
            <li>Help center</li>
            <li>Jobs</li>
            <li>Only on netflix</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Footer;