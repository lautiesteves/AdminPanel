import './navbar.scss';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';
import ListIcon from '@mui/icons-material/List';
import logo from '../../img/logo.png';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..."/>
          <SearchOutlinedIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageIcon className="icon"/>
            English
          </div>
          <div className="item">
            <DarkModeIcon className="icon" />
          </div>
          <div className="item">
            <FullscreenExitIcon className="icon" />
          </div>
          <div className="item">
            <NotificationsIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatIcon className="icon" />
            <div className="counter">3</div>
          </div>
          <div className="item">
            <ListIcon className="icon" />
          </div>
          <div className="item">
            <img src={logo} alt="" className="avatar" />          
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar