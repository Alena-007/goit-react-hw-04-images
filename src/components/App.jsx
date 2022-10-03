import { Component } from 'react';
import { fetchImages } from 'API';
import { Searchbar } from './Searchbar/Searchbar.jsx';
import { ImageGallery } from './ImageGallery/ImageGallery.jsx';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal.jsx';
import { Loader } from './Loader/Loader.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppStyled } from './App.styled';

export class App extends Component {
  state = {
    request: '',
    images: [],
    loading: false,
    page: 1,
    isOpenModal: false,
    largeImageURL: '',
  };

  onModalOpen = () => this.setState({ isOpenModal: true });
  onModalClose = () => this.setState({ isOpenModal: false });

  takeLargeImage = img => {
    this.setState({ largeImageURL: img });
    this.onModalOpen();
  };

  componentDidUpdate(_, prevState) {
    const { request, page } = this.state;

    if (prevState.request !== request || prevState.page !== page) {
      this.setState({ loading: true });
      setTimeout(() => {
        fetchImages(request, page)
          .then(images => {
            if (images.total === 0) {
              return toast.error(
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
              toast.success(`Hooray! We found ${images.total} images.`);
            }
          })
          .catch(error => this.setState({ error: error.message }))
          .finally(() => this.setState({ loading: false }));
      }, 300);
    }
  }

  handleFormSubmit = request => {
    this.setState(prevState => ({
      ...prevState,
      request: request,
      page: 1,
      images: [],
    }));
  };

  onClick = () => {
    this.setState(prevState => ({
      ...prevState,
      page: prevState.page + 1,
    }));
  };

  render() {
    const { images, isOpenModal, largeImageURL, loading } = this.state;
    const { handleFormSubmit, onClick } = this;
    return (
      <AppStyled>
        <Searchbar handleFormSubmit={handleFormSubmit} />
        <ImageGallery images={images} takeLargeImage={this.takeLargeImage} />
        {images.length >= 12 && <Button onClick={onClick} />}
        {isOpenModal && (
          <Modal bigPhoto={largeImageURL} modalClose={this.onModalClose} />
        )}
        {loading && <Loader />}
        <ToastContainer autoClose={3000} />
      </AppStyled>
    );
  }
}
