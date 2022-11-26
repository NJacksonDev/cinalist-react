import "./App.css";
import { useState } from "react";
import Login from "./components/Login";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Logout from "./components/Logout";
import SearchBar from "./components/Search";
import ToWatch from "./components/ToWatch";
import InProgress from "./components/InProgress";
import Watched from "./components/Watched";

function App() {
  const [user, setUser] = useState();

  return (
    <main className="App">
      <Header />
      <div>
        {!user ? (
          <Login setUser={setUser} />
        ) : (
          <>
            <div>
              <Logout setUser={setUser} />
              <br />
              <Homepage />
              <SearchBar />
            </div>
            <br />
            <ToWatch />
            <InProgress />
            <Watched />
          </>
        )}
      </div>
    </main>
  );
}

export default App;
