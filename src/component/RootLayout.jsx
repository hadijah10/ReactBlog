import React from 'react'
import { MdOutlet } from 'react-icons/md'
import {NavLink,Outlet,useNavigate,Navigate} from 'react-router-dom'
import {useState} from 'react'
import { signOut, auth} from '../firebase-config'
import {useSelector,useDispatch} from 'react-redux'
import classes from './RootLayout.module.css'
import {logout} from '../redux/auth.js'

function RootLayout(){

    const isAuth = useSelector((state) => state.auth.value)
    let navigate = useNavigate()
    const dispatch = useDispatch()
    const logOut = async() => {
        try{
            await signOut(auth)
            dispatch(logout())
          localStorage.clear();
         navigate('/' ,{replace:true})
      
        }catch(err){
         
        }
    }
    return (
        <>
        <header className={classes.header}>
            <nav className={classes.nav}>
                <NavLink to='/'>Home</NavLink>
               { isAuth ? 
               (<>
                    <NavLink to='/logout' onClick={logOut}>LogOut</NavLink>
                    <NavLink to='/post'>Create Post</NavLink>
                </>
               ):(<NavLink to='/login'>Login</NavLink>)}
               
            </nav>
        </header>
       <main>
       <Outlet/>
       </main>
        </>
    )
}

export default RootLayout;

