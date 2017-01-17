import React, { Component } from 'react';
import axios from 'axios';
import Create from './components/Create';
import View from './components/View';

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
  }

  componentDidMount() {
     this.getRequest();
   }

/*  getRequest() {
    axios({
      method :"get",
      url: "https://crud-1b909.firebaseio.com/items/.json",
      //baseURL: "https://crud-1b909.firebaseio.com/",

    })
    .then((response) => {
      //console.log(response);
    })
    .catch((error) => {
      console.log(error);
    })
  }*/

  getRequest(){
  const url= 'https://crud-1b909.firebaseio.com/items/.json';
  axios.get(url)

  .then((response) => {
    console.log(response);

    const data = response.data;

    let views = [];

    if (data) {
      views = Object.keys(data).map((id) => {
        const view = data[id];

        console.log(id)
        return {
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

    // axios({
    //   method :"post",
    //   url: "https://crud-1b909.firebaseio.com/items/.json",
    //   //baseURL: "https://crud-1b909.firebaseio.com/",
    //   data: newData
    // })
    // .then((response) => {
    //   this.getRequest();
    //   //console.log(response);
    // })
    // .catch((error) => {
    //   console.log(error);
    // })


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
        <h1>Blog</h1>
        <h3>What's on your mind?</h3>
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
        />
      </div>
    );
  }
}
export default App;
