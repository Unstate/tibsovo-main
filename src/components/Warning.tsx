import { useState, useEffect } from 'react'
import logoWhite from '../assets/logo-white.svg'

interface WarningProps {
  imageUrl?: string;
  imageAlt?: string;
  isOpen?: boolean;
  onClose?: () => void;
  onConfirm?: () => void;
}

const WARNING_STORAGE_KEY = 'warningConfirmed';

function Warning({ imageUrl, imageAlt = "Предупреждение", isOpen: controlledIsOpen, onClose, onConfirm }: WarningProps) {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  
  // Check localStorage on mount
  useEffect(() => {
    if (controlledIsOpen !== undefined) {
      // If controlled, use controlled state
      return;
    }
    
    const savedChoice = localStorage.getItem(WARNING_STORAGE_KEY);
    // Show modal if no choice saved or if user previously chose "No"
    // Don't show if user previously chose "Yes"
    if (savedChoice !== 'yes') {
      setInternalIsOpen(true);
    }
  }, [controlledIsOpen]);
  
  // Use controlled state if provided, otherwise use internal state
  const isOpen = controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen;
  const setIsOpen = onClose ? () => onClose() : setInternalIsOpen;

  const handleNo = () => {
    // Save "no" to localStorage, but still show on next page load
    sessionStorage.setItem(WARNING_STORAGE_KEY, "no");
    setIsOpen(false);
  };

  const handleYes = () => {
    // Save "yes" to localStorage, don't show again
    sessionStorage.setItem(WARNING_STORAGE_KEY, "yes");
    setIsOpen(false);
    if (onConfirm) {
      onConfirm();
    }
  };

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, setIsOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Full Screen Modal */}
      <div 
        className="fixed inset-0 z-[90] flex items-center justify-center"
        style={{
          backgroundColor: "rgba(36, 34, 106, 0.8)",
        }}
        onClick={() => setIsOpen(false)}
      >
        {/* White Modal Content */}
        <div 
          className="relative bg-[#F7F7FD] flex flex-col items-stretch justify-start rounded-2xl px-5 md:px-12 py-12 md:py-12"
          style={{
            maxWidth: "500px",
            width: "90vw",
            fontFamily: "Geist, -apple-system, Roboto, Helvetica, sans-serif",
            fontSize: "16px",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute right-4 top-4 w-8 h-8 flex items-center justify-center cursor-pointer opacity-70 hover:opacity-100 transition-opacity z-10"
            aria-label="Закрыть"
          >
            <svg 
              width="26" 
              height="26" 
              viewBox="0 0 26 26" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M5.5 5.5L20.5 20.5" 
                stroke="#151518" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
              <path 
                d="M20.5 5.5L5.5 20.5" 
                stroke="#151518" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Content Container */}
          <div className="w-full flex flex-col items-stretch text-[#151518] leading-[22px]">
            {/* Logo/Image */}
            <div className="relative flex items-start">
              <img
                src={imageUrl || logoWhite}
                alt={imageAlt}
                className="h-auto object-contain"
                style={{
                  width: "184px",
                  maxWidth: "100%",
                }}
              />
            </div>

            {/* Warning Text */}
            <p className="text-[#151518] font-normal mt-5">
              Информация, размещённая на данном веб-сайте, предназначена только для медицинских и фармацевтических работников Российской Федерации и не может быть использована иными лицами, в том числе для замены консультаций со специалистом/врачом.
            </p>

            {/* Question Text */}
            <p className="text-[#151518] font-semibold mt-5">
              Вы являетесь медицинским и/или фармацевтическим работником и согласны с утверждением выше?
            </p>

            {/* Buttons */}
            <div className="flex items-center gap-3 mt-10 md:mt-12 font-semibold leading-[1.4] w-full">
              {/* No Button */}
              <a
                href='https://servier.ru/'
                onClick={handleNo}
                className="flex-1 flex items-center justify-center rounded-lg border border-[#151518] px-5 py-4 md:px-8 text-[#151518] cursor-pointer hover:opacity-80 transition-opacity"
              >
                Нет
              </a>

              {/* Yes Button */}
              <button
                onClick={handleYes}
                className="flex-1 flex items-center justify-center rounded-lg px-5 py-4 md:px-8 text-white cursor-pointer hover:opacity-90 transition-opacity"
                style={{
                  background: "#E74C39",
                }}
              >
                Да
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Warning;

