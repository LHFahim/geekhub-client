import { createBrowserRouter } from 'react-router-dom';
import Blog from '../../components/Blog/Blog';
import Checkout from '../../components/Checkout/Checkout';
import CourseDetails from '../../components/CourseDetails/CourseDetails';
import Courses from '../../components/Courses/Courses';
import Error from '../../components/Error/Error';
import FAQ from '../../components/FAQ/FAQ';
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
          return fetch('https://geekhub-server.vercel.app/course-data');
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
          return fetch(
            `https://geekhub-server.vercel.app/course-data/${params.id}`
          );
        },
        element: <CourseDetails />,
      },
      {
        path: '/blog',
        element: <Blog />,
      },
      {
        path: '/faq',
        element: <FAQ />,
      },
      {
        path: '/checkout/:id',
        loader: async ({ params }) => {
          return fetch(
            `https://geekhub-server.vercel.app/course-data/${params.id}`
          );
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
