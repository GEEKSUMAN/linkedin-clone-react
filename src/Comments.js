import { Avatar } from '@material-ui/core'
import React, { forwardRef } from 'react'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import "./css/post.css"
const Comments = forwardRef(({name, description, message, photoURL} , ref)=> {
    return (
        <div className="posts" ref={ref}>
            <div className="post__header">
                <div className="post__headerLeft">
                    <Avatar src={photoURL}/>
                    <div className="post_profile_details">
                        <h3>{name}</h3>
                        <p>{description}</p>
                    </div>
                </div>

                <MoreVertIcon/>
            </div>

            <div className="post__body">
                <p>{message}</p>
            </div>
        </div>
    )})

export default Comments
