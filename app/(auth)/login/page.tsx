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
        } else {
            if (session?.status === 'loading') return
            signIn('discord')
        }
    })

    return (
        <>

        </>
    )
}