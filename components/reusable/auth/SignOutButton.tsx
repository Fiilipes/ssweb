import React from 'react'

import {signOut} from "next-auth/react";

import {Button} from "@/components/ui/button";

const SignOutButton = ({children}: {children: React.ReactNode}) => {
    return (
        <Button variant={"outline"} className={"mx-1 lg:text-[1vw] lg:px-[1vw] lg:py-[1.3vw]"} onClick={() => {
            signOut().then(
                () => {
                    window.location.href = "/"
                }
            )
        }}>
            {children}
        </Button>
    )
}
export default SignOutButton
