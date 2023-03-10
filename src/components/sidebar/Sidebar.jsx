import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard'
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined'
import InventoryIcon from '@mui/icons-material/Inventory'
import CreditCardIcon from '@mui/icons-material/CreditCard'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import ShowChartIcon from '@mui/icons-material/ShowChart'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'
import MonitorHeartOutlinedIcon from '@mui/icons-material/MonitorHeartOutlined'
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined'
import {Link} from 'react-router-dom'
import { DarkModeContext } from '../../context/darkModeContext'
import {useContext} from 'react'

const Sidebar = () => {
    const {dispatch} = useContext(DarkModeContext);
    return (
    <div className="sidebar">
        <div className="top">
            <Link to='/' style={{ textDecoration:'none'}}>
            <span className="logo">Chuzo Admin</span>
            </Link> 
        </div>
        <hr />
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <li>
                    <DashboardIcon className="icon"/>
                    <span>Dashboard</span>
                </li>
                <p className="title">LISTS</p>
                <Link to='/users' style={{ textDecoration:'none'}}>
                    <li>
                        <Person2OutlinedIcon className="icon"/>
                        <span>Users</span>
                    </li>
                </Link>
                <Link to='/products' style={{ textDecoration:'none'}}>
                    <li>
                        <InventoryIcon className="icon"/>
                        <span>Products</span>
                    </li>
                </Link>
                <li>
                    <CreditCardIcon className="icon"/>
                    <span>Orders</span>
                </li>
                <li>
                    <LocalShippingIcon className="icon"/>
                    <span>Delivery</span>
                </li>
                <p className="title">USEFUL</p>
                <li>
                    <ShowChartIcon className="icon"/>
                    <span>Stats</span>
                </li>
                <li>
                    <NotificationsNoneOutlinedIcon className="icon"/>
                    <span>Notifications</span>
                </li>
                <p className="title">SERVICE</p>
                <li>
                    <MonitorHeartOutlinedIcon className="icon"/>
                    <span>System Health</span>
                </li>
                <li>
                    <PsychologyOutlinedIcon className="icon"/>
                    <span>Logs</span>
                </li>
                <li>
                    <SettingsOutlinedIcon className="icon"/>
                    <span>Settings</span>
                </li>
                <p className="title">USER</p>
                <li>
                    <AccountCircleOutlinedIcon className="icon"/>
                    <span>Profile</span>
                </li>
                <li>
                    <LogoutOutlinedIcon className="icon"/>
                    <span>Logout</span>
                </li>
            </ul>
        </div>
        <div className="bottom">
            <div className="colorOption" onClick={() => dispatch({type:"LIGHT"})}></div>
            <div className="colorOption" onClick={() => dispatch({type:"DARK"})}></div>
        </div>
    </div>
  )
}

export default Sidebar