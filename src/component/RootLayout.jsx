import React from 'react'
import { MdOutlet } from 'react-icons/md'
import {NavLink,Outlet} from 'react-router-dom'
import {useState} from 'react'
import { signOut, auth} from '../firebase-config'
import {useSelector} from 'react-redux'
import classes from './RootLayout.module.css'

function RootLayout(){

    const isAuth = useSelector((state) => state.auth.value)
    const logOut = async() => {
        try{
            await signOut(auth)
          localStorage.clear();
         
        }catch(err){
         
        }
    return (
        <>
        <header className={classes.header}>
            <nav className={classes.nav}>
                <NavLink to='/'>Home</NavLink>
               { isAuth ? <NavLink to='/login' onClick={logOut}>LogOut</NavLink>:<NavLink to='/login'>Login</NavLink>}
                {isAuth && <NavLink to='post'>Create Post</NavLink>}
            </nav>
        </header>
       <main>
       <Outlet/>
       </main>
        </>
    )
}
}
export default RootLayout;

