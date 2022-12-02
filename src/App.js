import "./App.css";
import { useState } from "react";
import Login from "./components/Login";
import Header from "./components/Header";
import Cards from "./components/Cards";
import Logout from "./components/Logout";
import GoogleAvatar from "./components/GoogleAvatar";
import SearchBar from "./components/SearchBar";
import ToWatchButton from "./components/ToWatchButton";
import InProgressButton from "./components/InProgressButton";
import WatchedButton from "./components/WatchedButton";
import Footer from "./components/Footer";

export default function App() {
  const [user, setUser] = useState();

  return (
    <main className="main-flex-container">
      <Header />
      <div>
        {!user ? (
          <Login setUser={setUser} />
        ) : (
          <>
            <Logout setUser={setUser} />
            <GoogleAvatar user={user} />
            <br />
            <SearchBar user={user} />
            <br />
            <br />
            <br />
            <ToWatchButton user={user} />
            <br />
            <br />
            <br />
            <InProgressButton />
            <br />
            <br />
            <br />
            <WatchedButton />
            <br />
            <br />
            <br />
            <Cards />
            <Footer />
          </>
        )}
      </div>
    </main>
  );
}
