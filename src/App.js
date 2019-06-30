import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      budget: 600,
      value: '',
      numArr: [1,5,10,20,50],
      mobileNav: false
    };
  }
  componentDidMount() {
    if (localStorage.getItem("budgetstore") === null) {
      this.setState({budget: this.state.budget});
    } else {
     let storedvalue = localStorage.getItem("budgetstore");
     this.setState({budget: storedvalue});
    }
  }
  componentDidUpdate() {
    localStorage.setItem('budgetstore', this.state.budget);
  }
  handleNav = () => {
    this.setState({mobileNav: !this.state.mobileNav});
  }
  handleMinus = (value) => {
    let newvalue = this.state.budget - value;
    this.setState({budget: newvalue});
  }
  handleAdd = (value) => {
    let newvalue = this.state.budget + value;
    this.setState({budget: newvalue});
  }
  handleReset = () => {
    this.setState({budget: 600});
    localStorage.setItem('budgetstore', this.state.budget);
  }
  handleChange = (event) => {
    this.setState({value: event.target.value});
  }
  handleSubmit = (event) => {
    this.setState({budget: this.state.value});
    localStorage.setItem('budgetstore', this.state.value);
    event.preventDefault();
  }

  render() {
    // const numArr = [1,5,10,20,50];
    let buttonsMinus = [];
    let buttonsAdd = [];

    // ? Create buttons
    for (let i of this.state.numArr) {
      buttonsMinus.push(<button key={i} className="btn btn-lg btn-default mb-3" onClick={() => this.handleMinus(i)}>-&nbsp;{i}</button>);
      buttonsAdd.push(<button key={i} className="btn btn-sl btn-default mb-3" onClick={() => this.handleAdd(i)}>+&nbsp;{i}</button>)
    }

    const routeIndex = () => {
      return (
        <React.Fragment>
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <h2 className="display-4">
                {this.state.budget}
                </h2>  
              </div>
            </div>
            <div className="row">
              <div className="col-6 d-flex flex-column">
                {buttonsMinus}
              </div>
              <div className="col-6 d-flex flex-column">
                {buttonsAdd}
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <button className="btn btn-sl btn-default mb-3" onClick={() => this.handleReset()}>Reset</button>
              </div>
            </div>
          </div>   
        </React.Fragment>  
      );
    }

    const routeSettings = () => {
      return (
        <div className="container-fluid">
          <div className="row mb-0">
            <div className="col-12">
              <h2>Settings</h2>
              <form key={this.state.value.toString()} onSubmit={this.handleSubmit}>
                <h3>Update budget.</h3>
                <p>Manually update your budget below:</p>
                <input  type='text' value={this.state.value} onChange={this.handleChange} />
                <input type="submit" value="Submit" />
              </form>
            </div>
          </div>
        </div>

      );
      
    }

    return (
      <React.Fragment>
        <Router>
          <div>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
              <a href="/" className="navbar-brand">BudgApp</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation" onClick={ this.handleNav } >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className={ this.state.mobileNav ? "collapse navbar-collapse show" : "collapse navbar-collapse" } id="navbarCollapse">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <Link to="/" className="nav-link">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/settings/" className="nav-link">Settings</Link>
                  </li>
                </ul>
              </div>
              
            </nav>
            <Route path="/" exact component={routeIndex} />
            <Route path="/settings/" component={routeSettings} />
          </div>
        
        
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
  