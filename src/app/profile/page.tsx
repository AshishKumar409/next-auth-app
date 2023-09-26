"use client"
import React from 'react'

export default function page() {
    return (
        <div className="max-w-lg mx-auto mt-10 p-6 text-gray-700 bg-white rounded-md shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Profile</h2>
            <div className="mb-4">
                <label className="block  text-sm font-bold mb-2">Name</label>
                <p className="text-gray-900 text-lg">John Doe</p>
            </div>
            <div className="mb-4">
                <label className="block  text-sm font-bold mb-2">Email</label>
                <p className="text-gray-900 text-lg">john.doe@example.com</p>
            </div>
            <div className="mb-6">
                <label className="block  text-sm font-bold mb-2">Bio</label>
                <p className="text-gray-900">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </div>
    )
}
