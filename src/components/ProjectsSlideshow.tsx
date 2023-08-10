import React from 'react'
import { motion, AnimatePresence } from "framer-motion";

type SlideShowProps = {
  image: 
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