import React, { Component } from 'react';

const propTypes = {
  views: React.PropTypes.array.isRequired
};

class View extends Component {

render() {

let viewList = this.props.views.map((view, i) => {
  console.log(view)
  return (

    <li key={i}>
      <h6>{view.postTitle}</h6><br/>
      <p>{view.postDesc}</p>
      <button
        className="btn btn-primary btn-xs">Edit</button>
      <button
        className="btn btn-primary btn-xs"
        onClick={()=> this.props.deleteRequest(view)}>Delete</button>
    </li>
      );
    });
    return (
       <div className="new-todo-box pb-2">
        <ul>
          {viewList}
        </ul>
      </div>
    );
  }
}


View.propTypes = propTypes;

export default View;
