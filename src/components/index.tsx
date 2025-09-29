"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export const Divider = () => {
  return (
    <div className="my-6 border-neutral-400/60 border-dashed border-t-[1.5px]"></div>
  );
};

export const Toast = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 200) {
        setShow(true);
      } else if (scrollY <= 200) {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="fixed right-6 bottom-6 px-4 font-mono text-[12px] py-3 rounded-md bg-white flex items-center gap-2 shadow-lg"
        >
          <Image
            src="/favicon.ico"
            alt="avatar"
            width={24}
            height={24}
            className="rounded-full"
            quality={30}
            priority
          />
          <p>senpai noticed you!</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
