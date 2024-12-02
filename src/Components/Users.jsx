import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import AllLinks from './AllLinks'
import Swal from 'sweetalert2'

const Users = () => {
    const singupUsers = useLoaderData()
    const [users, setusers] = useState(singupUsers)

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


                // Delete operation
                const res = await fetch(`https://coffe-store-server-sooty-gamma.vercel.app/user/${_id}`,
                    { method: "DELETE" }
                )
                const data = await res.json()
                console.log(data)
                if (data.deletedCount) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "User INFO has been deleted.",
                        icon: "success"
                    });
                    const remaning = users.filter(singleUser => singleUser._id !== _id)
                    setusers(remaning)
                }
            }
        });
    }



    return (
        <div>
            <AllLinks />
            <h1 className='font-bold text-2xl text-center'>Users here: {users.length} </h1>
            <div className="table max-w-[80vw] mx-auto">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Created At</th>
                                <th>Last LogIn Time</th>
                                <th>Edite</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map(user =>
                                    <tr className='hover' key={user._id}>
                                        <th>*</th>
                                        <td>{user.name}</td>
                                        <td> {user.email} </td>
                                        <td>{user.createdAt}</td>
                                        <td>{user.lastSignInTime}</td>
                                        <td>
                                            <button className="btn">E</button>
                                        </td>
                                        <td>
                                            <button
                                                onClick={() => handleDelete(user._id)}
                                                className="btn">X</button>
                                        </td>

                                    </tr>
                                )
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Users
