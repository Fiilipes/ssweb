import React from 'react'

import {Button} from "@/components/ui/button";

import Link from "next/link";

const ShowUserProfile = ({children, discordId}: {children: React.ReactNode, discordId: string}) => {
    return (
        <Link href={`https://discord.com/users/${discordId}`} target={"_blank"}>
            <Button className={"mx-1 lg:text-[1vw] lg:px-[1vw] lg:py-[1.3vw]"} variant={"secondary"}>
                {children}
            </Button>
        </Link>
    )
}
export default ShowUserProfile
