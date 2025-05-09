import { createBrowserRouter } from "react-router";

import App from '@app/App.tsx';
import NotFoundPage from '@app/errorpage/NotFoundPage';

const router = createBrowserRouter([
	{
		path: '/',
		Component: App,
		children: [
			{}
		],
		errorElement: <NotFoundPage />,
	},
]);

export default router;