"use client";

import React from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

{
  /* <AnimatePresence mode="wait">
      <motion.div
        key={key}
        initial={{ y: 50, opacity: 0 }} // Starts from 20px below and is invisible
        animate={{ y: 0, opacity: 1 }} // Slides up to its final position
        exit={{ y: -50, opacity: 0 }} // Slides up and out as it exits
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </AnimatePresence> */
}
