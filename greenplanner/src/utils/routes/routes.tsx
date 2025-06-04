import { createBrowserRouter } from "react-router";

import App from '@app/App.tsx';
import NotFoundPage from '@app/errorpage/NotFoundPage';
import Layout from "@/src/app/layout/Layout";

const router = createBrowserRouter([
	{
		Component: Layout,
		children: [
			{ path: '/', Component: App}
		],
		errorElement: <NotFoundPage />,
	},
]);

export default router;