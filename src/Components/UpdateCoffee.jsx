import React from 'react'
import AllLinks from './AllLinks'
import Swal from 'sweetalert2'
import { useLoaderData } from 'react-router-dom'

const UpdateCoffee = () => {
    const updateCoffeeCards = useLoaderData()
    const { _id, name, quantity, supplier, taste, category, details, photo } = updateCoffeeCards



    const handleUpdateCoffee = async (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const quantity = form.quantity.value
        const supplier = form.supplier.value
        const taste = form.taste.value
        const category = form.category.value
        const details = form.details.value
        const photo = form.photo.value

        const updatedCoffee = { name, quantity, supplier, taste, category, details, photo }
        console.log(updatedCoffee)
        // e.target.reset()
        // Send data to server
        const res = await fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'PUT',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(updatedCoffee)
        })
        const data = await res.json()
        console.log(data)
        if (data.insertedId) {
            Swal.fire({
                title: 'success!',
                text: 'Coffee updated successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
            })
        }
    }
    return (
        <div>
            <AllLinks />
            <h1 className='text-center text-4xl font-bold'>Update coffee: {name}</h1>
            <form onSubmit={handleUpdateCoffee} >
                <div className='max-w-[70vw] mx-auto my-10 p-5 bg-gray-300 flex justify-around gap-5'>
                    {/*  Coffe Name */}
                    <label className="input input-bordered flex items-center gap-2 w-1/2">
                        Coffee Name:
                        <input type="text" name='name' className="grow " defaultValue={name} placeholder="name" />
                    </label>
                    {/* Available quantity */}
                    <label className="input input-bordered flex items-center gap-2 w-1/2">
                        Available quantity:
                        <input type="text" name='quantity' className="grow" defaultValue={quantity} placeholder="Available quantity" />
                    </label>
                </div>
                <div className='max-w-[70vw] mx-auto my-10 p-5 bg-gray-300 flex justify-around gap-5'>
                    {/*  Supplier Name */}
                    <label className="input input-bordered flex items-center gap-2 w-1/2">
                        Supplier Name:
                        <input type="text" name='supplier' className="grow" defaultValue={supplier} placeholder="Supplier" />
                    </label>
                    {/* Taste */}
                    <label className="input input-bordered flex items-center gap-2 w-1/2">
                        Taste:
                        <input type="text" name='taste' className="grow" defaultValue={taste} placeholder="Taste" />
                    </label>
                </div>
                <div className='max-w-[70vw] mx-auto my-10 p-5 bg-gray-300 flex justify-around gap-5'>
                    {/*  Category */}
                    <label className="input input-bordered flex items-center gap-2 w-1/2">
                        Category:
                        <input type="text" name='category' className="grow" defaultValue={category} placeholder="Category" />
                    </label>
                    {/* Details */}
                    <label className="input input-bordered flex items-center gap-2 w-1/2">
                        Details:
                        <input type="text" name='details' className="grow" defaultValue={details} placeholder="Details" />
                    </label>
                </div>
                <div className='max-w-[70vw] mx-auto my-10 p-5 bg-gray-300 flex justify-around gap-5'>
                    {/* Photo URL */}
                    <label className="input input-bordered flex items-center gap-2 w-full">
                        Photo URL:
                        <input type="text" name='photo' className="grow" defaultValue={photo} placeholder="Photo URL" />
                    </label>
                </div>
                <div className='max-w-[70vw] mx-auto'>
                    <input type="submit" value="Add Coffee" className='btn btn-block btn-warning' />
                </div>
            </form>
        </div>
    )
}

export default UpdateCoffee
