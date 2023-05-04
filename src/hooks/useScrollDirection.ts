import { useState, useEffect } from 'react';

export const useScrollDirection = (): boolean | null => {
	const [scrollDirection, setScrollDirection] = useState<boolean | null>(null);

	useEffect(() => {
		let lastScrollY = window.pageYOffset;
		const updateScrollDirection = (): void => {
			const scrollY = window.pageYOffset;
			const direction = scrollY > lastScrollY ? false : true;
			if (direction !== scrollDirection && (scrollY - lastScrollY > 5 || scrollY - lastScrollY < -5)) {
				setScrollDirection(direction);
			}
			lastScrollY = scrollY > 0 ? scrollY : 0;
		};
		window.addEventListener('scroll', updateScrollDirection); // add event listener
		return () => {
			window.removeEventListener('scroll', updateScrollDirection); // clean up
		};
	}, [scrollDirection]);

	return scrollDirection;
};
