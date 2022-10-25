import { async } from '@firebase/util';
import { createBrowserRouter } from 'react-router-dom';
import CourseDetails from '../../components/CourseDetails/CourseDetails';
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
    ],
  },
]);
