import { ImageItem, Image } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

export function ImageGalleryItem({ smallPhoto, bigPhoto, id, onClick }) {
  return (
    <ImageItem onClick={onClick}>
      <Image src={smallPhoto} alt={bigPhoto} id={id} />
    </ImageItem>
  );
}

ImageGalleryItem.propTypes = {
  smallPhoto: PropTypes.string.isRequired,
  bigPhoto: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};
