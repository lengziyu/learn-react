import React,{ Component } from 'react';

export default class FormSelect extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      names: ["Tom","Axiba","daomul"],
      selectName:'Tom'
    }
  }

  handleSelect(event){
    this.setState({
      selectName : event.target.value
    });
  }

  render(){
    var options = [];
    //往options中添加子option
    for (var option in this.state.names) {
        options.push(<option key={this.state.names[option]} value={this.state.names[option]}> {this.state.names[option]}  </option>)
    };
    return (
      <div>
        <p>你选中了：{this.state.selectName}</p>
        <select onChange={this.handleSelect.bind(this)}>
            {options}
        </select>
      </div>
    )
  }
}
