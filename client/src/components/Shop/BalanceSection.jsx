import { useState } from "react";
import { FiEye, FiShoppingCart, FiHeart } from "react-icons/fi"; // Eye and Chevron icons for toggling
import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion

const BalanceCard = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Motion variants for the card
  const cardVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }, // Exit animation when collapsing
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }} // Exit animation when removing the card
      transition={{ duration: 0.5 }}
      className="fixed right-4 top-4 p-4  w-64 h-screen mt-20"
    >
      {/* Fixed Cart Icon in the Top Right */}
      <div className="absolute right-4 top-4">
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="bg-[#f6f7f9] p-4 rounded-lg "
        >
          <FiShoppingCart className="w-6 h-6" />
        </button>
      </div>
      {/* Collapsible Section with Framer Motion */}
      <AnimatePresence>
        {!isCollapsed && (
          <div className="h-screen ">
            <motion.div
              className="bg-orange-500 rounded-lg p-6 text-white relative mt-16 shadow-sm border-l-2 "
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              {/* Card Content */}
              <div className="flex justify-between items-center">
                <span className="font-semibold text-xl ">Balance</span>
              </div>
              <div className="font-bold text-3xl mt-4 ">
                <p> $1280.00</p>
                <button>
                  <span>
                    <FiEye className="w-6 h-6" />
                  </span>
                </button>
              </div>

              {/* Floating Icon */}
              <div className="absolute top-4 right-4 bg-white p-2 rounded-full">
                <div className="w-8 h-8 rounded-full bg-orange-300">
                  <img src="../../../public/image/credit-card.png" alt="" />
                </div>
              </div>
              {/* Additional Content */}
              <div className="mt-6">
                <button className="w-full bg-black text-white p-2 mt-4 rounded-lg hover:bg-white hover:text-black">
                  Checkout
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default BalanceCard;
