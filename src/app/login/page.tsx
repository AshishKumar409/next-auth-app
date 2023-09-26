"use client"

import axios from "axios"
import Link from "next/link"
import { useState } from "react"

export default function page() {

    console.log("login component")

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    let onLogin = async () => {

    }
    return (

        <div className="flex justify-center items-center h-screen">

            <div className='w-1/3 max-w-lg mx-auto mt-10 p-6 bg-white rounded-md text-gray-700 shadow-md'>
                <h1 className="text-2xl text-center  font-semibold mb-4">
                    Login
                </h1>


                <div className="mb-4">

                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                    <input
                        autoFocus
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
                    onClick={onLogin}
                    className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
                >
                    Log In
                </button>
                <p className="mt-4 text-center">
                    Don't have an account?{' '}
                    <Link href="/signup" className="text-blue-500">
                        Sign Up
                    </Link>
                </p>

            </div>
        </div>

    )
}
