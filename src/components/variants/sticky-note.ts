import { SpringTransition } from "./spring";

export const cardTiltVariants = {
	initial: {
		y: 60,
		opacity: 0,
	},
	animate: (index: number) => ({
		y: 0,
		opacity: 1,
		transition: { ...SpringTransition, delay: index * 0.06 },
	}),
};
