import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
//
import UserPage from './pages/UserPage';
import SalePage from './pages/SalePage';
import LoginPage from './pages/LoginPage';
import Page404 from './pages/Page404';
import DashboardAppPage from './pages/DashboardAppPage';

// ----------------------------------------------------------------------

export default function Router() {
    const routes = useRoutes([
        {
            path: '/dashboard',
            element: <DashboardLayout />,
            children: [
                { element: <Navigate to="/login" />, index: true        },
                { path: 'app', element: <DashboardAppPage /> },
                { path: 'user', element: <UserPage /> },
                { path: 'sale', element: <SalePage />}
            ],
        },
        {
            path: 'login',
            element: <LoginPage />,
        },
        {
            element: <SimpleLayout />,
            children: [
                { element: <Navigate to="/login" />, index: true        },
                { path: '404', element: <Page404 /> },
                { path: '*', element: <Navigate to="/404" /> },
            ],
        },
        {
            path: '*',
            element: <Navigate to="/404" replace />,
        },
    ]);

    return routes;
}
