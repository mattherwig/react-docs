import React from "react";

export default class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '', largeValue: '' }

    this.handleChange = this.handleChange.bind(this);
    this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
    this.setState({ largeValue: e.target.value });
  }

  handleTextAreaChange(e) {
    this.setState({ largeValue: e.target.value });
  }

  handleSubmit(e) {
    alert('This name was submitted: ' + this.state.value);
    this.setState({ value: '' });
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label for="name">Name:</label>
        <input id="name" type="text" value={this.state.value} onChange={this.handleChange} /><br/>
        <label for="essay">Essay:</label>
        <textarea id="essay" value={this.state.largeValue} onChange={this.handleTextAreaChange}/><br/>
        <br/>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}