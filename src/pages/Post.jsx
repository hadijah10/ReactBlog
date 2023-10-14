import React from 'react'
import { useState } from 'react';
import classes from './Post.module.css'
import {db,addDoc,collection} from '../firebase-config';
import { auth } from '../firebase-config';
import toast from 'react-hot-toast';
function Post(){
    const [title,setTitle] = useState('')
    const [message,setMessage] = useState('')
    const docAdd = async() => {
        try{
            await addDoc(collection(db,"posts"),{title,message,author:{name:auth.currentUser.displayName,id:auth.currentUser.uid}})
       toast.success("Post added!")
            setTitle('')
            setMessage('')
        }catch(err){
        toast.error("Post not added")
        setTitle('')
        setMessage('')
        }
    }
 
    return(
        <>
       <div className={classes.post}>
       <form action="POST" onSubmit={docAdd} className={classes.form}>
            <h3>Create Blog</h3>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={(e) => setTitle(e.target.value)} placeholder='Title' />
            <label htmlFor="message">Post</label>
            <textarea name="post" id="message" onChange={(e) => setMessage(e.target.value)} rows="10"></textarea>
        </form>
        <button onClick={docAdd} type='submit' className={classes.btn}>Post</button>       
       </div>
        </>
    );
}
export default Post;