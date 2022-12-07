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
import SearchList from "./components/SearchList";
import { MessageMovieUpdated } from "./components/MessageMovieUpdated";

export default function App() {
  const [user, setUser] = useState();
  const [isUpdated, setIsUpdated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
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
            <SearchList
              setIsUpdated={setIsUpdated}
              isUpdated={isUpdated}
              setShowAlert={setShowAlert}
              showAlert={showAlert}
            />
            <MessageMovieUpdated />
            <br />
            <br />
            <br />
            <div className="watch-lists">
              <ToWatchList
                user={user}
                isUpdated={isUpdated}
                setIsUpdated={setIsUpdated}
                setShowAlert={setShowAlert}
                showAlert={showAlert}
              />
              <br />
              <InProgressList
                user={user}
                isUpdated={isUpdated}
                setIsUpdated={setIsUpdated}
              />
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
