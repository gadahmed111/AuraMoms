import React from "react";
import { motion } from "framer-motion";
import img from "../../../public/image/pattern_circles-2_1_4_0-0_50_2__ce4257_4f000b_ff7f51.png";
import NavButton from "../ReUseable/NavButton";

const ParallaxSection = () => {
  return (
    <main className="relative h-screen overflow-hidden mt-10 font-Cabin">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 bg-repeat bg-[url('./image/pattern_circles-2_1_4_0-0_50_2__ce4257_4f000b_ff7f51.png')] bg-cover"
        initial={{ backgroundPositionY: "0%" }}
        animate={{ backgroundPositionY: "100%" }}
        transition={{
          duration: 5,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <section className="relative h-[80vh]  sm:p-6 md:p-10 mx-4 md:mx-10 lg:mx-20 mt-10 rounded-2xl border grid grid-cols-1 lg:grid-cols-2 gap-6 justify-between">
        <figure className="hidden lg:flex justify-center items-center">
          <img
            src="./public/image/22.png"
            alt=""
            className=""
          />
        </figure>
        <figure className="flex items-center h-full bg-PinkyColor rounded-2xl ">
          <caption className="p-4 md:p-8 lg:p-10 text-black">
            <motion.h1
              className="text-start text-2xl sm:text-3xl md:text-4xl font-bold"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              AuraMoms Website:
            </motion.h1>
            <p className="py-6  sm:py-6 md:py-10 text-start leading-loose text-sm sm:text-base md:text-lg">
              Aura Moms is an e-commerce platform dedicated to empowering
              mothers by offering a curated selection of thoughtful, practical
              products that make parenting easier and more enjoyable. Whether
              you're a new mom or experienced, Aura Moms provides everything
              from baby essentials to lifestyle products, designed to simplify
              daily tasks and enhance the well-being of both moms and their
              families.
            </p>
            <div className="flex">
              <NavButton className="bg-HeavyPinkColor border-none hover:bg-transparent hover:scale-110 transition-all duration-350">
                Shop Now!
              </NavButton>
            </div>
          </caption>
        </figure>
      </section>
    </main>
  );
};

export default ParallaxSection;
