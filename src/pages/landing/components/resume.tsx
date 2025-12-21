import { Download } from "lucide-react";
import { motion } from "motion/react";
import ThreeLines from "@/components/svg/3-lines";
import { cardTiltVariants } from "@/components/variants/sticky-note";

const ResumeDownload = () => {
  return (
    <a
      href="/resume/abhishek_cv.pdf"
      target="_blank"
      download="abhishek_cv.pdf"
      rel="noopener noreferrer"
      aria-label="Download resume"
    >
      <motion.div
        className="flex items-center gap-2 font-bold text-2xl relative"
        variants={cardTiltVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="absolute -top-7 right-44 rotate-90">
          <ThreeLines />
        </div>
        <motion.div
          animate={{
            y: [-10, 0, -10],
            transition: {
              repeat: Infinity,
              duration: 1,
              type: "tween" as const,
              ease: "linear",
            },
          }}
        >
          <Download />
        </motion.div>
        Download Resume
      </motion.div>
    </a>
  );
};

export default ResumeDownload;
