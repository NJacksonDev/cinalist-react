import "./Instructions.css";

export default function Instructions() {
  return (
    <div className="instructions">
      <h3 className="instructions-title">
        Build your own movie collection. Fast.
      </h3>
      <br />
      <div className="instructions-content">
        <h4>
          Step 1: Search for a particular movie by title using the search bar
          below.
        </h4>
        <h4>
          Step 2: Add that movie to one of three categories: To Watch, In
          Progress or Watched.
        </h4>
        <h4>
          Step 3: Modify your list as needed by removing a movie or moving it to
          a different category.
        </h4>
      </div>
    </div>
  );
}
