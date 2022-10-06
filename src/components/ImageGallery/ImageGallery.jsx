import { Component } from 'react';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryList } from './ImageGallery.styled';
import PropTypes from 'prop-types';

export class ImageGallery extends Component {
  state = {
    request: '',
    webformatURL: '',
    largeImageURL: '',
    id: '',
  };

  isOpen = e => {
    this.setState({ largeImageURL: e.target.getAttribute('alt') });
  };

  render() {
    const { images, takeLargeImage } = this.props;
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
  }
}

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
