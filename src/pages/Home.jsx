import React from 'react'
import { useState } from 'react'
import { deleteDoc,doc ,db,collection,getDocs, auth} from '../firebase-config'
import { useEffect } from 'react'
import {useSelector} from 'react-redux';
import toast from 'react-hot-toast';
import { Card,Col,Row,Button, Space,Tooltip } from 'antd';
import {DeleteOutlined,EditOutlined} from '@ant-design/icons'

export default function Home() {
    const userdata = useSelector((state) => state.auth.value)
const [users,setUsers] = useState([{
  title:'Tinitin a software di impaginazione come Aldus PageMake',
  message:'Lorem ipsium',author:{name:'Hadija',email:'hakjd@gmail.com'}},
{
  title:'Tinitin a software di impaginazione come Aldus PageMake',
  message:'Lorem ipsium',author:{name:'Hadija',email:'hakjd@gmail.com'}}]) 
const usercollectionref = collection(db, "posts")
const deleteUser = async(id)=> {
  const user = doc(db,"posts",id)
 // {userdata.isauth&&(auth?.currentUser.displayName == userdata?.name)?():""}
  await deleteDoc(user)
}
  useEffect(()=>{
    const getusers = async()=> {
      const data = await getDocs(usercollectionref)
    //  setUsers(data.docs.map((doc) => ({...doc.data(),id:doc.id})))
    }
    getusers()
  },[deleteUser])

 
  return (
    <>
      <Space
      direction="vertical"
      size="middle"     
        style={{
          display: 'flex',
          justifyContent:'start',
          alignItems:'center',
          minHeight:'90vh'
        }}
      >
        {users.map((user)=> {
        return(
        
          <Card
       
            title={
              <Space    direction="row" wrap size='small'
              style={{
                display: 'flex',
                justifyContent:'space-between'
              }}
              >
                  <p wrap>{user.title}</p>
              <Space direction='row' size='small' >
              <Tooltip title="Delete" >
                 <Button type="primary" shape="circle" onClick={()=>deleteUser(user.id)} icon={ <DeleteOutlined />} />
               </Tooltip>
               <Tooltip title="Edit">
                 <Button  type="primary" shape="circle"  icon={ <EditOutlined />} />
               </Tooltip>
              </Space>
              </Space>
            }
            direction="vertical"
           
            style={{
              display: 'flex',
              flexDirection:'column',
              justifyContent:'center',
              width: '90vw',

            }}
          >
             <div>
             <p>{user.message}</p>
              <p>@{user?.author?.name}</p>
             </div>
          </Card>
      
        )
        })}
     </Space>
    </>

  )
}
