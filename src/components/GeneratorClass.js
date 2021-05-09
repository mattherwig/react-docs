import React from "react";

export default class GeneratorClass extends React.Component {

  constructor(props) {
    super(props);
    this.state = { value: 0 }

    this.tick = this.tick.bind(this);
  }

  tick() {
    this.setState({ value: this.state.value + 1 });
  }

  componentDidMount() {
    setInterval(this.tick, 1);
  }

  render() {
    const datas = [...Array(this.state.value).keys()]
      .map(key => <li key={key}>{key + this.state.value}</li>);
    
    return (
      <div style={{ display: 'flex' }}>
        <ul>{datas}</ul>
        <ul>{datas}</ul>
        <ul>{datas}</ul>
        <ul>{datas}</ul>
        <ul>{datas}</ul>
        <ul>{datas}</ul>
        <ul>{datas}</ul>
        <ul>{datas}</ul>
      </div>
    );
  }

}