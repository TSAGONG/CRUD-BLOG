import React, { Component } from 'react';
import { BrowserRouter, Match } from 'react-router';
import axios from 'axios';
import Create from './components/Create';
import Digest from './components/Digest';
//import Edit from './components/Edit';
import Home from './components/Home';
import View from './components/View';
import Header from './components/Header';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      post: '',
      postList: []
  };
}

componentDidMount(){
  this.getRequest();
}

getRequest(){
  const url= 'https://crud-1b909.firebaseio.com/.json';
  axios.get(url)

  .then((response) => {
    console.log(response)
  })
  .catch((error) => {
    //console.log(error)
  })
}

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
            <div className="main">
              <Match exactly pattern="/" component={Home} />
              <Match exactly pattern="/create" component={Create} />
              <Match exactly pattern="/view" component={View} />
              <Match exactly pattern="/digest" component={Digest} />
            </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
