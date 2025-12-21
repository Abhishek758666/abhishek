import { motion } from "motion/react";
import { cardTiltVariants } from "@/components/variants/sticky-note";

export type Skill = {
  title: string;
  index?: number;
};

const SkillCard = ({ title, index }: Skill) => {
  return (
    <motion.div
      variants={cardTiltVariants}
      initial="initial"
      whileInView="animate"
      custom={index}
      viewport={{ once: true }}
      className="flex items-center gap-2 text-lg font-bold border-[#474747]  px-3 rounded-2xl border-2"
    >
      <p>{title}</p>
    </motion.div>
  );
};

const Skills = ({ skills }: { skills: Skill[] }) => {
  return (
    <div>
      <motion.h3
        variants={cardTiltVariants}
        initial="initial"
        whileInView="animate"
        className="headingFont font-black text-2xl"
        viewport={{ once: true }}
      >
        Skills
      </motion.h3>
      <div className="flex flex-wrap gap-4 mt-4">
        {skills.map((skill, index) => (
          <SkillCard key={skill.title} {...skill} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
