"use client"
import React from 'react'

import {Button} from "@/components/ui/button";
import Link from "next/link";

const UserMenu = ({session}: {session:any}) => {
    return (
        <>
            <Link href={"/profil"}>
                <Button variant={"outline"}   className={"mx-1 2xl:px-[1vw] 2xl:py-[1.2vw] 2xl:mx-[.4vw] font-bold text-[#444] 2xl:text-[.9vw]"}>
                    {/* eslint-disable-next-line @next/next/no-img-element*/}
                    <img src={
                        //@ts-ignore
                        session?.image ? session?.image : ""} alt={"userImage"} className={"h-4 w-4 2xl:h-[1vw] 2xl:w-[1vw] mr-2 2xl:mr-[.6vw] rounded-full"} />
                    Profil
                </Button>
            </Link>
        </>

    )
}
export default UserMenu
