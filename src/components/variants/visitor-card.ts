const Transition = {
	duration: 0.5,
	type: "tween" as const,
	ease: "easeInOut" as const,
};

export const visitorCardVariants = {
	initial: {
		y: -100,
		opacity: 0,
	},
	animate: (index: number) => ({
		y: 0,
		opacity: 1,
		transition: { ...Transition, delay: index * 0.06 },
	}),
};
