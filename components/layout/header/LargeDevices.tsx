"use client"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

import React from 'react'
import Link from "next/link";
import {LayoutPanelLeft} from "lucide-react";
import navigation from "@/assets/settings/content/navigation";
import {Badge} from "@/components/ui/badge";
import {CommandDialogDemo} from "@/components/layout/wrap/CommandMenu";



const NavMenu = () => {

    const [open, setOpen] = React.useState(false)
    return (
        <div>

            <NavigationMenu className={`z-50`}>
                <NavigationMenuList className={"items-start"}>

                    <NavigationMenuItem>
                        <NavigationMenuTrigger className={"bg-[rgba(255,255,255,0)] 2xl:px-[16px] 2xl:py-[20px] focus:bg-[rgba(255,255,255,0)] lg:text-[15px] font-semibold"}>{navigation.gettingStarted.title}</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid gap-[16px] lg:p-[20px] md:w-[400px] lg:w-[550px] lg:grid-cols-[.75fr_1fr]">
                                <li className="row-span-3">
                                    <NavigationMenuLink asChild>
                                        <Link
                                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 2xl:p-[32px] no-underline outline-none focus:shadow-md"
                                            href={navigation.gettingStarted.components.widget.link}
                                            scroll={true}
                                        >
                                            <LayoutPanelLeft className={"2xl:w-[64px] 2xl:h-[64px]"}/>
                                            <div className="mb-[8px] mt-[20px] text-[20px] font-medium">
                                                {navigation.gettingStarted.components.widget.title}
                                            </div>
                                            <p className="text-[15px] leading-tight text-muted-foreground">
                                                {navigation.gettingStarted.components.widget.content}
                                            </p>
                                        </Link>
                                    </NavigationMenuLink>
                                </li>
                                {
                                    navigation.gettingStarted.components.routes.map((route) => (
                                        // eslint-disable-next-line react/jsx-key
                                        <li>
                                            <NavigationMenuLink asChild>
                                                <Link href={route.link} className={"block select-none space-y-1 2xl:space-y-[8px] rounded-md p-3 2xl:p-[8px] leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"}>
                                                    <div className="text-[15px] font-medium leading-none">{route.title}</div>
                                                    <p className="line-clamp-2 text-[13px] leading-snug text-muted-foreground">
                                                        {route.content}
                                                    </p>
                                                </Link>
                                            </NavigationMenuLink>
                                        </li>
                                    ))
                                }

                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    {/*<NavigationMenuItem>*/}
                    {/*    <NavigationMenuTrigger className={"bg-[rgba(255,255,255,0)] 2xl:px-[1vw] 2xl:py-[1.2vw] focus:bg-[rgba(255,255,255,0)] 2xl:text-[.94vw]"}>{navigation.content.title}</NavigationMenuTrigger>*/}
                    {/*    <NavigationMenuContent>*/}
                    {/*        <ul className="grid w-[25vw] gap-3 p-4 2xl:p-[1.2vw] md:w-[30vw] md:grid-cols-2 lg:w-[35vw] ">*/}
                    {/*            /!* eslint-disable-next-line react/jsx-key *!/*/}
                    {/*            {navigation.content.components.routes.map((component) => (*/}
                    {/*                // eslint-disable-next-line react/jsx-key*/}
                    {/*                <li>*/}
                    {/*                    <NavigationMenuLink asChild>*/}
                    {/*                        <Link href={component.link} className={"block select-none space-y-1 2xl:space-y-[.6vw] rounded-md p-3 2xl:p-[.6vw] leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"}>*/}
                    {/*                            <div className="text-[.95vw] font-medium leading-none">{component.title}</div>*/}
                    {/*                            <p className="line-clamp-2 text-[.85vw] leading-snug text-muted-foreground">*/}
                    {/*                                {component.content}*/}
                    {/*                            </p>*/}
                    {/*                        </Link>*/}
                    {/*                    </NavigationMenuLink>*/}
                    {/*                </li>*/}
                    {/*            ))}*/}
                    {/*        </ul>*/}
                    {/*    </NavigationMenuContent>*/}
                    {/*</NavigationMenuItem>*/}
                    <div className={"flex flex-row items-center"}>
                        <NavigationMenuItem  onClick={() => setOpen(!open)}>
                            <div className={"font-semibold transition-colors hover:bg-accent hover:text-accent-foreground bg-[rgba(255,255,255,0)] focus:bg-[rgba(255,255,255,0)] h-10 rounded-md px-4 py-2 group inline-flex items-center justify-center 2xl:px-[16px] 2xl:py-[20px] lg:text-[15px] cursor-pointer "}>
                                Prozkoumat
                            </div>
                        </NavigationMenuItem>
                    </div>
                    <div className={"flex flex-row items-center"}>
                        <NavigationMenuItem>
                            <Link href={"/soutezetryhard"} legacyBehavior passHref>
                                <NavigationMenuLink className={"transition-colors font-semibold hover:bg-accent hover:text-accent-foreground bg-[rgba(255,255,255,0)] focus:bg-[rgba(255,255,255,0)] h-10 rounded-md px-4 py-2 group inline-flex items-center justify-center 2xl:px-[16px] 2xl:py-[20px] lg:text-[15px]"}>
                                    {/*<Badge variant={"secondary"} className={`animate-pulse mr-[.6vw]`}>*/}
                                    {/*    New*/}
                                    {/*</Badge>*/}
                                    <div>
                                        Soutěže Tryhard
                                    </div>


                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    </div>

                </NavigationMenuList>

            </NavigationMenu>
<CommandDialogDemo open={open} setOpen={setOpen}/>
        </div>
    )
}
export default NavMenu
