import "./App.css";
import { useState, useEffect } from "react";
import LandingPage from "./components/LandingPage";
import SearchBar from "./components/SearchBar";
import ToWatchList from "./components/ToWatchList";
import InProgressList from "./components/InProgressList";
import WatchedList from "./components/WatchedList";
import Footer from "./components/Footer";
import Instructions from "./components/Instructions";
import Header from "./components/Header";
import GoogleAvatar from "./components/GoogleAvatar";
import Logout from "./components/Logout";
import AlertMovieWatchStatusDeleted from "./components/AlertMovieDeleted";
import AlertMovieWatchStatusUpdated from "./components/AlertMovieUpdated";

export default function App() {
  const [user, setUser] = useState();
  const [isUpdated, setIsUpdated] = useState(false);
  const [showAlertDeleted, setShowAlertDeleted] = useState(false);
  const [showAlertUpdated, setShowAlertUpdated] = useState(false);
  const [showAlertAdded, setShowAlertAdded] = useState(false);
  useEffect(() => {
    const _user = JSON.parse(localStorage.getItem("user"));
    if (_user !== "") {
      setUser(_user);
    }
  }, []);
  return (
    <main className="main-flex-container">
      {showAlertUpdated && (
        <AlertMovieWatchStatusUpdated
          showAlertUpdated={showAlertUpdated}
          setShowAlertUpdated={setShowAlertUpdated}
        />
      )}
      {showAlertDeleted && (
        <AlertMovieWatchStatusDeleted
          showAlertDeleted={showAlertDeleted}
          setShowAlertDeleted={setShowAlertDeleted}
        />
      )}
      <div>
        {!user ? (
          <LandingPage setUser={setUser} />
        ) : (
          <div className="main-flex-container">
            <Header />
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
                showAlertDeleted={showAlertDeleted}
                setShowAlertDeleted={setShowAlertDeleted}
              />
              <br />
              <InProgressList
                user={user}
                isUpdated={isUpdated}
                setIsUpdated={setIsUpdated}
                setShowAlertUpdated={setShowAlertUpdated}
                showAlertUpdated={showAlertUpdated}
                showAlertDeleted={showAlertDeleted}
                setShowAlertDeleted={setShowAlertDeleted}
              />
              <br />
              <WatchedList
                user={user}
                isUpdated={isUpdated}
                setIsUpdated={setIsUpdated}
                showAlertDeleted={showAlertDeleted}
                setShowAlertDeleted={setShowAlertDeleted}
                showAlertUpdated={showAlertUpdated}
                setShowAlertUpdated={setShowAlertUpdated}
              />
            </div>
            <br />
            <Footer />
          </div>
        )}
      </div>
    </main>
  );
}
