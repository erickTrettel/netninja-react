import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

class App extends Component {
  state = {
    ninjas: [
      { name: 'Ryu', age: 25, belt: 'black', id: 1 },
      { name: 'Yoshi', age: 30, belt: 'green', id: 2 },
      { name: 'Crystal', age: 20, belt: 'pink', id: 3 }
    ]
  }

  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: ninjas
    });
  }

  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id
    });

    this.setState({
      ninjas: ninjas
    })
  }

  componentDidMount() {
    console.log('component mounted')
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('component updated')
    console.log(prevProps, prevState)
  }

  render() {
    return (
      <div className="App">
        <h1>My first React App</h1>
        <p>Welcome :)</p>
        <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas} />
        <AddNinja addNinja={this.addNinja} />
      </div>
    );
  }

}

export default App;
