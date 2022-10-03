import { ButtonLoadMore } from './Button.styled';

export function Button({ onClick }) {
  return (
    <ButtonLoadMore type="button" onClick={onClick}>
      Load more
    </ButtonLoadMore>
  );
}
