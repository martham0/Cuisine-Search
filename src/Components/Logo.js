import res from '../Img/food-store.png';
import './Logo.css';
import Tilt from 'react-tilt';

function Logo({}) {
  return (
    <div className="pa0">
      <Tilt
        className="Tilt"
        options={{ max: 25 }}
        style={{ height: 90, width: 90 }}
      >
        <img src={res} />
      </Tilt>
    </div>
  );
}

export default Logo;
