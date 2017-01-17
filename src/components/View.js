import React, { Component } from 'react';

const propTypes = {
  views: React.PropTypes.array.isRequired
};

class View extends Component {

render() {

let viewList = this.props.views.map((view, i) => {
  console.log(view)
  return (

    <li key={i}>{view.postTitle} {view.postDesc}</li>
      );
    });
    return (
      <ul>
        {viewList}
      </ul>
    );
  }
}
/*
<h2>{view.postTitle}</h2>
<p>{view.post}</p>*/

View.propTypes = propTypes;

export default View;
