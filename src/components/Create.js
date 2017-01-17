import React, { Component } from 'react';

const propTypes = {
  title: React.PropTypes.string,
  desc: React.PropTypes.string,
  // titleChange: React.PropTypes.func.isRequired,
  // descChange: React.PropTypes.func.isRequired,
  handleSubmit: React.PropTypes.func.isRequired
};

class Create extends Component {
  render() {

    return (
      <form onSubmit={this.props.handleSubmit}>
        <input
          type="text"
          placeholder="title"
          title={this.props.title}
          onChange={this.props.titleChange}
          //ref={(input) => { this.props.title = input; }}
        />
        <textarea
          rows="20"
          cols="50"
          type="text"
          placeholder="your thoughts"
          value={this.props.desc}
          onChange={this.props.descChange}
          //ref={(input) => { this.props.description = input; }}
        />
        <input
          type="submit"
          value="Post"
        />
      </form>
    );
  }
}

Create.propTypes = propTypes;

export default Create;


