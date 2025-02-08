import App from '../App';
import { MainPage } from '../components/mainPage';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                index: true,
                element: <Navigate to="/main" replace />
            },

        ]
    },   
    {
        path: '/main',
        element: (
        <MainPage />
            )
    }
]);

export default function Router() {
    return <RouterProvider router={routes} />;
  }

