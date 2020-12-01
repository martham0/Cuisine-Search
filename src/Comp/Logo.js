import Yelp from './yelp.png';
import './Logo.css';
import Tilt from 'react-tilt';

function Logo({}) {
  return (
    <div>
      <Tilt
        className="Tilt"
        options={{ max: 25 }}
        style={{ height: 150, width: 150 }}
      >
        <img src={Yelp} />
      </Tilt>
    </div>
  );
}

export default Logo;
