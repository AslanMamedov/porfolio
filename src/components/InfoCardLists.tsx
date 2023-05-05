import { FC, Fragment, useMemo } from 'react';
import { InfoCard, InfoCardProps } from './InfoCard';

export const InfoCardLists: FC = () => {
	const info = useMemo<InfoCardProps[]>(
		() => [
			{ title: 'Language', description: ['JavaScript,', 'TypeScript'] },
			{ title: 'HTML', description: ['HTML5,', 'PUG,', 'Semantic Elements'] },
			{
				title: 'CSS',
				description: [
					'CSS3,',
					'SCSS,',
					'SASS,',
					'BEM,',
					'Flexbox,',
					'Grid,',
					'Responsive Design,',
					'CSS in JS',
				],
			},

			{ title: 'Frontend', description: ['React,', 'NextJs'] },
			{
				title: 'Frontend-Tools',
				description: [
					'React Router Dom,',
					'Redux,',
					'Redux RTK,',
					'Redux RTK Query,',
					'React Query,',
					'React Hook Form,',
					'Formik,',
					'React Select,',
					'React Toastify,',
					'Apollo Client,',
					'React-helmet,',
					'ES6+,',
					'Ajax,',
				],
			},

			{
				title: 'Backend',
				description: [
					'Node JS,',
					'Express JS,',
					'Nest JS,',
					'Socket.IO,',
					'NodeMailer,',
					'Multer,',
					'GraphQL,',
					'Apollo Server',
				],
			},
			{ title: 'Databases', description: ['PostgreSQL,', 'Mongo'] },
			{
				title: 'ORM',
				description: ['Prisma,', 'TypeORM,', 'Sequelize,', 'Mongoose'],
			},
			{
				title: 'Design',
				description: ['TailwindCSS,', 'Material UI,', 'Next UI,', 'Ant Design,', 'Chakra UI,', 'Bootstrap'],
			},
			{ title: 'Bundler', description: ['Gulp,', 'Webpack,', 'Vite,', 'Linters,', 'Husky'] },
			{ title: 'Tools', description: ['Axios,', 'Zod,', 'Yup,', 'Git,', 'NPM,', 'Yarn'] },
			{ title: 'Other', description: ['Figma,', 'Photoshop,', 'Postman,', 'Insomnia,', 'Devtools,', 'nvm'] },
		],
		[]
	);

	return <Fragment>{!!info.length && info.map((info, index) => <InfoCard key={index} {...info} />)}</Fragment>;
};
