import React, { useState } from 'react'
import { FcDeleteRow } from 'react-icons/fc'
import { FiEdit } from 'react-icons/fi'
import { HiOutlineViewfinderCircle } from 'react-icons/hi2'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

const CoffeDetails = ({ coffeeDetails, removedCoffee, setRemovedCoffee }) => {
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffeeDetails


    const handleDelete = (_id) => {
        console.log(_id)

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {

                const res = await fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE'
                })
                const data = await res.json();
                console.log(data)
                if (data.deletedCount > 0) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    })
                    const remaining = removedCoffee.filter(remove => remove._id !== _id)
                    setRemovedCoffee(remaining)
                }
            }
        });
    }


    return (
        <div>
            <div className="card card-side border-2 space-x-2">
                <figure>
                    <img
                        className='w-[600px] h-[300px]'
                        src={photo}
                        alt="coffe photp" />
                </figure>
                <div className="flex justify-between w-full pr-2">
                    <div className='text-gray-600 space-y-2'>
                        <h2 className="card-title">{name}</h2>
                        <p>Quantity: {quantity}</p>
                        <p>Supplier: {supplier}</p>
                        <p>Taste: {taste}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <div className="join join-vertical">
                            <button className="btn join-item">
                                <HiOutlineViewfinderCircle className='text-2xl hover:text-4xl' />
                            </button>
                            <Link to={`/UpdateCoffee/${_id}`}>
                                <button className="btn join-item">
                                    <FiEdit className='text-2xl hover:text-4xl' />
                                </button>
                            </Link>
                            <button
                                onClick={() => handleDelete(_id)}
                                className="btn join-item">
                                <FcDeleteRow className='text-2xl hover:text-4xl' />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoffeDetails
