'use client'

import { useState, useEffect } from "react"
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from "next/navigation"



export default function Login() {
    const session = useSession()
    const router = useRouter()
    const [data, setData] = useState({
        email: '',
        password: ''
    })


    useEffect(() => {
        if (session?.status === 'authenticated') {
            router.push('/')
        }
    })

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-10 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Your Company"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">

                    <h1>Sign into Discord below</h1>
                    <button onClick={() => signIn('discord')} className="bg-black text-white w-full">Sign In</button>

                </div>
            </div>
        </>
    )
}