import React, { useContext } from 'react'
import AllLinks from './AllLinks'
import AuthProvider, { AuthContext } from './Provider/AuthProvider'

const SingUp = () => {
    const { createUser } = useContext(AuthContext)


    const handleSingupForm = (e) => {
        e.preventDefault();
        console.log("From added")

        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        const user = { name, email, password }
        console.log(user)

        createUser(email, password)
            .then(async (result) => {
                console.log("User created on FB", result.user)
                const createdAt = result?.user?.metadata?.creationTime
                const newUser = { name, email, createdAt }

                // Save the user info to the database
                const res = await fetch("https://coffe-store-server-sooty-gamma.vercel.app/user", {
                    method: "POST",
                    headers: { "content-type": "application/json" },
                    body: JSON.stringify(newUser)
                })
                const data = await res.json()
                console.log("User created on DB", data)
                if (data.insertedId) {
                    alert('User created successfully');
                }

            })
            .catch((error) => {
                console.log("Allready added", error.message)
            })
    }

    return (
        <div>
            <AllLinks />
            <h1 className='font-bold text-2xl text-center' >Sing up</h1>
            <div className='SingUpBox'>
                <div className="hero bg-base-200 ">

                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleSingupForm} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" name='name' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sing up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingUp
