import React, {Component} from 'react';

import Flat from './flat';

class FlatList extends Component {

  render(){
    return(
      <div className="gif-list">

      </div>
    );
  }
}

export default FlatList;


// {this.props.gifs.map(gif => <Gif id={gif.id} key={gif.id} selectGif={this.props.selectGif}/>)}
