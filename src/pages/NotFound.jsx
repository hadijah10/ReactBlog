import React from "react";
import { Button, Result } from "antd";

function NotFound() {
  return (
    <div>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, resource not found."
        extra={
          <Button type="primary" href="/home">
            Back Home
          </Button>
        }
      />
    </div>
  );
}

export default NotFound;
