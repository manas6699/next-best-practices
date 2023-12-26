'use client' // Error components must be Client Components
import React from 'react'

 
export default function Error({error}: {error: Error}) {
    return (
        <div>
        <h1>{error.message}</h1>
        </div>
    )
}