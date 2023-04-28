import { StrictMode, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle, router, theme } from 'config/index.ts';
import './18n.ts';

interface ITheme {
	[key: string]: any;
	mode: 'light' | 'dark';
}
const themes: ITheme = {
	...theme,
	mode: 'dark',
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<StrictMode>
		<Suspense fallback={<div>Loading...</div>}>
			<ThemeProvider theme={themes}>
				<RouterProvider router={router} />
				<GlobalStyle />
			</ThemeProvider>
		</Suspense>
	</StrictMode>
);
