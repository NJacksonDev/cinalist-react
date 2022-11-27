import Winter from "../card-images/Winter.jpg";
import Spring from "../card-images/Spring.jpg";
import Fall from "../card-images/Fall.jpg";
import Summer from "../card-images/Summer.jpg";

export default function Cards() {
  return (
    <div>
      <h3>Create your personalized movie collection!</h3>
      <br />
      <br />
      <div className="content-container">
        <div className="card-container">
          <h4>Step 1</h4>
          <br />
          <img src={Winter}></img>
          <br />
          <p>
            Search for a particular movie by title using the search bar above.
          </p>
        </div>
        <div className="card-container">
          <h4>Step 2 </h4>
          <br />
          <img src={Spring}></img>
          <br />
          <p>
            Add that movie to one of three categories: To Watch, In Progress or
            Watched.
          </p>
        </div>
        <div className="card-container">
          <h4> Step 3 </h4>
          <br />
          <img src={Fall}></img>
          <br />
          <p>
            Modify your list as needed by removing a movie or moving it to a
            different category.
          </p>
        </div>
        <div className="card-container">
          <h4> Step 4 </h4>
          <br />
          <img src={Summer}></img>
          <br />
          <p>Enjoy having an organized list of movies at your fingertips!</p>
        </div>
      </div>
    </div>
  );
}
