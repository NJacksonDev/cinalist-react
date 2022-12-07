import background from "./component-pics/cyber-city.jpeg";

export default function LandingPage() {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "contain",
        height: 1000,
      }}
    ></div>
  );
}
