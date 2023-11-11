import React from "react";
import { useState } from "react";
import {
  deleteDoc,
  doc,
  db,
  collection,
  getDocs,
  auth,
  updateDoc,
} from "../firebase-config";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { Card, Typography, Button, Space, Tooltip } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import Updatemodal from "./Updatemodal";
const { Title } = Typography;

export default function Home() {
  const userdata = useSelector((state) => state.auth.value);
  const [users, setUsers] = useState([]);
  const usercollectionref = collection(db, "posts");
  const deleteUser = async (id) => {
    const user = doc(db, "posts", id);
    //
    await deleteDoc(user);
  };
  const updateuserDoc = async (id, title, message) => {
    const userDoc = doc(db, "posts", id);
    const updatefield = { title: title, message: message };
    try {
      await updateDoc(userDoc, updatefield);
      toast.success("Updated Successfully");
    } catch (e) {
      toast.error("Couldn't update");
    }
  };

  useEffect(() => {
    const getusers = async () => {
      const data = await getDocs(usercollectionref);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getusers();
  }, [deleteUser]);

  return (
    <>
      <Space
        direction="vertical"
        size="middle"
        style={{
          paddingTop: "2em",
          paddingBottom: "2em",
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          minHeight: "90vh",
        }}
      >
        {users.map((user) => {
          return (
            <Card
              key={user.id}
              title={
                <Space
                  direction="row"
                  wrap
                  size="small"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Title level={3} wrap>
                    {user.title}
                  </Title>
                  {userdata.isauth &&
                    auth?.currentUser.displayName == userdata?.name && (
                      <Space direction="row" size="small">
                        <Tooltip title="Delete">
                          <Button
                            type="primary"
                            shape="circle"
                            onClick={() => deleteUser(user.id)}
                            icon={<DeleteOutlined />}
                          />
                        </Tooltip>
                        <Tooltip title="Edit">
                          <Updatemodal
                            docId={user.id}
                            updateuserDoc={updateuserDoc}
                          />
                        </Tooltip>
                      </Space>
                    )}
                </Space>
              }
              direction="vertical"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                width: "90vw",
              }}
            >
              <div>
                <p>{user.message}</p>
                <p>@{user?.author?.name}</p>
              </div>
            </Card>
          );
        })}
      </Space>
    </>
  );
}
