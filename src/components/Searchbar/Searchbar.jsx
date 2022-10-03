import { Component } from 'react';
import { toast } from 'react-toastify';

export class Searchbar extends Component {
  state = {
    request: '',
  };

  handleChange = e => {
    this.setState({ request: e.target.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.request.trim() === '') {
      toast.error('Enter your request in the field');
      return;
    }
    this.props.handleFormSubmit(this.state.request);
    this.setState({ request: '' });
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm__button">
            <span className="SearchForm__button__label">Search</span>
          </button>

          <input
            name="request"
            value={this.state.request}
            className="SearchForm__input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}
