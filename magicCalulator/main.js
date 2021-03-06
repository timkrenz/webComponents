import React from 'react';
import ReactDOM from 'react-dom'
import reactToWebComponent from 'react-to-webcomponent';

class MagicCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {    this.setState({value: event.target.value});  }
  handleSubmit(event) {
    alert(this.state.value + ' + 0 = ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          This is a MagicCalculator. It calculates magic. 
          <input type="text" value={this.state.value} onChange={this.handleChange} />        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
customElements.define('magic-calculator', reactToWebComponent(MagicCalculator, React, ReactDOM));