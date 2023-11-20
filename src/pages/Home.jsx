import React from "react";
import { useState } from "react";
import {
  deleteDoc,
  doc,
  db,
  collection,
  getDocs,
  auth,
} from "../firebase-config";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { Card, Typography, Button, Space, Tooltip } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { PostCard } from "../component/PostCard";
import { fetchUsers, selectUsers } from "../redux/users";
const { Title } = Typography;

export default function Home() {
  const dispatch = useDispatch();
  const { users, isLoading, error } = useSelector(selectUsers);
  console.log("error", error)
  console.log("users", users)
  // const [users, setUsers] = useState([
  //   {
  //     title: "Tinitin a software di impaginazione come Aldus PageMake",
  //     message: "Lorem ipsium",
  //     author: { name: "Hadija", email: "hakjd@gmail.com" },
  //   },
  //   {
  //     title: "Tinitin a software di impaginazione come Aldus PageMake",
  //     message: "Lorem ipsium",
  //     author: { name: "Hadija", email: "hakjd@gmail.com" },
  //   },
  // ]);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <>
      <Space
        direction="vertical"
        size="middle"
        style={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          minHeight: "90vh",
        }}
      >
        {isLoading ? (
          <Typography>Loading...</Typography>
        ) : (
          users?.map((user) => {
            return <PostCard user={user} key={user.id} />;
          })
        )}
        {error && <Typography>An error occurred</Typography>}
      </Space>
    </>
  );
}
