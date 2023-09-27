import React from 'react'

import {Button} from "@/components/ui/button";

import Link from "next/link";

const ShowUserProfile = ({children, discordId}: {children: React.ReactNode, discordId: string}) => {
    return (
        <Link href={`https://discord.com/users/${discordId}`} target={"_blank"}>
            <Button className={"mx-1 lg:text-[14px] lg:px-[16px] lg:py-[21px]"} variant={"secondary"}>
                {children}
            </Button>
        </Link>
    )
}
export default ShowUserProfile
