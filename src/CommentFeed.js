import React, { useEffect, useState } from 'react'
import { Avatar } from "@material-ui/core"
import "./css/feed.css"
import Comments from './Comments';
import firebase from "firebase"
import { db } from './firebase';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import FlipMove from 'react-flip-move';
import useComponentId from './useComponentId';
function CommentFeed({postID}) {
    const userComment=postID;
    const user = useSelector(selectUser);
    const [comments, setComment] = useState([]);
    const [input, setInput] = useState();

        const submitPost=(e)=>{
                e.preventDefault();
               db.collection("comments").add({
                name:user.displayName,
                postID:postID,
                message:input,
                photoURL:user.photoURL,
                timestamp:firebase.firestore.FieldValue.serverTimestamp(),
               });
               setInput("");

        }

        useEffect(() => {
           db.collection("comments").orderBy("timestamp","desc").onSnapshot(snapshot=>{
            setComment(snapshot.docs.map(doc=>({
               id:doc.id,
               data:doc.data() 
            })))
           })
        }, [])

      
    return (
        <div className="feed">
            <div className="feed__input">
            <div className="feed__form">
                <Avatar src={user.photoURL}/>
                <form onSubmit={submitPost}>
                    <input type="text" placeholder="Add a comment"  value={input} onChange={e=>setInput(e.target.value)}/>
                    <input type="submit"/>
                </form>
            </div>
            </div>

            <FlipMove key={useComponentId}>
                {
                    comments.map(({id, data : {name, description, message, photoURL,postID}})=>{
                        return  (
                            <div>{ userComment===postID &&(<Comments key={id   }  name={name} description={description} message={message} photoURL={photoURL}/>)
                                }
                            </div>
                        )
                    })
                }
            </FlipMove>  

        </div>
    )
}

export default CommentFeed