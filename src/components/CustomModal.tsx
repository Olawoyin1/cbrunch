

// export default function CustomModal({ open, onClose, children }) {
//   if (!open) return null;

//   return (
//     <div
//       className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur animate-fadeIn z-[999]"
//       onClick={onClose} // close when clicking background
//     >
//       <div
//         className="bg-white text-black rounded-xl  p-6 w-[90%] max-w-md animate-scaleIn"
//         onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
//       >
//         {children}
//       </div>
//     </div>
//   );
// }

import type { ReactNode } from "react";

interface CustomModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function CustomModal({ open, onClose, children }: CustomModalProps) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm animate-fadeIn z-[999]"
      onClick={onClose}
    >
      <div
        className="bg-white text-black rounded-xl shadow-xl p-6 w-[90%] max-w-md animate-scaleIn relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
        >
          ✕
        </button>

        {children}
      </div>
    </div>
  );
}
