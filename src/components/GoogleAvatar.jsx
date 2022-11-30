import { Avatar } from "antd";

export default function GoogleAvatar({ user }) {
  console.log(user.photoURL);
  return (
    <h4 className="avatar">
      {<Avatar src={user.photoURL} />} {"\u00A0"}{" "}
      {user?.displayName.match(/.+\s/)}
    </h4>
  );
}
