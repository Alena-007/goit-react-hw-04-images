import { Component } from 'react';
import { toast } from 'react-toastify';
import {
  SearchbarHeader,
  SearchbarForm,
  SearchbarButton,
  SearchbarInput,
} from './Searchbar.styled';

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
      <SearchbarHeader className="Searchbar">
        <SearchbarForm className="SearchForm" onSubmit={this.handleSubmit}>
          <SearchbarButton type="submit" className="SearchForm__button">
            <span className="SearchForm__button__label">Search</span>
          </SearchbarButton>

          <SearchbarInput
            name="request"
            value={this.state.request}
            className="SearchForm__input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
        </SearchbarForm>
      </SearchbarHeader>
    );
  }
}
