"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";

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
            src="/av.jpg"
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

export const FancyHover = () => {
  const [open, setOpen] = useState(false);
  const [supportsHover, setSupportsHover] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setSupportsHover(window.matchMedia("(hover: hover)").matches);
    }
  }, []);

  return (
    <HoverCard
      open={open}
      onOpenChange={setOpen}
      openDelay={30}
      closeDelay={100}
    >
      <HoverCardTrigger asChild>
        <span
          className="highlight relative inline-block cursor-pointer"
          onClick={() => {
            if (!supportsHover) {
              setOpen((prev) => !prev);
            }
          }}
        >
          anurag
          <Image
            src="/1.gif"
            alt="floating cursor"
            width={20}
            height={20}
            priority
            className="animate-bounce absolute -top-2 left-1"
          />
        </span>
      </HoverCardTrigger>

      <HoverCardContent
        className="border-none shadow-none rounded-sm size-auto p-1 flex items-center justify-center"
        side="top"
        align="center"
      >
        <Image
          src="/beep.png"
          alt="anurag"
          width={150}
          height={150}
          priority
          className="rounded-sm"
        />
      </HoverCardContent>
    </HoverCard>
  );
};
