import "./App.css";
import { useState } from "react";
import Login from "./components/Login";
import LandingPage from "./components/LandingPage";
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
  const [isUpdated, setIsUpdated] = useState(false);
  const [showAlertUpdated, setShowAlertUpdated] = useState(false);
  const [showAlertAdded, setShowAlertAdded] = useState(false);
  return (
    <main className="main-flex-container">
      <div>
        {!user ? (
          <>
            <LandingPage />
            <Login setUser={setUser} />
          </>
        ) : (
          <>
            <div className="main-flex-container">
              <GoogleAvatar user={user} />
              <Logout setUser={setUser} />
              <br />
              <Instructions />
              <br />
              <SearchBar
                user={user}
                setIsUpdated={setIsUpdated}
                isUpdated={isUpdated}
                setShowAlertAdded={setShowAlertAdded}
                showAlertAdded={showAlertAdded}
              />
              <br />
              <br />
              <br />
              <div className="watch-lists">
                <ToWatchList
                  user={user}
                  isUpdated={isUpdated}
                  setIsUpdated={setIsUpdated}
                  setShowAlertUpdated={setShowAlertUpdated}
                  showAlertUpdated={showAlertUpdated}
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
            </div>
          </>
        )}
      </div>
    </main>
  );
}
