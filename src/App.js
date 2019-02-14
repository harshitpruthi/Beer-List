import React, { Component } from 'react';
import Table from './components/Table.js';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        beers: []
      };
  }

  componentDidMount() {
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    targetUrl = 'http://starlord.hackerearth.com/beercraft'
    fetch(proxyUrl + targetUrl)
      .then((res) => res.json())
      .then(
        (result) => {
      console.log(result);
          this.setState({
            isLoaded: true,
            beers: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { beers, error, isLoaded } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
      } 
    if (!isLoaded) {
      return <div>Loading...</div>;
      } 
    return(
      <div>
        <Table beers = { beers }/>
      </div>
    );  
  }
}

export default (App);
