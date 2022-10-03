import { Component } from 'react';
import { toast } from 'react-toastify';
import {
  SearchbarHeader,
  SearchbarForm,
  SearchbarButton,
  SearchbarInput,
} from './Searchbar.styled';
import PropTypes from 'prop-types';

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
      <SearchbarHeader>
        <SearchbarForm onSubmit={this.handleSubmit}>
          <SearchbarButton type="submit">
            <span>Search</span>
          </SearchbarButton>

          <SearchbarInput
            name="request"
            value={this.state.request}
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

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
