import React from 'react'
import { NavLink } from 'react-router-dom'

const AllLinks = () => {
    return (
        <div>
            <div className="space-x-20 text-center my-10 bg-gray-400 py-5">
                <button className="btn btn-warning">
                    <NavLink to={"/"}  >Home</NavLink>
                </button>
                <button className="btn btn-warning">
                    <NavLink to={"/addcoffee"}>Addcoffee</NavLink>
                </button>
                <button className="btn btn-warning">
                    <NavLink to={"/updateCoffee"}>UpdateCoffee</NavLink>
                </button>
                <button className="btn btn-warning">
                    <NavLink to={"/login"}>Log In</NavLink>
                </button>
                <button className="btn btn-warning">
                    <NavLink to={"/singup"}>Sing Up</NavLink>
                </button>
                <button className="btn btn-warning">
                    <NavLink to={"/users"}>Users</NavLink>
                </button>
            </div>
        </div>
    )
}

export default AllLinks
