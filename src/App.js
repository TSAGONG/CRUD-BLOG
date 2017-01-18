import React, { Component } from 'react';
import axios from 'axios';
import Create from './components/Create';
import View from './components/View';
import  './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      desc: '',
      views: []
  }

  this.titleChange = this.titleChange.bind(this);
  this.descChange = this.descChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.postRequest = this.postRequest.bind(this);
  this.deleteRequest = this.deleteRequest.bind(this);
  }

  componentDidMount() {
     this.getRequest();
   }

  getRequest(){
  const url= 'https://crud-1b909.firebaseio.com/items/.json';
  axios.get(url)

  .then((response) => {
    //console.log(response);
    const data = response.data;
    let views = [];

    if (data) {
      views = Object.keys(data).map((id) => {
        const view = data[id];
        //console.log(id)
        return {
          id: id,
          postTitle: view.title,
          postDesc: view.desc
        };
      });
    }
      views.reverse();
      this.setState ({ views })
     })

  .catch((error) => {
    //console.log(error)
  })
}

  postRequest() {
    const url= 'https://crud-1b909.firebaseio.com/items.json';
    axios.post(url, {
      title: this.state.title,
      desc: this.state.desc,
    })
    .then(() => {
      this.getRequest();
        this.setState({
          title: '',
          desc: ''
        })
      // clears input so that state are empty strings
      // this.setState({
      //   title: '',
      //   desc: ''
      // })
    })
    .catch((error) => {
      //console.log(error)
    })
  }

deleteRequest(view) {
    const url= `https://crud-1b909.firebaseio.com/items/${view.id}.json`;
    axios.delete(url)
    .then((response) => {
      this.getRequest();
    })
    .catch((error) => {
      console.log(error)
    })

}
  titleChange(e) {
    this.setState({
      title: e.target.value,
    });
   }

  descChange(e) {
    this.setState({
      desc: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.postRequest();
  }

  render() {
    return (
      <div className="App">
        <h1 className="title">Blog</h1>
        <h6 className="subTitle">What's on your mind?</h6>
        <Create
          title={this.props.title}
          desc={this.props.desc}
          //inputValue={this.state.input}
          titleChange={this.titleChange}
          descChange={this.descChange}
          handleSubmit={this.handleSubmit}
        />
        <View
          views={this.state.views}
          deleteRequest={this.deleteRequest}
        />
      </div>
    );
  }
}
export default App;
