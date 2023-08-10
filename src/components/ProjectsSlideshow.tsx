import React from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { ImgProps } from 'next/dist/shared/lib/get-img-props';

type SlideShowProps = {
  image: ImgProps
}

const ProjectsSlideshow = ({image}: SlideShowProps) => {
  return (
      <AnimatePresence>
          <motion.img
              key={image.src}
              src={image.src}
              initial={{ opacity: 0, y: 200 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
          />
      </AnimatePresence>
  );
}

export default ProjectsSlideshow