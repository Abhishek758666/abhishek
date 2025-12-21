import { motion } from "motion/react";
import { cardTiltVariants } from "@/components/variants/sticky-note";
import { EXPERIENCE, SKILLS, SOCIAL_LINKS } from "./config";
import ExperienceItem from "./experience";
import ResumeDownload from "./resume";
import Skills from "./skills";
import SocialLinks from "./social-links";

const HomeContent = () => {
  return (
    <section className="w-full h-full">
      <div className="flex flex-col gap-10">
        <ResumeDownload />

        <SocialLinks links={SOCIAL_LINKS} />
        <Skills skills={SKILLS} />

        <div className="flex flex-col gap-4">
          <motion.h3
            variants={cardTiltVariants}
            initial="initial"
            whileInView="animate"
            className="headingFont font-black text-2xl"
          >
            Experience
          </motion.h3>
          {EXPERIENCE.map((exp) => (
            <ExperienceItem key={exp.jobTitle} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeContent;
