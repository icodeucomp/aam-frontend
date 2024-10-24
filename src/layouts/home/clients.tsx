"use client";

import { motion } from "framer-motion";

import { Container, Img, Motion } from "@/components";

import { imageClients } from "@/static";

export const Clients = () => {
  const imageVariants = {
    animate: { x: ["0%", "-100%"], transition: { x: { repeat: Infinity, repeatType: "loop", ease: "linear", duration: 60 } } },
  };

  return (
    <Container className="flex items-center gap-8 overflow-hidden pb-16">
      <div className="text-3xl md:text-start md:text-4xl lg:text-5xl">
        <Motion tag="h4" duration={0.5} initialX={-50} animateX={0} className="text-dark-gray text-nowrap">
          Our Clients
        </Motion>
      </div>
      <Motion tag="div" duration={1.5} delay={1} initialX={50} animateX={0} className="space-y-4 md:space-y-8">
        <div className="flex overflow-hidden">
          <motion.div className="flex flex-shrink-0" animate="animate" variants={imageVariants}>
            {imageClients.map((image, index) => (
              <Img key={`col1-${index}`} src={image} alt="stack icon" className="mx-4 h-20 w-40 md:mx-8" cover />
            ))}
          </motion.div>
          <motion.div className="flex flex-shrink-0" animate="animate" variants={imageVariants}>
            {imageClients.map((image, index) => (
              <Img key={`col1-${index}`} src={image} alt="stack icon" className="mx-4 h-20 w-40 md:mx-8" cover />
            ))}
          </motion.div>
        </div>
      </Motion>
    </Container>
  );
};
