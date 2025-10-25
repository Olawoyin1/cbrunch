


// components/WhatsAppChat.tsx
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppChat = () => {
  const [showButton, setShowButton] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const handleScroll = () => {
      const triggerHeight = window.innerHeight * 0.3; // 30vh
      const shouldShow = window.scrollY > triggerHeight;
      setShowButton(shouldShow);

      if (shouldShow) {
        setShowText(true);
        clearTimeout(timeout);
        timeout = setTimeout(() => setShowText(false), 7000); // hide text after 7s
      } else {
        clearTimeout(timeout);
        setShowText(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeout);
    };
  }, []);

  const phoneNumber = "2348168028145"; // your WhatsApp number (no "+" or spaces)
  const message = encodeURIComponent("Hi 👋 I'm interested in the upcoming event! Can you share more details?");

  return (
    <AnimatePresence>
      {showButton && (
        <motion.a
          key="whatsapp-button"
          href={`https://wa.me/${phoneNumber}?text=${message}`}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-6 right-6 z-50 flex items-center space-x-2 bg-green-500 text-white py-3 px-4 rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-110"
        >
          <FaWhatsapp size={24} className="animate-pulse" />
          <AnimatePresence>
            {showText && (
              <motion.span
                key="chat-text"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.4 }}
                className="hidden sm:inline-block font-medium whitespace-nowrap"
              >
                Chat with us
              </motion.span>
            )}
          </AnimatePresence>
        </motion.a>
      )}
    </AnimatePresence>
  );
};

export default WhatsAppChat;
