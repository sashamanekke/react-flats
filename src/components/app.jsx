import React, { Component } from 'react';

import FlatList from './flat-list';
import GoogleMap from './googleMap';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      //gifs: [],
      //selectedGifId: "xT9IgDEI1iZyb2wqo8"
    };
  }

  search = (query) => {
    giphy({ apiKey: GIPHY_API_KEY, https: true })
      .search ({
        q: query,
        rating: 'g',
        limit: 10
      }, (err, result) => {
        this.setState({
          gifs: result.data
        });
      });
  }

  selectGif = (id) => {
    this.setState({
      selectedGifId: id
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <FlatList/>
        </div>
        <div className="right-scene">
          <GoogleMap/>
        </div>
      </div>
    );
  }
}

export default App;
