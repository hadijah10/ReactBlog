import React from 'react'
import classe from './Login.module.css';
import {signInWithPopup} from "firebase/auth";
import {auth,provider} from '../firebase-config'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import {login,logout} from '../redux/auth'
import classes from './Login.module.css';
function Login(){
   
   const dispatch = useDispatch()
   let navigate = useNavigate()
    const signInWithGoogle = () => {
        signInWithPopup(auth,provider).then(result => {
            const name = result.user.displayName
            const email = result.user.displayEmail
            //localStorage.setItem("name",name)
           // localStorage.setItem("email",email)
          //  Cookies.set('ck03', 'v103', { sameSite: 'none' } )
            dispatch(login());
         navigate('/',{replace:true})

        }
        ).catch(err => alert(err.message))
       
    }

    return(
        <>
       <div className={classes.log}>
             <button  className={classes.login} onClick={signInWithGoogle} >
                    Sign In with Google
            </button>
       </div>
        </>
    );
}
export default Login;