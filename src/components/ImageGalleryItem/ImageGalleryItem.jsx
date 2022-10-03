import { ImageItem, Image } from './ImageGalleryItem.styled';

export function ImageGalleryItem({ smallPhoto, bigPhoto, id, onClick }) {
  return (
    <ImageItem onClick={onClick}>
      <Image src={smallPhoto} alt={bigPhoto} id={id} />
    </ImageItem>
  );
}
