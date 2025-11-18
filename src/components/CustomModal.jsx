import React from "react";

const CustomModal = ({ open, onClose, children }) => {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm animate-fadeIn z-[999]"
      onClick={onClose} // click outside to close
    >
      <div
        className="bg-white rounded-xl shadow-xl p-6 w-[90%] max-w-md animate-scaleIn"
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking content
      >
        {children}
      </div>
    </div>
  );
};

export default CustomModal;
