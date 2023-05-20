import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Login from '../pages/Authentication/Login';
import Profile from '../pages/Profile';
import Register from '../pages/Authentication/Register';
import Homepage from '../pages/Homepage';
import SearchResult from '../pages/SearchResult';
import ViewProduct from '../pages/View_product_detail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Homepage />,
      },
      {
        path: '/home',
        element: <Homepage />,
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
        path: 'me',
        element: <Profile />,
      },
      {
        path: 'search',
        element: <SearchResult />,
      },
      {
        path: 'products/:id',
        element: <ViewProduct />,
      },
    ],
  },
]);

export default router;
