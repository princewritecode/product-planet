import ReactDOM from 'react-dom/client';
import App from '../src/component/App.jsx';
import { Header } from './component/Header.jsx';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import About from './component/About.jsx';
import Contact from './component/Contact.jsx';
import Error from './component/Error.jsx';
const AppLayOut = () =>
{
  return <div >
    <Header></Header>
    <Outlet></Outlet>
  </div>;
};
const AppRouter = createBrowserRouter([
  {
    path: '/'
    , element: <AppLayOut></AppLayOut>,
    children: [
      {
        path: '/',
        element: <App></App>,
      }
      ,
      {
        path: '/about',
        element: <About></About>,
      },
      {
        path: '/contact',
        element: <Contact></Contact>,
      }
    ],
    errorElement: <Error></Error>
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={AppRouter}></RouterProvider>
);
