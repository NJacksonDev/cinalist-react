import { Avatar } from "antd";
import "./GoogleAvatar.css";

export default function GoogleAvatar({ user }) {
  return (
    <h4 className="avatar">
      {<Avatar src={user.photoURL} />}
      {"\u00A0"} {user?.displayName.match(/.+\s/)}
    </h4>
  );
}
