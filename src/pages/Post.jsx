import React from "react";
import { useState } from "react";
import classes from "./Post.module.css";
import { db, addDoc, collection } from "../firebase-config";
import { auth } from "../firebase-config";
import toast from "react-hot-toast";
import { Button, Input, Form, Typography } from "antd";
const { TextArea } = Input;
const { Title } = Typography;

function Post() {
  const [form] = Form.useForm();
  const title = Form.useWatch("title", form);
  const message = Form.useWatch("blog", form);

  const docAdd = async () => {
    try {
      await addDoc(collection(db, "posts"), {
        title: title,
        message: message,
        author: {
          name: auth.currentUser.displayName,
          id: auth.currentUser.uid,
        },
      });
      toast.success("Post added!");
      form.resetFields();
    } catch (err) {
      toast.error("Post not added");
    }
  };

  return (
    <>
      <Form
        form={form}
        style={{
          maxWidth: 600,
          border: "1px solid whitesmoke",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "white",
          gap: "20px",
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={docAdd}
        autoComplete="off"
      >
        <Title level={3}>h3. Ant Design</Title>
        <Form.Item
          label="Title"
          name={"title"}
          rules={[
            {
              required: true,
              message: "Please input the title!",
            },
          ]}
          wrapperCol={{
            offset: 0,
          }}
          style={{ width: "80%" }}
        >
          <Input placeholder="Blog title" />
        </Form.Item>
        <Form.Item
          label="Blog"
          name={"blog"}
          rules={[
            {
              required: true,
              message: "Please input your post!",
            },
          ]}
          wrapperCol={{
            offset: 0,
          }}
          style={{ width: "80%" }}
        >
          <TextArea rows={8} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Post
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
export default Post;
