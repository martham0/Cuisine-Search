import './Card.css';

function Card({ name, img, rating, loc }) {
  return (
    <div className="ba br-pill shadow-5 crd ">
      <div className=" pa5 ">
        <h2 className=" di">{name}</h2>
        <div>
          <img className="h5 mw5" src={img} alt=""></img>
        </div>
        <p>
          <b>Rating: </b>
          {rating}
        </p>
        <p>
          <b>Adress: </b>
          {loc}
        </p>
      </div>
    </div>
  );
}

export default Card;
