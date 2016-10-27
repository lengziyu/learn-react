import React,{ Component } from 'react';

export default class Title extends React.Component {
  render(){
    const title = this.props.title;
    return(<div>

      <h3>{title}</h3>  
      </div>
    )
  }
}
