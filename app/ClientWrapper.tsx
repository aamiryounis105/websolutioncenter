"use client"; // <- this makes it a client component

import { motion, MotionProps } from "framer-motion";
import React from "react";

export const MotionWrapper: React.FC<React.PropsWithChildren<MotionProps>> = ({
  children,
  ...props
}) => {
  return <motion.div {...props}>{children}</motion.div>;
};
