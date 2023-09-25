import React from 'react'
import { useState } from 'react';
import classes from './Post.module.css'
import {db,addDoc,collection} from '../firebase-config';
import { auth } from '../firebase-config';
function Post(){
    const [title,setTitle] = useState('')
    const [message,setMessage] = useState('')
    const [addmessage,setaddMessage] = useState('')
    const [showmessage,setshowMessage] = useState(false)
    const docAdd = async() => {
        try{
            await addDoc(collection(db,"posts"),{title,message,author:{name:auth.currentUser.displayName,id:auth.currentUser.uid}})
        setaddMessage('Post added!!')
        setshowMessage(true)
        show()
        }catch(err){
            setaddMessage('Post not added!!')
            setshowMessage(true)
            show()
        }
    }
    const show = ()=> {
        if(showmessage){
            setTimeout(() => setshowMessage(true),3000)
            setshowMessage(false)
        }
    }
    return(
        <>
       <div className={classes.post}>
       <form action="" onSubmit={docAdd} className={classes.form}>
            <h3>Create Blog</h3>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={(e) => setTitle(e.target.value)} placeholder='Title' />
            <label htmlFor="message">Post</label>
            <textarea name="post" id="message" onChange={(e) => setMessage(e.target.value)} rows="10"></textarea>
            <button onClick={()=>docAdd()} className={classes.btn}>Post</button>
         <p className={`classes.message ${showmessage? 'classes.visible':''}`}>{addmessage}</p>
        </form>
       </div>
        </>
    );
}
export default Post;