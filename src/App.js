import { Component } from 'react';
import './App.css';
import Logo from './Comp/Logo';
import Navi from './Comp/Navi';
import HomePg from './Comp/HomePg';
import SrchBar from './Comp/SrchBar';
import Card from './Comp/Card';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
      cuisine: '',
      route: 'home',
      res: [],
    };
  }
  render() {
    return (
      <div className="App">
        <Logo />
        <Navi />
        <h1> Yelp</h1>
        <HomePg />
        <SrchBar />
        <div className="card">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    );
  }
}

export default App;
