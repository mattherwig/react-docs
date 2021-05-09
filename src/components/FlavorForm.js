import React from "react";

export default class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'coconut',
      history: new Set()
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState(state => ({
      value: e.target.value,
      history: new Set([e.target.value, ...state.history])
    }));
  }

  handleSubmit(e) {
    alert('Your favorite flavor is: ' + this.state.value);
  }

  render() {
    const historyElements = [...this.state.history].map(item => (<li key={item}>{item}</li>));
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Pick your favorite flavor:
          <select value={this.state.value} onChange={this.handleChange}>
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option value="coconut">Coconut</option>
              <option value="mango">Mango</option>
              <option value="apple">Apple</option>
            </select>
          </label>
        </form>
        <div>
          <ul>
            {historyElements}
          </ul>
        </div>
      </div>
    );
  }
}