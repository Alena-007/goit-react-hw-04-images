import { ImageItem, Image } from './ImageGalleryItem.styled';

export function ImageGalleryItem({ smallPhoto, bigPhoto, id, onClick }) {
  return (
    <ImageItem className="ImageGalleryItem" onClick={onClick}>
      <Image
        className="ImageGalleryItem__image"
        src={smallPhoto}
        alt={bigPhoto}
        id={id}
      />
    </ImageItem>
  );
}
