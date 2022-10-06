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
    error: null,
    total: null,
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
            this.setState({ total: images.total });
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

  onClick = () => {
    this.setState(prevState => ({
      ...prevState,
      page: prevState.page + 1,
    }));
  };

  render() {
    const { images, isOpenModal, largeImageURL, loading, error, total } =
      this.state;
    const { handleFormSubmit, onClick } = this;
    return (
      <AppStyled>
        <Searchbar onSubmit={handleFormSubmit} />
        {error && toast.error(error)}
        {images.length > 0 ? (
          <>
            <ImageGallery
              images={images}
              takeLargeImage={this.takeLargeImage}
            ></ImageGallery>
            {loading ? (
              <Loader />
            ) : (
              total !== images.length && <Button onClick={onClick} />
            )}
          </>
        ) : (
          <>{loading && <Loader />}</>
        )}
        {isOpenModal && (
          <Modal bigPhoto={largeImageURL} modalClose={this.onModalClose} />
        )}
        <ToastContainer autoClose={3000} />
      </AppStyled>
    );
  }
}
