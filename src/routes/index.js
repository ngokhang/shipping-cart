import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Login from '../pages/Authentication/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'auth/login',
        element: <Login />,
      },
    ],
  },
]);

export default router;
