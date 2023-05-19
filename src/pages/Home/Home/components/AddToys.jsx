/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { AuthContext } from '../../../../Provider/AuthProvider';
import Swal from 'sweetalert2'

const AddToys = () => {
    const { user } = useContext(AuthContext)


    const handleAddToy = (event) => {
        event.preventDefault()
        const form = event.target;
        const toyUrl = form.toyUrl.value;
        const toyName = form.toyName.value;
        const quantity = form.quantity.value;
        const sellerName = form.sellerName.value;
        const email = form.email.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const subCategory = form.subCategory.value
        const details = form.details.value

        const toy = {
            toyUrl,
            toyName,
            quantity,
            sellerName,
            email,
            price,
            rating,
            subCategory,
            details

        }
        console.log(toy);

        fetch("http://localhost:5000/allToys", {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(toy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Toy Added Succesfully',
                        icon: 'success',
                        confirmButtonText: 'wow!'
                    })
                }
            })

    }


    return (
        <div className='bg-gradient-to-r from-[#4b4052] to-[#590f0f] p-4'>
            <h2 className='text-center text-orange-600 text-3xl'>Add a Toys</h2>

            <form onSubmit={handleAddToy} >
                {/* row1 */}
                <div className='flex p-2'>
                    <div className="form-control w-full mr-2">
                        <label className="label">
                            <span className="label-text text-white font-bold">PhotoUrl</span>
                        </label>
                        <label className="input-group input-group-vertical">
                            <input type="text" name="toyUrl" placeholder="Photo Url" className="input input-bordered w-full " />
                        </label>
                    </div>

                </div>
                {/* row2 */}
                <div className='flex p-2'>
                    <div className="form-control w-1/2 mr-2">
                        <label className="label">
                            <span className="label-text text-white font-bold">Toy Name</span>
                        </label>
                        <label className="input-group input-group-vertical">
                            <input type="text" name="toyName" placeholder="Toy name" className="input input-bordered w-full " />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text text-white font-bold">Available Quantity</span>
                        </label>
                        <label className="input-group input-group-vertical">
                            <input type="text" name="quantity" placeholder="Quantity" className="input input-bordered" />
                        </label>
                    </div>
                </div>

                {/* row3 */}
                <div className='flex p-2'>
                    <div className="form-control w-1/2 mr-2">
                        <label className="label">
                            <span className="label-text text-white font-bold">Seller Name</span>
                        </label>
                        <label className="input-group input-group-vertical">
                            <input type="text" name="sellerName" placeholder="Seller name" className="input input-bordered w-full " defaultValue={user?.displayName} />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text text-white font-bold">Email</span>
                        </label>
                        <label className="input-group input-group-vertical">
                            <input type="email" name="email" defaultValue={user?.email} placeholder="Email" className="input input-bordered" />
                        </label>
                    </div>
                </div>
                {/* row4 */}
                <div className='flex p-2'>
                    <div className="form-control w-1/3 mr-2">
                        <label className="label">
                            <span className="label-text text-white font-bold">Price</span>
                        </label>
                        <label className="input-group input-group-vertical">
                            <input type="text" name="price" placeholder="Price" className="input input-bordered w-full " />
                        </label>
                    </div>
                    <div className="form-control w-1/3">
                        <label className="label">
                            <span className="label-text text-white font-bold">Rating</span>
                        </label>
                        <label className="input-group input-group-vertical">
                            <input type="text" name="rating" placeholder="Rating" className="input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control w-1/3 ml-2">
                        <label className="label">
                            <span className="label-text text-white font-bold">Sub-Category</span>
                        </label>
                        <label className="input-group input-group-vertical">
                            <input type="text" name="subCategory" placeholder="SubCategory" className="input input-bordered" />
                        </label>
                    </div>
                </div>

                <div className="">
                    <div className="form-control md:w-ful">
                        <label className="label">
                            <span className="label-text text-white font-bold">Details</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name='details' placeholder="Details" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <input className="btn btn-primary btn-block mt-3 mt-2" type="submit" value="Add Toy" />

                </div>
            </form>

        </div >
    );
};

export default AddToys;