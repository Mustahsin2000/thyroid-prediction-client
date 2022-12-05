import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Main from './Layout/Main';
import Prediction from './Pages/Prediction/Prediction';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/prediction',
          element:<Prediction></Prediction>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signup',
          element:<SignUp></SignUp>
        },
      
      ]
    }
  ])
  return (
    <div data-theme="light" className='max-w-screen-lg mx-auto '>
    <RouterProvider router={router}></RouterProvider>
   </div>
  );
}

export default App;
