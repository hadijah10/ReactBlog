import React from 'react'
import { useState } from 'react'
import { deleteDoc,doc ,db,collection,getDocs, auth} from '../firebase-config'
import { useEffect } from 'react'
import {CiEdit} from 'react-icons/ci';
import {useSelector} from 'react-redux';

export default function Home() {
    const isAuth = useSelector((state) => state.auth.value)
const [users,setUsers] = useState([]) 
const usercollectionref = collection(db, "posts")
const deleteUser = async(id)=> {
  const user = doc(db,"posts",id)

  await deleteDoc(user)
}
  useEffect(()=>{
    const getusers = async()=> {
      const data = await getDocs(usercollectionref)
      setUsers(data.docs.map((doc) => ({...doc.data(),id:doc.id})))
    }
    getusers()
  },[deleteUser])

 
  return (
    <>
   <div className='card'>
   {users.map((user)=>{
      return (
        <div key={user.id} className="">
            <h2>{user.title}</h2>
            <div className=''>
                <p>{user.message}</p>
                {isAuth&&(auth?.currentUser.displayName == user?.author?.name)?
                (<div>
                <button className='bnt' onClick={()=>deleteUser(user.id)}>&#128465;</button>
                <button className='bnt1'><CiEdit size={21}/></button>
                </div>):""}
            </div>
            <p>@{user?.author?.name}</p>
        </div>
      )
        })
    }
   </div>
   
    </>

  )
}
