import { StrictMode, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle, router, theme } from 'config/index.ts';
import './18n.ts';
import { Loader } from 'components/Loader.tsx';

const themes = {
	...theme,
	mode: 'dark',
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<StrictMode>
		<Suspense fallback={<Loader />}>
			<ThemeProvider theme={themes}>
				<RouterProvider router={router} />
				<GlobalStyle />
			</ThemeProvider>
		</Suspense>
	</StrictMode>
);
