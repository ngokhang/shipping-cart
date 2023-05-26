import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Login from '../pages/Authentication/Login';
import Profile from '../pages/Profile';
import Register from '../pages/Authentication/Register';
import Homepage from '../pages/Homepage';
import SearchResult from '../pages/SearchResult';
<<<<<<< HEAD
import ViewProduct from '../pages/View_product_detail';
=======
import Clothes from '../pages/Clothes';
import Shoes from '../pages/SportShoes';
>>>>>>> f2c6cf97a2f8169327d14750dffa0b47ed1a0ee9

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: '/home',
        element: <Homepage />,
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
        path: 'clothes',
        element: <Clothes />,
      },
      {
        path: 'sportshoes',
        element: <Shoes />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
]);

export default router;
