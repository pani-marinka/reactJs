import App from '../App';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'; // Імпортуємо ChakraProvider

import { Users } from '../components/users';
import { SignUp } from '../components/singUp';
//import { Title } from './.';
import { MainPage } from '../components/mainPage';
import { RouterProvider } from 'react-router-dom';

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                index: true,               
                element: <Navigate to="/users" replace />
            },
          
        ]       
    },
    {
        path: '/users',
        element: <Users />
    },
    {
        path: '/signup',
        element: <SignUp />
    }   ,
    {
        path: '/main',
      //  element:<MainPage />,
       element: (
        <ChakraProvider>  {/* Огортаємо все у ChakraProvider */}
        <MainPage />
      </ChakraProvider>
      )
    }
]);

export default function Router() {
    return <RouterProvider router={routes} />;
  }


// {
//     path: "/SignUp",
//     element: <h2>SignUp</h2>,
// }
// const route = createBrowserRouter([
//     {
//         path: "/",
//         element: <div>Hello User</div>,
//     },
// ]);
 