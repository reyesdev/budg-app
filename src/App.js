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
      buttonsMinus.push(<button key={i} className="btn btn-lg btn-default mb-3" onClick={() => this.handleMinus(i)}>-&nbsp;{i}</button>);
      buttonsAdd.push(<button key={i} className="btn btn-sl btn-default mb-3" onClick={() => this.handleAdd(i)}>+&nbsp;{i}</button>)
    }
    return (
      <React.Fragment>
        <div class="container-fluid">
          <h1>Budget</h1>
          <h2 class="display-4">
          {this.state.budget}
          </h2>
          <div class="row">
            <div class="col-6 d-flex flex-column">
              {buttonsMinus}
            </div>
            <div class="col-6 d-flex flex-column">
              {buttonsAdd}
            </div>
          </div>
        </div>   
      </React.Fragment>
    );
  }
}

export default App;
  