import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryList } from './ImageGallery.styled';
import PropTypes from 'prop-types';

export const ImageGallery = ({ images, takeLargeImage }) => {
  return (
    <>
      <ImageGalleryList>
        {images.map(({ webformatURL, largeImageURL, id }) => (
          <li key={id}>
            <ImageGalleryItem
              smallPhoto={webformatURL}
              bigPhoto={largeImageURL}
              onClick={() => takeLargeImage(largeImageURL)}
            />
          </li>
        ))}
      </ImageGalleryList>
    </>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
    })
  ),
  takeLargeImage: PropTypes.func.isRequired,
};
