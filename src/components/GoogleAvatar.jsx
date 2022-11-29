import { Avatar } from "antd";

export default function GoogleAvatar({ user }) {
  console.log(user.photoURL);
  return (
    <h3 className="avatar">
      {<Avatar src={user.photoURL} />} {user?.displayName.match(/.+\s/)}
    </h3>
  );
}
