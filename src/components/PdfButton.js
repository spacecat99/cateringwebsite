import React, { useState } from "react";
import Modal from "react-modal";
import "./PdfButton.css"; // Make sure to update or create this CSS file

// Make sure to bind modal to your appElement
Modal.setAppElement("#root");

const ImageButton = ({ buttonText, imagePath }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      {/* Button to open image in Modal */}
      <button onClick={openModal} className="pdf-button">
        {buttonText}
      </button>

      {/* Modal for Image viewer */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        className="pdf-modal"
        overlayClassName="pdf-overlay"
      >
        <div className="modal-content">
          <button onClick={closeModal} className="close-button">
            X
          </button>
          {/* Image viewer */}
          <img
            src={imagePath}
            alt="Modal Content"
            className="image-iframe"
          />
        </div>
      </Modal>
    </>
  );
};

export default ImageButton;
