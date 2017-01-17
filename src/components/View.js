import React, { Component } from 'react';

class TweedrFeed extends Component {

render() {

let tweedList = this.props.tweeds.map((tweed, i) => {
  return (
    <li key={i}>{tweed.post}
      <button>E</button>
      <button>{/* onClick{() => this.props.deleteTweed}*/}X</button>

    </li>
      );
    });
    return (
      <ul>
      {tweedList}
      </ul>
    );
  }
}


const propTypes = {
  tweeds: React.PropTypes.array.isRequired
/*  deleteTweed: React.PropTypes.func.isRequired
*/};

TweedrFeed.propTypes = propTypes;

export default TweedrFeed;
