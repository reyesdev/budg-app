import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Update } from "./components/update";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initBudgetVal: 600,
      budget: 0,
      byWeek: 0,
      undoBudgetArray: [],
      undoByWeekArray: [],
      value: '',
      hideByWeek: false,
      numArr: [1,5,10,20,50],
      mobileNav: false
    };
  }
  componentWillMount() {
    if (localStorage.getItem("budgetstore") === null) {
      // * is null give it the init val
      this.setState({budget: this.state.initBudgetVal});
    } else {
      // * not null then get the current val
      let storedvalue = localStorage.getItem("budgetstore");
      this.setState({budget: storedvalue});
    }

    let storedWeekValue = localStorage.getItem("byweekstore");
    this.setState({byWeek: storedWeekValue});
    

  }
  
  componentDidMount() {
    let quartBudget = Math.trunc(parseInt(this.state.initBudgetVal / 4));
    if (this.state.budget <= quartBudget) {
      this.setState({hideByWeek: true});
      console.log('hide');
    }
        if (this.state.budget === 0) {
          let newBudget = this.state.initBudgetVal;
          this.setState({budget: newBudget});
        }
        if (this.state.byWeek === 0) {
          let newByWeek = this.state.initBudgetVal / 4;
          this.setState({byWeek: newByWeek});
        }
    console.log('initial:' + this.state.initBudgetVal);
    console.log('budget on mount is:' + this.state.budget);
    if (localStorage.getItem("budgetstore") === null) {
      // * If the budget stored is null give it the init val
      console.log('it\'s null budget is:' + this.state.budget);
    } else {
      // * if it is not null then get the current val
      console.log('it\'s NOT null budget is:' + this.state.budget);
    }
    if (this.state.budget === 0) {
      console.log('budget is 0 so using init budget the new budget is:' + this.state.budget);
    }
    if (this.state.byWeek === 0) {
      console.log('byweek is 0 so using init budget the new byweek budget is:' + this.state.byWeek);
    }

    console.log('component did mount and the byWeek is:' + this.state.byWeek);
  }
  componentDidUpdate() {
    localStorage.setItem('budgetstore', this.state.budget);
    localStorage.setItem('byweekstore', this.state.byWeek);
  }
  handleNav = () => {
    this.setState({mobileNav: !this.state.mobileNav});
  }
  handleUndo = () => {
    this.setState({budget:this.state.undoBudgetArray[this.state.undoBudgetArray.length - 1]});

    this.setState({byWeek:this.state.undoByWeekArray[this.state.undoByWeekArray.length - 1]});  }

  undoBudget = () => {
    let currentBudgetValue = this.state.budget;
    let currentByWeekValue = this.state.byWeek;
    this.setState({
      undoBudgetArray: [...this.state.undoBudgetArray, currentBudgetValue]
    });
    this.setState({
      undoByWeekArray: [...this.state.undoByWeekArray, currentByWeekValue]
    });

  }
  handleMinus = (value) => {
    let currentBudgetValue = this.state.budget;
    this.undoBudget();
    let newvalue = currentBudgetValue - value;
    let quartBudget = Math.trunc(parseInt(this.state.initBudgetVal / 4));

    this.setState({budget: newvalue});

    let newByWeek = this.state.byWeek - value;
    if (newByWeek <= 0) {
      newByWeek = quartBudget;
    }
    
    console.log(newvalue);

    if (newvalue <= quartBudget) {
      this.setState({hideByWeek: true});
      console.log('hide');
    }
    this.setState({byWeek: newByWeek});
  }
  handleReset = () => {
    let quartBudget = Math.trunc(parseInt(this.state.initBudgetVal / 4));

    this.setState({budget: this.state.initBudgetVal});
    localStorage.setItem('budgetstore', this.state.budget);
    
    if (this.state.budget <= quartBudget) {
      this.setState({hideByWeek: true});
      console.log('hide');
    }

    let newByWeek = this.state.initBudgetVal / 4;
    this.setState({byWeek: newByWeek});
    this.setState({hideByWeek: false});
    
  }
  handleChange = (event) => {
    this.setState({value: event.target.value});
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({initBudgetVal: this.state.value});
    this.setState({budget: this.state.value});
    let newByWeek = this.state.value / 4;
    this.setState({byWeek: newByWeek});
    localStorage.setItem('budgetstore', this.state.value);
    
  }

   routeIndex = () => {
    const numArr = [1,5,10,20,50];
    let buttonsMinus = [];

    // ? Create buttons
    for (let i of numArr) {
      buttonsMinus.push(<button key={i} className="btn btn-lg btn-default mb-3" onClick={() => this.handleMinus(i)}>-&nbsp;{i}</button>);
      // buttonsAdd.push(<button key={i} className="btn btn-sl btn-default mb-3" onClick={() => this.handleAdd(i)}>+&nbsp;{i}</button>)
    }
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row">
            <div className="col-7">
              <h2 className={ this.state.hideByWeek ? "display-4 d-none" : "display-4" }>
              {this.state.byWeek}
              </h2>  
            </div>
            <div className="col-4">
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
              <button className="btn btn-sl btn-default mb-3" onClick={() => this.handleUndo()}>Undo</button>
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

  routeSettings = () => {
    return (
      <div className="container-fluid">
        <div className="row mb-0">
          <div className="col-12">
            <h2>Settings</h2>
            <Update change={this.handleChange} value={this.state.value} submit={this.handleSubmit} />
          </div>
        </div>
      </div>

    );
    
  }


  render() {
    

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
            <Route path="/" exact component={this.routeIndex} />
            <Route path="/settings/" exact component={this.routeSettings} />
          </div>
        
        
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
  