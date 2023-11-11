import React, { useState } from "react";
import { Button, Modal, Input, Form, Typography } from "antd";
import { EditOutlined } from "@ant-design/icons";
const { Title } = Typography;
const { TextArea } = Input;

function Updatemodal({ updateuserDoc, docId }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const title = Form.useWatch("title", form);
  const message = Form.useWatch("blog", form);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleAddDoc = () => {
    updateuserDoc(docId, title, message);
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button
        type="primary"
        shape="circle"
        onClick={showModal}
        icon={<EditOutlined />}
      />
      <Modal
        title="Blog Update"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="update" type="primary" onClick={handleCancel}>
            Cancel
          </Button>,
        ]}
      >
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
          onFinish={handleAddDoc}
          autoComplete="off"
        >
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
            <Button type="primary" htmlType="submit" onClick={handleAddDoc}>
              Update
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
export default Updatemodal;
