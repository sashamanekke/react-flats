import React, {Component} from 'react';

class Flat extends Component {
  handleClick = () => {
    this.props.selectFlat(this.props.index);
  }

  render(){
    const {name, imageUrl, price, priceCurrency, lat, lng} = this.props.flat;
    const backgroundStyle = {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${imageUrl})`
    };
    return (
      <div className={`card${this.props.selected ? ' active' : ''}`} style={backgroundStyle} onClick={this.handleClick}>
        <div className="card-category">{price} {priceCurrency}</div>
        <div className="card-description">
          <h2>{name}</h2>
        </div>
        <a className="card-link" href="#" onClick={this.handleClick}></a>
      </div>
    );
  }
}

export default Flat;
