import { motion } from "motion/react";
import { cardTiltVariants } from "@/components/variants/sticky-note";

export type ExperienceType = {
  jobTitle: string;
  company: string;
  period: string;
  description: string;
};

const ExperienceItem = ({
  jobTitle,
  company,
  period,
  description,
}: ExperienceType) => {
  return (
    <motion.div
      variants={cardTiltVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="flex flex-col gap-3"
    >
      <h4 className="font-black text-xl text-black">
        {company} <span className="text-[#8c8fa6]">({jobTitle})</span>
      </h4>
      <span className="text-lg font-bold text-[#8c8fa6]">{period}</span>
      <p className="text-black text-xl">{description}</p>
    </motion.div>
  );
};

export default ExperienceItem;
