import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from '../pages/homePage';
import { StaticRoute } from '../pages/staticRoute';
import { DynamicRoute } from '../pages/dynamicRoute';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: '/custom',
        element: <StaticRoute />,
    },
    {
        path: '/custom/:id',
        element: <DynamicRoute />,
    },
]);
