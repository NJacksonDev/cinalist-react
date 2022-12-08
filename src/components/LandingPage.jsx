import Login from "./Login";

export default function LandingPage({ setUser }) {
  return (
    <div className="landing-page-container">
      <div className="landing-page-text-container">
        <p>CinaList</p>
        <br />
        <p>Build your personalized movie collection. Fast.</p>
        <br />
        <Login setUser={setUser} />
      </div>
    </div>
  );
}
