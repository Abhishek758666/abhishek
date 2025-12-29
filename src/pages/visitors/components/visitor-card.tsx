import { motion } from "motion/react";
import { useState } from "react";
import { visitorCardVariants } from "@/components/variants/visitor-card";

interface CardProps {
  index: number;
  top: string;
  left: string;
  rotate: string;
  data: {
    image: string;
    name: string;
    message: string;
  };
}

const VisitorCard = ({ top, left, rotate, data, index }: CardProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  return (
    <motion.div
      style={{
        position: "absolute",
        top,
        left,
        rotate,
        x: position.x,
        y: position.y,
      }}
      variants={visitorCardVariants}
      initial="initial"
      animate="animate"
      custom={index}
      drag
      dragMomentum={false}
      dragElastic={0}
      onDragEnd={(_, info) => {
        setPosition((prev) => ({
          x: prev.x + info.offset.x,
          y: prev.y + info.offset.y,
        }));
      }}
      className="w-[140px] h-max cursor-grab active:cursor-grabbing relative"
    >
      <div className="relative w-full border bg-white rounded-md border-[#dadada]">
        <div className="flex flex-col gap-1 bg-secondary-foreground p-2">
          <img
            src={data?.image}
            height={125}
            width={140}
            className="w-full rounded-md border h-[125px] object-cover"
            alt={data?.name}
          />
          <p className="text-zinc-400 capitalize leading-none">{data?.name}</p>
          <p className="text-sm leading-none">{data?.message}</p>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full z-20"></div>
    </motion.div>
  );
};

export default VisitorCard;
