import { useState } from 'react';
import { toast } from 'react-toastify';
import {
  SearchbarHeader,
  SearchbarForm,
  SearchbarButton,
  SearchbarInput,
} from './Searchbar.styled';
import PropTypes from 'prop-types';

export const Searchbar = ({ onSubmit }) => {
  const [request, setRequest] = useState('');

  const handleChange = e => {
    setRequest(e.target.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (request.trim() === '') {
      return toast('Enter your request in the field');
    }

    onSubmit(request);
  };

  return (
    <SearchbarHeader>
      <SearchbarForm onSubmit={handleSubmit}>
        <SearchbarButton type="submit">
          <span>Search</span>
        </SearchbarButton>

        <SearchbarInput
          name="request"
          value={request}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
        />
      </SearchbarForm>
    </SearchbarHeader>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
