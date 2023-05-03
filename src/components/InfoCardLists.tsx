import { FC, Fragment, memo } from 'react';
import { InfoCard, InfoCardProps } from './InfoCard';

interface InfoCardListsProps {
	info: InfoCardProps[];
}

export const InfoCardLists: FC<InfoCardListsProps> = memo(({ info }) => {
	return (
		<Fragment>
			{!!info.length &&
				info.map(({ description, title }, index) => (
					<InfoCard key={index} title={title} description={description} />
				))}
		</Fragment>
	);
});
