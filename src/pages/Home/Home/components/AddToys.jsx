/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { AuthContext } from '../../../../Provider/AuthProvider';

const AddToys = () => {
    const { user } = useContext(AuthContext)
    console.log(user);
    return (
        <div className='bg-gradient-to-r from-[#4b4052] to-[#590f0f]'>
            <h2 className='text-center text-orange-600 text-3xl'>Add a Toys</h2>
            <form >
                {/* row>> */}
                <div className='flex p-2'>
                    <div className="form-control w-full mr-2">
                        <label className="label">
                            <span className="label-text text-white font-bold">PhotoUrl</span>
                        </label>
                        <label className="input-group input-group-vertical">
                            <input type="text" placeholder="Photo Url" className="input input-bordered w-full " />
                        </label>
                    </div>

                </div>
                {/* row>> */}
                <div className='flex p-2'>
                    <div className="form-control w-1/2 mr-2">
                        <label className="label">
                            <span className="label-text text-white font-bold">Toys Name</span>
                        </label>
                        <label className="input-group input-group-vertical">
                            <input type="text" placeholder="Toys name" className="input input-bordered w-full " />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text text-white font-bold">Available Quantity</span>
                        </label>
                        <label className="input-group input-group-vertical">
                            <input type="text" placeholder="Quantity" className="input input-bordered" />
                        </label>
                    </div>
                </div>
                {/* row>> */}
                <div className='flex p-2'>
                    <div className="form-control w-1/2 mr-2">
                        <label className="label">
                            <span className="label-text text-white font-bold">Seller Name</span>
                        </label>
                        <label className="input-group input-group-vertical">
                            <input type="text" placeholder="Seller name" className="input input-bordered w-full " defaultValue={user?.displayName} />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text text-white font-bold">Email</span>
                        </label>
                        <label className="input-group input-group-vertical">
                            <input type="email" defaultValue={user?.email} placeholder="Email" className="input input-bordered" />
                        </label>
                    </div>
                </div>
                {/* row>> */}
                <div className='flex p-2'>
                    <div className="form-control w-1/3 mr-2">
                        <label className="label">
                            <span className="label-text text-white font-bold">Price</span>
                        </label>
                        <label className="input-group input-group-vertical">
                            <input type="text" placeholder="Price" className="input input-bordered w-full " />
                        </label>
                    </div>
                    <div className="form-control w-1/3">
                        <label className="label">
                            <span className="label-text text-white font-bold">Rating</span>
                        </label>
                        <label className="input-group input-group-vertical">
                            <input type="text" placeholder="Rating" className="input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control w-1/3 ml-2">
                        <label className="label">
                            <span className="label-text text-white font-bold">Sub-Category</span>
                        </label>
                        <label className="input-group input-group-vertical">
                            <input type="text" placeholder="SubCategory" className="input input-bordered" />
                        </label>
                    </div>
                </div>
                {/* row>> */}
                <div className='flex p-2'>
                    <div className="form-control w-full mr-2">
                        <label className="label">
                            <span className="label-text text-white font-bold">Details </span>
                        </label>
                        <label className="input-group input-group-vertical">
                            <input type="text" placeholder="Details" className="input input-bordered w-full " />
                        </label>
                    </div>
                    {/* <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text text-white font-bold">Rating</span>
                        </label>
                        <label className="input-group input-group-vertical">
                            <input type="text" placeholder="Rating" className="input input-bordered" />
                        </label>
                    </div> */}
                </div>

            </form>

        </div>
    );
};

export default AddToys;