import React from 'react';
import ReactDOM from 'react-dom';
import App from './modules/app/App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Error from './modules/app/ErrorApp';
import AuthLogin from './modules/Auth/AuthLogin/AuthLogin';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthRegister from './modules/Auth/AuthRegister/AuthRegister';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthLogin />,
    errorElement: <Error />,
  },
  {
    path: '/register',
    element: <AuthRegister />,
    errorElement: <Error />,
  },
  {
    path: '/app',
    element: <App />,
    errorElement: <Error />,
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <ToastContainer />
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root'),
);
