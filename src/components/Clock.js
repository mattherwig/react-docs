import React from "react";

export default class Clock extends React.Component {

  constructor(props) {
    super(props);
    // this.tick = this.tick.bind(this);
    this.state = {
      date: new Date()
    }
  }

  componentDidMount() {
    this.timerId = setInterval(() => this.tick(), 1);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  handleClick(e) {
    e.preventDefault();
    alert('The link was clicked');
  }

  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <a href="#" onClick={this.handleClick}>Click Me</a>
        <FormattedDate date={this.state.date} />
      </div>
    );
  }
  
}

function FormattedDate(props) {
  return <h2>It is {props.date.toLocaleTimeString()}.</h2>
}