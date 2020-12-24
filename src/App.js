import { Component } from 'react';
import './App.css';
import Logo from './Comp/Logo';
import SrchBar from './Comp/SrchBar';
import Card from './Comp/Card';
import axios from 'axios';

let apikey =
  'KLG6QQkitXNamc3kjNBlFWyTF0GKg-RojWfJyRYyqrRf_Uddar5TGZLbXlvqEc7YsWu7yGgYwN5_W4KUT0lNbqmg-zoN_9eRKtm4EgVNS6HJF866VH7A_U-vB9G2X3Yx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',

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
    axios
      .get(
        `${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?location=${
          this.state.location
        }`,
        {
          headers: {
            Authorization: `Bearer ${apikey}`,
          },
          params: {
            categories: this.state.cuisine,
          },
        }
      )
      .then((res) => {
        this.setState({ rest: res.data.businesses.slice(0, this.state.cards) });
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
