import React, { Component } from 'react'

export default class NewsItem extends Component {

  constructor() {
    super();
    console.log('NewsItem constructor');
  }

  render() {
    let {title, description, imageUrl, newsUrl} = this.props;
    return (
      <div className="my-2">
        <div className="card my-2" style={{width: '18rem'}}>
            <img className="card-img-top" src={imageUrl} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href="/" className="btn btn-sm btn-primary">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}
