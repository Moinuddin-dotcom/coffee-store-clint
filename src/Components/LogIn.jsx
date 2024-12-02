import React, { useContext } from 'react'
import AllLinks from './AllLinks'
import { AuthContext } from './Provider/AuthProvider'


const LogIn = () => {
    const { loginUser } = useContext(AuthContext)


    const handleLoginForm = (e) => {
        e.preventDefault()
        console.log("Login success")

        const form = e.target
        const email = form.email.value
        const password = form.password.value
        const user = { email, password }
        console.log(user)

        loginUser(email, password)
            .then(async (result) => {
                console.log("User logged in", result.user)
                // Update last log in time
                const lastSignInTime = result?.user?.metadata?.lastSignInTime;
                const loginInfo = { email, lastSignInTime }

                const res = await fetch("https://coffe-store-server-sooty-gamma.vercel.app/user", {
                    method: "PATCH",
                    headers: { "content-type": "application/json" },
                    body: JSON.stringify(loginInfo)
                })
                const data = await res.json();
                console.log("Log in INFO updated in DB", data)





            })
            .catch((error) => {
                console.log("Error", error.message)
            })
    }

    return (
        <div>
            <AllLinks />
            <h1 className='font-bold text-2xl text-center' >Log in</h1>
            <div className='SingUpBox'>
                <div className="hero bg-base-200 ">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleLoginForm} className="card-body">

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
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LogIn
