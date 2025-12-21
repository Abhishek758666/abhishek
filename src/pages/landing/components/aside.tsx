import { motion } from "motion/react";
import ThreeLines from "@/components/svg/3-lines";
import ArrowSvg from "@/components/svg/arrow";
import { cardTiltVariants } from "@/components/variants/sticky-note";
import StickyNote from "./sticky-note";

const LayoutAside = () => {
  return (
    <motion.section
      variants={cardTiltVariants}
      initial="initial"
      whileInView="animate"
      className="relative md:fixed top-24 left-0 md:left-[10vw] w-full md:max-w-[20rem] lg:left-[20vw] xl:left-[25vw] h-screen items-center flex flex-col"
    >
      <div className="flex flex-col items-center justify-center relative">
        <span className="absolute -top-4 left-10">
          <ThreeLines />
        </span>
        <img
          className="h-[119px] w-[119px] rounded-full border-3 object-contain border-[#474747]"
          width={400}
          height={400}
          src="/me.jpg"
          alt="Abhishek Khati profile"
        />
        <div className="flex items-end">
          <ArrowSvg />
          <p className="text-[32px] translate-y-5 font-black">Abhishek Khati</p>
        </div>
      </div>
      <div className="w-full max-w-[390px] px-3 py-10 grid gap-2 grid-cols-2">
        <StickyNote
          child="2+ year as software developer"
          isEven={false}
          bg={2}
        />
        <StickyNote child="Fullstack Developer" bg={3} isEven />
        <StickyNote
          child={
            <div className="flex flex-col items-center gap-2">
              <img
                src="/location.svg"
                alt="Location icon"
                width={50}
                height={50}
              />
              <span>Lalitpur, Nepal</span>
            </div>
          }
          bg={5}
          isEven={false}
        />
        <StickyNote child="Available for hiring" bg={4} isEven />
      </div>
    </motion.section>
  );
};

export default LayoutAside;
