import "./App.css";
import { useState } from "react";
import Login from "./components/Login";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Logout from "./components/Logout";
import SearchBar from "./components/Search";

function App() {
  const [user, setUser] = useState();

  return (
    <main className="App">
      <Header />
      <div className="homepage">
        {!user ? (
          <Login setUser={setUser} />
        ) : (
          <>
            <SearchBar />
            <Homepage />
            <Logout setUser={setUser} />
          </>
        )}
      </div>
    </main>
  );
}

export default App;
