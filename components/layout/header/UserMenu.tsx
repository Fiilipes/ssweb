"use client"
import React from 'react'

import {Button} from "@/components/ui/button";
import Link from "next/link";

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import navigation from "@/assets/settings/content/navigation";
import {LayoutPanelLeft, LogOut, User2} from "lucide-react";
import {signOut} from "next-auth/react";

const UserMenu = ({session}: {session:any}) => {
    return (
        <>
            <NavigationMenu className={"z-50 transform translate-x-[-1vw]"}>
                <NavigationMenuList className={"items-center flex flex-col justify-center"}>
                    <NavigationMenuItem className={""}>

                                <NavigationMenuTrigger className={"NOICON mx-1 2xl:mx-[.4vw] font-bold text-[#444]  border border-input bg-[rgba(255,255,255,0)] 2xl:px-[1vw] 2xl:py-[1.2vw] focus:bg-[rgba(255,255,255,0)] 2xl:text-[.94vw] transform translate-x-[1vw]"}>

                                {/* eslint-disable-next-line @next/next/no-img-element*/}
                                <img src={
                                    //@ts-ignore
                                    session?.image ? session?.image : ""} alt={"userImage"} className={"h-4 w-4 2xl:h-[1vw] 2xl:w-[1vw] mr-2 2xl:mr-[.6vw] rounded-full"} />
                                Profil
                                </NavigationMenuTrigger>

                        <NavigationMenuContent className={"w-[10vw] p-[.3vw]  "}>
                            <div className="w-[6vw] p-4 2xl:p-[.2vw] md:w-[8vw] lg:w-[8vw] ">

                                        <NavigationMenuLink asChild>
                                            <Link href={"/profil"} className={"select-none rounded-md lg:pl-[1vw] p-6 lg:p-[.6vw]  no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground flex flex-row items-center"}>
                                                <User2 className={"w-4 h-4 lg:w-[.9vw] lg:h-[.9vw] opacity-80 mr-2"}/>
                                                <div className="text-[.9vw] font-semibold">Zobrazit</div>
                                            </Link>
                                        </NavigationMenuLink>
                                        <NavigationMenuLink asChild>
                                            <div onClick={() => {
                                                signOut().then(
                                                    () => {
                                                        window.location.href = "/"
                                                    }
                                                )
                                            }} className={"cursor-pointer select-none rounded-md lg:pl-[1vw] p-6 lg:p-[.6vw]  no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground flex flex-row items-center"}>
                                                <LogOut className={"w-4 h-4 lg:w-[.9vw] lg:h-[.9vw] opacity-80 mr-2"}/>
                                                <div className="text-[.9vw] font-semibold">Odhlásit</div>
                                            </div>
                                        </NavigationMenuLink>
                            </div>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </>

    )
}
export default UserMenu
