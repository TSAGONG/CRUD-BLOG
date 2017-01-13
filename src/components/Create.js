import React, { Component } from 'react';
//import { Link } from 'react-router';

class Create extends Component {
  render() {
    return(
      <div>
        <h1>CREATE</h1>
        <form>
          <input
            type='text'
            id='input-title'
            value=''
          />
          <textarea
            type='text'
            id='input-blog'
            value=''
          />
          <input
            type='submit'
            id='input-submit'
            value='Post'
          />
        </form>
      </div>
      )
  }
}


export default Create;

