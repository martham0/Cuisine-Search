import { Component } from 'react';
import './App.css';
import Logo from './Components/Logo';
import SrchBar from './Components/SrchBar';
import Card from './Components/Card';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_YELP_API_KEY;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
      loading: false,
      cuisine: '',
      status: true,
      rest: [],
      cards: 1,
    };
  }

  cusChange = (event) => {
    this.setState({ cuisine: event.target.value });
  };
  locChange = (event) => {
    this.setState({ location: event.target.value });
  };
  onSelect = (event) => {
    this.setState({ cards: event.target.value });
  };
  onInput = () => {
    this.setState({ loading: true });
    axios
      .get(
        `${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?location=${
          this.state.location
        }`,
        {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
          },
          params: {
            categories: this.state.cuisine,
            limit: this.state.cards,
          },
        }
      )
      .then((res) => {
        this.setState({ rest: res.data.businesses });
        this.setState({ loading: false });
      })
      .catch((err) => {
        this.setState({ status: false });
        console.log('error');
      });
  };

  render() {
    return (
      <div className="App">
        <div>
          <Logo />
        </div>
        <h1 className="f-subheadline ma0"> Cuisine Search</h1>
        <SrchBar
          className="pt0"
          select={this.onSelect}
          cuisine={this.cusChange}
          location={this.locChange}
          input={this.onInput}
          val={this.state.cards}
        />

        {/* Loading */}
        {this.state.loading && <h1>Loading...</h1>}
        <div
          style={{ display: 'flex', justifyContent: 'space-around' }}
          className="pa3 ma2  db"
        >
          {this.state.rest.map((rst) => {
            return (
              <Card
                className="mh2"
                name={rst.name}
                img={rst.image_url}
                rating={rst.rating}
                loc={rst.location.display_address}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
