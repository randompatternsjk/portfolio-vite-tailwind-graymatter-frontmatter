import React, { useState, useEffect } from 'react';

function Modal({ children, onClose }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    return () => setIsVisible(false);
  }, []);

  return (
    <div
      className={`fixed inset-0 bg-fadedblack/90 backdrop-blur-md duration-300 bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-100 ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={onClose}
    >
      <div
        className={`bg-white dark:bg-white/100 rounded-lg p-6 max-w-6xl w-full relative transform transition-all duration-100 ease-in-out ${
          isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-600 dark:text-gray-500 hover:text-black dark:hover:text-white"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
