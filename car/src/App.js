import React, { Component } from 'react';

class Car extends Component {
  constructor(props) {
    super(props);
    this.state = {
      model: props.model,
      color: props.color
    };
  }

  render() {
    return (
      <div>
        <h2>Car Model: {this.state.model}</h2>
        <p>Color: {this.state.color}</p>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <h1>Cars Collection</h1>
        <Car model="Tesla Model S" color="Red" />
        <Car model="Toyota Camry" color="Blue" />
        <Car model="BMW X5" color="Black" />
        <Car model="Mahindra Thar" color="Black" />
        <Car model="Jimny" color="Yellow" />
      </div>
    );
  }
}

export default App;
