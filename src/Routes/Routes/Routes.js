import { createBrowserRouter } from 'react-router-dom';
import Courses from '../../components/Courses/Courses';
import Main from '../../layout/Main';
import Login from '../../pages/Login/Login';
import Register from '../../pages/Login/Register';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Courses />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
    ],
  },
]);
