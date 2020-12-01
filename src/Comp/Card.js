import rest from './food-store.png';
import sun from './sun.png';
import './Card.css';

function Card({ name, img, rating, loc }) {
  return (
    <div className="ba br-pill shadow-5 crd">
      <div className="bg-light-gray shadow-5">
        <h2>{name}</h2>
        <img className="mw4 h-auto " src={img} alt=""></img>
        <div>{}</div>

        <p>
          <b>Adress: </b>
          {loc}
        </p>
      </div>
    </div>
  );
}

export default Card;
