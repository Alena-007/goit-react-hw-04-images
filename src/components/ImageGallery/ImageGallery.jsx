import { Component } from 'react';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryList } from './ImageGallery.styled';

export class ImageGallery extends Component {
  state = {
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
        <ImageGalleryList className="ImageGallery">
          {images.map(({ webformatURL, largeImageURL, id }) => (
            <ImageGalleryItem
              smallPhoto={webformatURL}
              bigPhoto={largeImageURL}
              key={id}
              onClick={() => takeLargeImage(largeImageURL)}
            />
          ))}
        </ImageGalleryList>
      </>
    );
  }
}
