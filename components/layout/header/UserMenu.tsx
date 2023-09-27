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
            <NavigationMenu className={"z-50 transform translate-x-[-16px]"}>
                <NavigationMenuList className={"items-center flex flex-col justify-center"}>
                    <NavigationMenuItem className={""}>

                                <NavigationMenuTrigger className={"NOICON mx-1 2xl:mx-[6px] font-bold text-[#444] dark:text-[#bbb]  border border-input bg-white dark:bg-accent   2xl:px-[16px] 2xl:py-[20px] focus:bg-[rgba(255,255,255,1)] 2xl:text-[15px] transform translate-x-[16px] "}>

                                {/* eslint-disable-next-line @next/next/no-img-element*/}
                                <img src={
                                    //@ts-ignore
                                    session?.image ? session?.image : ""} alt={"userImage"} className={"h-4 w-4 2xl:h-[16px] 2xl:w-[16px] mr-2 2xl:mr-[8px] rounded-full"} />
                                Profil
                                </NavigationMenuTrigger>

                        <NavigationMenuContent className={"w-[160px] p-[5px]  "}>
                            <div className="w-fit p-4 lg:p-[3px]">

                                        <NavigationMenuLink asChild>
                                            <Link href={"/profil"} className={"select-none rounded-md lg:pl-[16px] lg:pr-[26px] p-6 lg:p-[9px] w-fit no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground flex flex-row items-center"}>
                                                <User2 className={"w-4 h-4 lg:w-[14px] lg:h-[14px] opacity-80 mr-2"}/>
                                                <div className="text-[14px] font-semibold">Zobrazit</div>
                                            </Link>
                                        </NavigationMenuLink>
                                        <NavigationMenuLink asChild>
                                            <div onClick={() => {
                                                signOut().then(
                                                    () => {
                                                        window.location.href = "/"
                                                    }
                                                )
                                            }} className={"cursor-pointer select-none rounded-md lg:pl-[16px] p-6 lg:p-[9px]  no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground flex flex-row items-center"}>
                                                <LogOut className={"w-4 h-4 lg:w-[14px] lg:h-[14px] opacity-80 mr-2"}/>
                                                <div className="text-[14px] font-semibold">Odhlásit</div>
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
