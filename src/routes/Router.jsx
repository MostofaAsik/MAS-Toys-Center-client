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
import PrivateRoute from './PrivateRoute';
import ToyDetails from '../pages/Home/Home/components/ToyDetails';
import UpdateToy from '../pages/Home/Home/components/UpdateToy';


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
                path: 'toy/:id',
                element: <PrivateRoute>
                    <ToyDetails></ToyDetails>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/allToys/${params.id}`)
            },
            {
                path: "addtoys",
                element: <PrivateRoute>
                    <AddToys></AddToys>
                </PrivateRoute>
            },
            {
                path: "mytoys",
                element: <PrivateRoute>
                    <MyToys></MyToys>
                </PrivateRoute>
            },
            {
                path: 'updatetoy/:id',
                element: <UpdateToy></UpdateToy>,
                loader: ({ params }) => fetch(`http://localhost:5000/allToys/${params.id}`)

            },
            // {
            //     path: 'toyDetails/:id',
            //     element: <PrivateRoute>
            //         <CategoryDetails></CategoryDetails>
            //     </PrivateRoute>,
            //     loader: ({ params }) => fetch(`http://localhost:5000/allToys/${params.id}`)

            // }



        ]
    },
]);

export default router;