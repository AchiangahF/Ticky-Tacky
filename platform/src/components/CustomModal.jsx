import React from "react";
import "../styles/customModal.css";

const CustomModal = ({ show, onClose, children }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content p-4 rounded">
        
        {/* Close button */}
        <button 
          className="btn btn-danger mb-3"
          onClick={onClose}
        >
          Close
        </button>

        {/* Content passed from parent */}
        {children}
      </div>
    </div>
  );
};

export default CustomModal;