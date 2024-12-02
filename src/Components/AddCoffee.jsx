import React from 'react'
import Swal from 'sweetalert2'
import AllLinks from './AllLinks'


const AddCoffee = () => {
    const handleAddCoffe = async (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const quantity = form.quantity.value
        const supplier = form.supplier.value
        const taste = form.taste.value
        const category = form.category.value
        const details = form.details.value
        const photo = form.photo.value

        const formData = { name, quantity, supplier, taste, category, details, photo }
        console.log(formData)
        // e.target.reset()
        // Send data to server
        const res = await fetch('https://coffe-store-server-sooty-gamma.vercel.app/coffee', {
            method: 'POST',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(formData)
        })
        const data = await res.json()
        console.log(data)
        if (data.insertedId) {
            Swal.fire({
                title: 'success!',
                text: 'Coffee added successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
            })
        }
    }
    return (
        <div>
             <AllLinks />
            <h1 className='text-center text-4xl font-bold'>Add coffee</h1>
            <form onSubmit={handleAddCoffe} >
                <div className='max-w-[70vw] mx-auto my-10 p-5 bg-gray-300 flex justify-around gap-5'>
                    {/*  Coffe Name */}
                    <label className="input input-bordered flex items-center gap-2 w-1/2">
                        Coffee Name:
                        <input type="text" name='name' className="grow " placeholder="name" />
                    </label>
                    {/* Available quantity */}
                    <label className="input input-bordered flex items-center gap-2 w-1/2">
                        Available quantity:
                        <input type="text" name='quantity' className="grow" placeholder="Available quantity" />
                    </label>
                </div>
                <div className='max-w-[70vw] mx-auto my-10 p-5 bg-gray-300 flex justify-around gap-5'>
                    {/*  Supplier Name */}
                    <label className="input input-bordered flex items-center gap-2 w-1/2">
                        Supplier Name:
                        <input type="text" name='supplier' className="grow" placeholder="Supplier" />
                    </label>
                    {/* Taste */}
                    <label className="input input-bordered flex items-center gap-2 w-1/2">
                        Taste:
                        <input type="text" name='taste' className="grow" placeholder="Taste" />
                    </label>
                </div>
                <div className='max-w-[70vw] mx-auto my-10 p-5 bg-gray-300 flex justify-around gap-5'>
                    {/*  Category */}
                    <label className="input input-bordered flex items-center gap-2 w-1/2">
                        Category:
                        <input type="text" name='category' className="grow" placeholder="Category" />
                    </label>
                    {/* Details */}
                    <label className="input input-bordered flex items-center gap-2 w-1/2">
                        Details:
                        <input type="text" name='details' className="grow" placeholder="Details" />
                    </label>
                </div>
                <div className='max-w-[70vw] mx-auto my-10 p-5 bg-gray-300 flex justify-around gap-5'>
                    {/* Photo URL */}
                    <label className="input input-bordered flex items-center gap-2 w-full">
                        Photo URL:
                        <input type="text" name='photo' className="grow" placeholder="Photo URL" />
                    </label>
                </div>
                <div className='max-w-[70vw] mx-auto'>
                    <input type="submit" value="Add Coffee" className='btn btn-block btn-warning' />
                </div>
            </form>
        </div>
    )
}

export default AddCoffee
