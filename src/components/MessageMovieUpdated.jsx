import { Button, message, Space } from "antd";

export function MessageMovieUpdated() {
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: "success",
      content: "Movie status has been updated.",
    });
  };
  return (
    <>
      {contextHolder}
      <Space>
        <Button onClick={success}>Success</Button>
      </Space>
    </>
  );
}
