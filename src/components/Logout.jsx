import { Button } from "antd";
import "./Logout.css";

export default function Logout({ setUser }) {
  return (
    <div style={{ display: "flex", justifyContent: "flex-end" }}>
      <Button
        onClick={() => {
          setUser(null);
          localStorage.removeItem("user");
        }}
        type="primary"
        size="large"
        className="logout-button"
      >
        Logout
      </Button>
    </div>
  );
}
