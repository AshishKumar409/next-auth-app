"use client"
import React from 'react'

type Props = {
    params: {
        id: string
    }
}

export default function page({ params }: Props) {
    return (
        <div className="max-w-lg mx-auto mt-10 p-6 text-gray-700 bg-white rounded-md shadow-md">
            <h2 className="text-2xl font-semibold mb-4">{params.id}</h2>

        </div>
    )
}
