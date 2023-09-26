"use client"

import axios from "axios"
import Link from "next/link"
import { useRouter } from "next/navigation"

import { useEffect, useState } from "react"
import toast, { Toaster } from "react-hot-toast"

export default function page() {

    // console.log("signup component")

    let router = useRouter()

    const [user, setUser] = useState({
        email: "",
        password: "",
        username: ""
    })

    const [buttonDisabled, setButtonDisabled] = useState(true)
    const [loading, setLoading] = useState(false)
    // const notify = () => toast('Here is your toast.', { duration: 2000 });

    let onSignUp = async () => {
        console.log("can able to click")
        try {

            setLoading(true)
            let response = await axios.post("/api/users/signup", user)
            toast.success("Signup Success")
            router.push("/login")
            console.log("Signup success", response.data)

        } catch (error: any) {
            // console.log(error)
            toast.error(error.response.data.message, { duration: 2000 })
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (user.username.length > 0 && user.email.length > 0 && user.password.length > 0) {
            setButtonDisabled(false)
        } else {
            setButtonDisabled(true)
        }

    }, [user])
    return (

        <div className="flex justify-center items-center h-screen">

            <div className='w-1/3 max-w-lg mx-auto mt-10 p-6 bg-white rounded-md text-gray-700 shadow-md'>
                <h1 className="text-2xl text-center  font-semibold mb-4">
                    {loading ? "Signup......." : "Signup"}
                </h1>

                <div className="mb-4">

                    <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">Username</label>
                    <input
                        autoComplete="on"
                        type="text"
                        autoFocus
                        id="username"
                        name="username"
                        value={user.username}
                        onChange={e => { setUser({ ...user, username: e.target.value }) }}
                        placeholder="Username"
                        className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    />
                </div>
                <div className="mb-4">

                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                    <input
                        autoComplete="on"
                        type="email"
                        id="email"
                        name="email"
                        value={user.email}
                        onChange={e => { setUser({ ...user, email: e.target.value }) }}
                        placeholder="Email"
                        className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={user.password}
                        onChange={e => { setUser({ ...user, password: e.target.value }) }}
                        placeholder="Password"
                        className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    />
                </div>

                <button
                    type="submit"
                    onClick={onSignUp}
                    disabled={buttonDisabled}
                    className={buttonDisabled ? "w-full py-2 bg-gray-300  text-white rounded-md" : "w-full py-2 bg-blue-500  text-white rounded-md hover:bg-blue-700"}
                >
                    Sign Up
                </button>

                {/* <button onClick={notify}>Make me a toast</button> */}



                <p className="mt-4 text-center">
                    Already have an account?{' '}
                    <Link href="/login" className="text-blue-500">
                        Log In
                    </Link>
                </p>

            </div>
            <Toaster />
        </div>

    )
}
