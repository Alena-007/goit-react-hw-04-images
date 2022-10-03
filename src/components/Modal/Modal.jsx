import { Component } from 'react';
import { Overlay, ModalBox } from './Modal.styled';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onEscPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onEscPress);
  }

  handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.modalClose();
    }
  };

  onEscPress = e => {
    if (e.code === 'Escape') {
      this.props.modalClose();
    }
  };

  render() {
    return (
      <Overlay className="Overlay" onClick={this.handleBackdropClick}>
        <ModalBox className="Modal">
          <img src={this.props.bigPhoto} alt="" />
        </ModalBox>
      </Overlay>
    );
  }
}
