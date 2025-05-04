import Modal from "react-modal";
import styles from "./ImageModal.module.css";

function ImageModal({ image, onClose }) {
  return (
    <Modal
      isOpen={!!image}
      onRequestClose={onClose}
      contentLabel="Image modal"
      className={styles.modal}
      overlayClassName={styles.overlay}
      shouldCloseOnOverlayClick={true}
      closeTimeoutMS={300}
    >
      <img
        src={image?.urls?.regular}
        alt={image?.alt_description || "No description"}
        className={styles.image}
      />
    </Modal>
  );
}

export default ImageModal;
