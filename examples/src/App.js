import React, { Component } from 'react'
import Title from './Title'
// form
import FormSelect from './react-form/select'
import FormInput from './react-form/input'


export default class App extends Component {
  render() {
    return (
      <div>
        <Title title="FormSelect" />
        <FormSelect />
        <Title title="FormInput" />
        <FormInput />
      </div>
    );
  }
}
