import React from 'react'
import {signOut} from "next-auth/react";
import {Button} from "@/components/ui/button";

const SignOutButton = ({children}: {children: any}) => {
    return (
        <Button variant={"outline"} className={"mx-1"} onClick={() => {
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
