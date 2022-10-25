import { createBrowserRouter } from 'react-router-dom';
import Blog from '../../components/Blog/Blog';
import Checkout from '../../components/Checkout/Checkout';
import CourseDetails from '../../components/CourseDetails/CourseDetails';
import Courses from '../../components/Courses/Courses';
import Error from '../../components/Error/Error';
import Main from '../../layout/Main';
import Login from '../../pages/Login/Login';
import Register from '../../pages/Login/Register';
import PrivateRoutes from '../PrivateRoutes/PrivateRoutes';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        loader: async () => {
          return fetch('http://localhost:4000/course-data');
        },
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
      {
        path: '/course/:id',
        loader: async ({ params }) => {
          return fetch(`http://localhost:4000/course-data/${params.id}`);
        },
        element: <CourseDetails />,
      },
      {
        path: '/blog',
        element: <Blog />,
      },
      {
        path: '/checkout/:id',
        loader: async ({ params }) => {
          return fetch(`http://localhost:4000/course-data/${params.id}`);
        },
        element: (
          <PrivateRoutes>
            <Checkout />
          </PrivateRoutes>
        ),
      },
    ],
  },
  {
    path: '*',
    element: <Error />,
  },
]);
