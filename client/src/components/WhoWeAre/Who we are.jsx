/* eslint-disable no-unused-vars */
// src/components/WhoWeAre.js
import { motion } from "framer-motion";
import React from 'react';
import Part from './whoWeAReCompo';
function WhoWeAre() {
    const buttonVariant = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: { duration: 0.5, ease: "easeInOut" },
        },
      };
  return (
    <div className="pt-14 pb-14 text-center bg-CustomLightMode dark:bg-GreenColorInDarkMood text-LightText dark:text[black]">
      <h3 className="text-3xl mx-4 md:mx-12 lg:mx-52 font-normal">
        What about us?
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-9 mt-8">
        <Part
          imageSrc="./image/OurMissionImage.png"
          title="Our Mission"
          description="Empowering moms with thoughtful, quality products for their needs."
          bgColor="bg-white dark:bg-GreenColorInDarkMood"
          borderColor="border-gray-300 dark:border-gray-600"
        />
        <Part
          imageSrc="./image/OurStory.jpg"
          title="Our Story"
          description="Founded to uplift and support parents with care and innovation."
          bgColor="bg-white dark:bg-GreenColorInDarkMood"
          borderColor="border-gray-300 dark:border-gray-600"
        />
        <Part
          imageSrc="./image/WhyChooseUS.svg"
          title="Why Choose Us"
          description="Your trusted partner in parenting with dedicated, reliable support."
          bgColor="bg-white dark:bg-GreenColorInDarkMood"
          borderColor="border-gray-300 dark:border-gray-600"
        />
      </div>
      <div className="mt-8 ButtonPart ">
      <motion.button
            className="select-none border-2 border-[#416048] p-2 max-w-48 min-w-48 rounded-3xl text-white dark:text-white bg-[#416048] hover:bg-transparent hover:text-black transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Now
          </motion.button>
      </div>
    </div>
  );
}

export default WhoWeAre;
