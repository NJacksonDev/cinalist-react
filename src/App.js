import "./App.css";
import { useState } from "react";
import Login from "./components/Login";
import Header from "./components/Header";
import Cards from "./components/Cards";
import Logout from "./components/Logout";
import SearchBar from "./components/Search";
import ToWatch from "./components/ToWatch";
import { InProgress } from "./components/InProgress";
import Watched from "./components/Watched";
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
            <br />
            <SearchBar />
            <ToWatch />
            <InProgress />
            <Watched />
            <br />
            <Cards />
            <Footer />
          </>
        )}
      </div>
    </main>
  );
}
