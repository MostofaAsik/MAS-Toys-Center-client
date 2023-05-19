/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../../Provider/AuthProvider';
import MyToy from './MyToy';

const MyToys = () => {
    const { user } = useContext(AuthContext)
    const [myToys, setMyToys] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/myToys/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyToys(data)
            })
    }, [user])

    console.log(myToys);

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
                            ></MyToy>)
                        }




                    </tbody>



                </table>
            </div>
        </div>
    );
};

export default MyToys;