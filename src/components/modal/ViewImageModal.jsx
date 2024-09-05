import React from "react";
import { Modal } from ".";
import Image from "next/image";

const ViewImageModal = ({ isOpen, setIsOpen, src }) => {
  return (
    <Modal isOpen={isOpen} onClose={setIsOpen}>
      <Image
        src={src}
        width={512}
        height={512}
        alt="Loading..."
        className="w-full"
        unoptimized
      />
    </Modal>
  );
};

export default ViewImageModal;
