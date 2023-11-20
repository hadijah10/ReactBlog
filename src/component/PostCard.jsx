import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Card, Space, Tooltip, Typography } from "antd";
import { useSelector } from "react-redux";
import { auth, db, deleteDoc, doc } from "../firebase-config";
const { Title } = Typography;

export function PostCard({ user }) {
  const userdata = useSelector((state) => state.auth.value);

  const deleteUser = async (id) => {
    const user = doc(db, "posts", id);

    await deleteDoc(user);
  };
console.log("post user", user.title)
  return (
    <Card
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
            auth?.currentUser.displayName == user.author.name && (
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
                  <Button
                    type="primary"
                    shape="circle"
                    icon={<EditOutlined />}
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
}
