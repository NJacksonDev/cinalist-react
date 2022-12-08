import GoogleAvatar from "./GoogleAvatar";
import Logout from "./Logout";

export default function Header({ user }, { setUser }) {
  return (
    <>
      <header>
        CinaList
        <div className="header-text">
          <GoogleAvatar user={user} />
          <Logout setUser={setUser} />
        </div>
      </header>
    </>
  );
}
