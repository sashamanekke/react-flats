import React, {Component} from 'react';

class GoogleMap extends Component {
  handleClick = () => {
    if (this.props.selectGif) {
      this.props.selectGif(this.props.id);
    }
  }

  render(){
    return (
      <div></div>
    );
  }
}

export default GoogleMap;
