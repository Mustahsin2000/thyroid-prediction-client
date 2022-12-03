import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Main from './Layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        }
      
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
