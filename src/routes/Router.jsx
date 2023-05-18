import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home/Home/Home';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import AllToys from '../pages/Home/Home/components/AllToys';
import Blogs from '../pages/Blogs/Blogs';
import AddToys from '../pages/Home/Home/components/AddToys';
import MyToys from '../pages/Home/Home/components/MyToys';
import ErrorPage from '../pages/ErrorPage/ErrorPage';

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'blogs',
                element: <Blogs></Blogs>
            },
            {
                path: 'alltoys',
                element: <AllToys></AllToys>
            },
            {
                path: "addtoys",
                element: <AddToys></AddToys>
            },
            {
                path: "mytoys",
                element: <MyToys></MyToys>
            }



        ]
    },
]);

export default router;