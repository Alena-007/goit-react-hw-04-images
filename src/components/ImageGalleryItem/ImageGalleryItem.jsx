export function ImageGalleryItem({ smallPhoto, bigPhoto, id, onClick }) {
  return (
    <li className="ImageGalleryItem" onClick={onClick}>
      <img
        className="ImageGalleryItem__image"
        src={smallPhoto}
        alt={bigPhoto}
        id={id}
      />
    </li>
  );
}
