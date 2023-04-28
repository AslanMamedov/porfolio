import { createBrowserRouter } from 'react-router-dom';
import { AboutPage, ContactsPage, HomePage, WorksPage } from 'pages';
import { Layout } from 'components/index';

export const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{
				path: '/',
				index: true,
				element: <HomePage />,
			},
			{
				path: '/about',
				element: <AboutPage />,
			},
			{
				path: '/contacts',
				element: <ContactsPage />,
			},
			{
				path: '/works',
				element: <WorksPage />,
			},
		],
	},
]);
