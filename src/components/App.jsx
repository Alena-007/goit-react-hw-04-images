import { Component } from 'react';
import { fetchImages } from '../API';
import { Searchbar } from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    request: '',
    page: 1,
    loading: false,
    images: [],
    error: null,
    total: null,
  };

  componentDidUpdate(_, prevState) {
    const { request, page } = this.state;

    if (prevState.request !== request || prevState.page !== page) {
      this.setState({ loading: true });
      setTimeout(() => {
        fetchImages(request, page)
          .then(images => {
            this.setState({ total: images.total });
            if (images.total === 0) {
              return alert(
                'Sorry, there are no images matching your search query. Please try again.'
              );
            }

            if (page !== prevState.page && prevState.request === request) {
              this.setState({
                images: [...prevState.images, ...images.hits],
              });
            } else {
              this.setState({
                images: [...images.hits],
              });
            }
          })
          .catch(error => this.setState({ error: error.message }))
          .finally(() => this.setState({ loading: false }));
      }, 500);
    }
  }

  handleFormSubmit = request => {
    this.setState(prevState => {
      if (prevState.request === request) {
        return;
      } else {
        return this.setState({ request, page: 1, images: [] });
      }
    });
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
      </div>
    );
  }
}
