import { Component } from 'react';

export class Searchbar extends Component {
  state = {
    request: '',
  };

  handleChange = event => {
    this.setState({ request: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { request } = this.state;
    if (request.trim() === '') {
      return alert('Please, enter your request.');
    }
    this.props.onSubmit(this.state.request);
    this.setState({ request: '' });
  };

  render() {
    return (
      <header className="searchbar">
        <form onSubmit={this.handleSubmit} className="form">
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            value={this.state.request}
            onChange={this.handleChange}
            className="input"
            type="text"
            placeholder="Search images and photos"
            autoComplete="off"
          />
        </form>
      </header>
    );
  }
}
