import { createBrowserRouter } from 'react-router-dom';
import Home from '../views/home/Home';
import ErrorPage from '../views/ErrorPage';
import CardDetail from '../components/cardDetail/CardDetail';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: ':card',
        element: <CardDetail />,
      },
    ],
  },
]);
