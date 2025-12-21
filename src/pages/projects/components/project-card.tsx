import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import AnimatedRect from "@/components/svg/rectangle";
import { cardTiltVariants } from "@/components/variants/sticky-note";

interface ProjectCardProps {
  index: number;
  title: string;
  image: string;
  link: string;
  description: string;
}

const ProjectCard = (props: ProjectCardProps) => {
  return (
    <motion.div
      variants={cardTiltVariants}
      className="w-full h-max relative"
      initial="initial"
      whileInView="animate"
      custom={props.index}
      viewport={{ once: true }}
    >
      <div className="flex justify-between items-center gap-10 absolute top-1/2 left-1/2 h-[80%] w-[90%]  -translate-x-1/2 -translate-y-1/2 mt-[1rem] overflow-hidden">
        <div className="w-auto h-[240px] py-2">
          <img
            src={props.image}
            height={1000}
            width={1000}
            alt={props.title}
            className="h-full w-auto object-cover object-left rounded-xl"
          />
        </div>
        <div className="right flex flex-col justify-center items-start gap-5 h-full w-full">
          <h3 className="font-bold text-3xl tracking-tight headingFont">
            {props.title}
          </h3>
          <p className="text-lg leading-none">{props.description}</p>
        </div>
      </div>
      <Link to={props.link} target="_blank" className="overlay w-full h-full">
        <AnimatedRect />
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
