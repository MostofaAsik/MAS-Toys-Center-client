/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../../Provider/AuthProvider';
import MyToy from './MyToy';
import Swal from 'sweetalert2';

const MyToys = () => {
    const { user } = useContext(AuthContext)
    const [myToys, setMyToys] = useState([])

    useEffect(() => {
        fetch(`https://toys-server-mostofaasik.vercel.app/myToys/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyToys(data)
            })
    }, [user])

    // console.log(myToys);

    const handleDelete = (_id) => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://toys-server-mostofaasik.vercel.app/deletetoy/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Toy has been deleted.',
                                'success'
                            )
                            const remaining = myToys.filter(toy => toy._id !== _id)
                            setMyToys(remaining)
                        }
                    })
            }
        })
    }



    return (
        <div className='bg-gradient-to-r from-[#871010] to-[#4e2c13] p-4'>
            <h2 className='text-center mb-2 hover:text-white'>MyToys:{myToys.length}</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>


                            <th>Seller</th>
                            <th>Toy image and Name </th>
                            <th>Sub Category</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            myToys.map(toy => <MyToy
                                key={toy._id}
                                toy={toy}
                                handleDelete={handleDelete}
                            ></MyToy>)
                        }




                    </tbody>



                </table>
            </div>
        </div>
    );
};

export default MyToys;