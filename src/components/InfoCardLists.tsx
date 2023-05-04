import { FC, Fragment, useMemo } from 'react';
import { InfoCard, InfoCardProps } from './InfoCard';

export const InfoCardLists: FC = () => {
	const info = useMemo<InfoCardProps[]>(
		() => [
			{ title: 'Language', description: ['JavaScript', 'TypeScript'] },
			{ title: 'Databases', description: ['PostgreSQL', 'Mongo'] },
			{ title: 'Other', description: ['HTML', 'CSS', 'EJS', 'SCSS', 'REST'] },
			{ title: 'Tools', description: ['Figma', 'Git'] },
			{ title: 'Frameworks', description: ['React', 'Express.js'] },
		],
		[]
	);

	return (
		<Fragment>
			{!!info.length &&
				info.map(({ description, title }, index) => (
					<InfoCard key={index} title={title} description={description} />
				))}
		</Fragment>
	);
};
