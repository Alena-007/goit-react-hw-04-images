import { useState, useEffect } from 'react';
import { fetchImages } from 'API';
import { Searchbar } from './Searchbar/Searchbar.jsx';
import { ImageGallery } from './ImageGallery/ImageGallery.jsx';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal.jsx';
import { Loader } from './Loader/Loader.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppStyled } from './App.styled';

export const App = () => {
  const [request, setRequest] = useState('');
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState('');
  const [error, setError] = useState(null);
  const [total, setTotal] = useState(null);

  useEffect(() => {
    if (request === '') {
      return;
    }
    setLoading(true);
    fetchImages(request, page)
      .then(images => {
        if (page === 1) {
          setTotal(images.total);
          if (images.total === 0) {
            return toast.error(
              'Sorry, there are no images matching your search query. Please try again.'
            );
          }
          setImages([...images.hits]);
          return;
        }
        setImages(prev => [...prev, ...images.hits]);
      })
      .catch(error => setError(error.message))
      .finally(() => setLoading(false));
  }, [request, page]);

  const onModalOpen = () => setIsOpenModal(true);
  const onModalClose = () => setIsOpenModal(false);

  const takeLargeImage = img => {
    setLargeImageURL(img);
    onModalOpen();
  };

  const handleFormSubmit = searchImage => {
    if (request === searchImage) {
      return;
    } else {
      setRequest(request);
      setPage(1);
      setImages([]);
    }
  };

  const onClick = () => {
    setPage(prev => prev + 1);
    setLoading(true);
  };

  return (
    <AppStyled>
      <Searchbar onSubmit={handleFormSubmit} />
      {error && toast.error(error)}
      {images.length > 0 ? (
        <>
          <ImageGallery
            images={images}
            takeLargeImage={takeLargeImage}
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
        <Modal bigPhoto={largeImageURL} modalClose={onModalClose} />
      )}
      <ToastContainer autoClose={3000} />
    </AppStyled>
  );
};
