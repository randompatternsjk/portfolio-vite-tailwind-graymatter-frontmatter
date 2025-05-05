import React, { useState, useEffect } from "react";

function Modal({ children, onClose }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    return () => setIsVisible(false);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose(); // Call the onClose function when Esc is pressed
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown); // Cleanup the event listener
    };
  }, [onClose]);

  return (
    <div
      className={`bg-fadedblack/90 bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md transition-opacity duration-100 duration-300 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onClick={onClose}
    >
      <div
        className={`relative mx-auto w-full max-w-4xl transform overflow-hidden rounded-lg bg-white px-4 transition-all duration-250 ease-in-out dark:bg-white/100 ${
          isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-3 z-50 size-12 font-bold text-white hover:text-black"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
