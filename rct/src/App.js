import React, { Component } from 'react'
import './App.css'

class App extends Component {
  render() {
    return (
      <section id='datarows'></section>
    );
  }

  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }
  componentDidMount() {
    fetch('http://localhost:1337/datas')
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }
}

export default App;
