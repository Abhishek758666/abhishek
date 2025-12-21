import { motion } from "motion/react";
import { cardTiltVariants } from "@/components/variants/sticky-note";

export type SocialLink = {
  link: string;
  icon: React.ReactNode;
  label: string;
};

const SocialLinks = ({ links }: { links: SocialLink[] }) => {
  return (
    <div>
      <motion.h3
        variants={cardTiltVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="headingFont font-black text-2xl"
      >
        Social Links
      </motion.h3>
      <div className="flex flex-wrap gap-4 mt-4">
        {links.map(({ link, icon, label }, index) => (
          <motion.a
            key={link}
            whileHover={{
              rotate: "-15deg",
              scale: 1.1,
              transition: {
                type: "spring" as const,
                stiffness: 300,
                damping: 10,
              },
            }}
            variants={cardTiltVariants}
            initial="initial"
            whileInView="animate"
            custom={index}
            href={link}
            viewport={{ once: true }}
            className="flex items-center gap-2 font-bold border-[#474747] px-2 py-1 rounded-2xl border-2 text-sm"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
          >
            {icon}
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
