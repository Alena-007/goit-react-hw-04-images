import { ImageItem, Image } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ smallPhoto, bigPhoto, id, onClick }) => {
  return (
    <ImageItem onClick={onClick}>
      <Image src={smallPhoto} alt={bigPhoto} id={id} />
    </ImageItem>
  );
};

ImageGalleryItem.propTypes = {
  smallPhoto: PropTypes.string,
  bigPhoto: PropTypes.string,
  id: PropTypes.number,
};
