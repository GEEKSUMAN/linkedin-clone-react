import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import "./css/header.css"
import Headeroptions from './Headeroptions';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import MessageIcon from '@material-ui/icons/Message';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Avatar }  from "@material-ui/core"
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
function Header() {

    const user = useSelector(selectUser);
    return (
        <div className="header">
            <div className="header__left">
                <div className="header__logo">
                    <img alt='header' src="https://image.flaticon.com/icons/png/512/174/174857.png"/>
                </div>

                <div className="header__search">
                    <SearchIcon/>
                    <input type="text" placeholder="Search"/>
                </div>
            </div>

            <div className="header__right">
                <Headeroptions Icon={HomeIcon} title="Home"/>
                <Headeroptions Icon={PeopleIcon} title="My Network"/>
                <Headeroptions Icon={BusinessCenterIcon} title="Jobs"/>
                <Headeroptions Icon={MessageIcon} title="Messaging"/>
                <Headeroptions Icon={NotificationsIcon} title="Notification"/>
                <Headeroptions avatar={Avatar} title={user.displayName}/>
            </div>
        </div>
    )
}

export default Header

