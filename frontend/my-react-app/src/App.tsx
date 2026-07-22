import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails'

const router = createBrowserRouter([
  {path:"/", element : <Home/>},
  {path:"/login", element: <Login/>},
  {path:"/signup", element: <Signup/>},
  {path: "/product/:id", element: <ProductDetails/>}
]);

export default function App(){
  return <RouterProvider router={router}/>
}