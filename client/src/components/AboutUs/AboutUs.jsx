import React from "react";
import { motion } from "framer-motion";

const about = () => {
  return (
    <>
      <main className="min-h-screen flex flex-col lg:flex-row">
        {/* Image Section */}
        <section className="lg:w-1/2 w-full">
          <motion.img
            src="./image/Free shipping world wide.jpg"
            alt="AuraMoms"
            className="w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          />
        </section>

        {/* Text Section */}
        <section className="lg:w-1/2 w-full flex items-center p-8 bg-white">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-6"
          >
            {/* First Paragraph with Animations */}
            <motion.p
              className="text-2xl lg:text-4xl font-semibold text-gray-800 leading-relaxed"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              At AuraMoms, we believe that self-care isn’t a luxury—it’s a necessity. Born from the desire
              to empower moms and women everywhere, our mission is to help you embrace wellness and beauty
              rituals that fit seamlessly into your busy life. Whether you’re a mom balancing the demands
              of family and work, or a woman striving for moments of peace in your daily routine, we’re here
              to bring blissful self-care directly to your doorstep.
            </motion.p>

            {/* Second Paragraph with Animations */}
            <motion.p
              className="text-2xl lg:text-4xl font-semibold text-gray-800 leading-relaxed"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              What are the goals we want to achieve? We envision a world where every woman, no matter her role 
              or schedule, can carve out time to care for herself. Through our thoughtfully curated collections, 
              we offer more than just products—we provide experiences that help women feel radiant, confident, 
              and renewed.
            </motion.p>
          </motion.div>
        </section>
      </main>
    </>
  );
};

export default about;
