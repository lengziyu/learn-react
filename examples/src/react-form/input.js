import React, { Component } from 'react';

export default class FormInput extends Component {
 constructor (props) {
   super(props);
   this.state = {
     theValue: '12'
   }
 }

  handleClick(e){
    console.log(this.refs.myInput.value);
    this.setState = ({
      theValue: this.refs.myInput.value
    })
  }

  render() {
    const val = this.state.theValue;
    return (
      <div>
        <input type="text" ref="myInput" name="name" defaultValue={val} onChange={this.handleClick.bind(this)} />
      </div>
    );
  }
}
