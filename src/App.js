import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      budget: 600,
      numArr: [1,5,10,20,50],
      btnMinus: []
    };
  }
  handleMinus = (value) => {
    let newvalue = this.state.budget - value;
    this.setState({budget: newvalue});
  }
  handleAdd = (value) => {
    let newvalue = this.state.budget + value;
    this.setState({budget: newvalue});
  }
  render() {
    const numArr = [1,5,10,20,50];
    let buttonsMinus = [];
    let buttonsAdd = [];

    // ? Create buttons
    for (let i of numArr) {
      buttonsMinus.push(<button key={i} onClick={() => this.handleMinus(i)}>-&nbsp;{i}</button>);
      buttonsAdd.push(<button key={i} onClick={() => this.handleAdd(i)}>+&nbsp;{i}</button>)
    }
    return (
      <React.Fragment>
        {this.state.budget}<br />
        {buttonsMinus}<br />
        {buttonsAdd}
      </React.Fragment>
    );
  }
}

export default App;
  