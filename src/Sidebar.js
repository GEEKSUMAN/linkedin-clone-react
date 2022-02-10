import React from 'react'
import "./css/sidebar.css"
import { Avatar } from "@material-ui/core"
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'

function Sidebar() {
    const user =  useSelector(selectUser);
    return (

       
        <div className="sidebar">
            <div className="sidebar__profile">
                <img alt='profile' src="https://1.bp.blogspot.com/-uJjiKG6H9i4/TdFxIFr17EI/AAAAAAAAADw/o9NIL0QPRsI/s1600/abstract-desktop-worldwallpapers2u.jpg"/>
           
                    <div className="profile__details">
                        <Avatar src={user.photoURL}/>
                        <h4>{user.displayName}</h4>
                        <p>Web Developer</p>
                    </div>

                    <div className="profile__stats">
                        <span>Who viewed your profile</span>
                        <span className="stat__number">20</span>
                    </div>

                    <div className="profile__stats">
                        <span>Connection<br/><b>Grow Your Network</b></span>
                        <span className="stat__number">150</span>
                    </div>
            </div>

            <div className="sidebar__recent">
                <p>Recent</p>
                <p className="hash"><span>#</span> branding</p>
                <p className="hash"><span>#</span> marketing</p>
                <p className="hash"><span>#</span> webdevelopment</p>
                <p className="hash"><span>#</span> programming</p>
                <p className="hash"><span>#</span> reactjs</p>
                <p className="hash"><span>#</span> reduxtoolkit</p>
            </div>
            
        </div>
    )
}

export default Sidebar
