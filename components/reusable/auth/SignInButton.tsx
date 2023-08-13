"use client"

import React from 'react'
import {signIn} from "next-auth/react";

const SignInButton = ({children}:{children:any}) => {
    return (
        <div onClick={() => {signIn('discord')}}>
            {children}
        </div>
    )
}
export default SignInButton
