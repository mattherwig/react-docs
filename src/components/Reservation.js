import React from "react";

export default class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    }
    this.handleInputChanged = this.handleInputChanged.bind(this);
  }

  handleInputChanged(e) {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div>
        <form>
          <label for="going">Is Going:</label>
          <input
            id="going"
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChanged}
          />
          <br />
          <label for="guests">Number of Guests:</label>
          <input
            id="guests"
            name="numberOfGuests"
            type="text"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChanged}
          />
        </form>
        <p>{String(this.state.isGoing)}</p>
        <p>{this.state.numberOfGuests}</p>
      </div>
    );
  }
}