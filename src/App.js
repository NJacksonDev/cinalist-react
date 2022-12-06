import "./App.css";
import { useState } from "react";
import Login from "./components/Login";
import Header from "./components/Header";
import Logout from "./components/Logout";
import GoogleAvatar from "./components/GoogleAvatar";
import SearchBar from "./components/SearchBar";
import ToWatchList from "./components/ToWatchList";
import InProgressList from "./components/InProgressList";
import WatchedList from "./components/WatchedList";
import Footer from "./components/Footer";
import Instructions from "./components/Instructions";

export default function App() {
  const [user, setUser] = useState();
  // const [isUpdated, setIsUpdated] = useState(true);
  return (
    <main className="main-flex-container">
      <Header />
      <div>
        {!user ? (
          <Login setUser={setUser} />
        ) : (
          <>
            <GoogleAvatar user={user} />
            <Logout setUser={setUser} />
            <br />
            <Instructions />
            <br />
            <SearchBar user={user} />
            <br />
            <br />
            <br />
            <div className="watch-lists">
              <ToWatchList user={user} />
              <br />
              <InProgressList user={user} />
              <br />
              <WatchedList user={user} />
            </div>
            <br />
            <Footer />
          </>
        )}
      </div>
    </main>
  );
}
