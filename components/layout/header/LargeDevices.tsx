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

const components: { title: string; href: string; description: string }[] = [
    {
        title: "Obchod",
        href: "/obchod",
        description:
            "Místo plné Survival Server itemů",
    },
    {
        title: "Leaderboard",
        href: "/leaderboard",
        description:
            "Žebříček aktivních členů serveru",
    },
    {
        title: "Eventy",
        href: "/events",
        description:
            "Informace o všech eventech na serveru",
    },
    {
        title: "Pravidla",
        href: "/pravidla",
        description: "Každý člen serveru je povinný znát pravidla",
    },
    {
        title: "Informace",
        href: "/info",
        description:
            "Novinky a důležité zprávy ze serveru",
    },
    {
        title: "Zdroje",
        href: "/zdroje",
        description:
            "Odkazy na důležité stránky spojené se serverem",
    },
]



const NavMenu = () => {
    return (
        <div>

            <NavigationMenu className={"z-50"}>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className={"bg-[rgba(255,255,255,0)] 2xl:px-[1vw] 2xl:py-[1.2vw] focus:bg-[rgba(255,255,255,0)] 2xl:text-[.94vw]"}>Začít</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid gap-[1vw] 2xl:p-[1.2vw] md:w-[25vw] lg:w-[30vw] lg:grid-cols-[.75fr_1fr]">
                                <li className="row-span-3">
                                    <NavigationMenuLink asChild>
                                        <a
                                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 2xl:p-[2vw] no-underline outline-none focus:shadow-md"
                                            href="/"
                                        >
                                            <LayoutPanelLeft className={"2xl:w-[4vw] 2xl:h-[4vw]"}/>
                                            <div className="mb-[.6vw] mt-[1.2vw] text-[1.2vw] font-medium">
                                                Survival Server
                                            </div>
                                            <p className="text-[.9vw] leading-tight text-muted-foreground">
                                                Webová stránka sloužící jako komunitní portál pro uživatele Survival Serveru.
                                            </p>
                                        </a>
                                    </NavigationMenuLink>
                                </li>
                                <li>
                                    <NavigationMenuLink asChild>
                                        <div onClick={
                                            () => {
                                                window.scrollTo(
                                                    {
                                                        top: 500,
                                                        behavior: 'smooth'
                                                    }
                                                )
                                            }
                                        } className={"block select-none space-y-1 2xl:space-y-[.6vw] rounded-md p-3 2xl:p-[.6vw] leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"}>
                                            <div className="text-[.95vw] font-medium leading-none">Představení</div>
                                            <p className="line-clamp-2 text-[.85vw] leading-snug text-muted-foreground">
                                                Základní informace o webu a serveru.
                                            </p>
                                        </div>
                                    </NavigationMenuLink>
                                </li>
                                <li>
                                    <NavigationMenuLink asChild>
                                        <Link href={"/#content"} className={"block select-none space-y-1 2xl:space-y-[.6vw] rounded-md p-3 2xl:p-[.6vw] leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"}>
                                            <div className="text-[.95vw] font-medium leading-none">Obsah</div>
                                            <p className="line-clamp-2 text-[.85vw] leading-snug text-muted-foreground">
                                                Seznam všeho co Vám web může nabídnout.
                                            </p>
                                        </Link>
                                    </NavigationMenuLink>
                                </li>
                                <li>
                                    <NavigationMenuLink asChild>
                                        <Link href={"/docs"} className={"block select-none space-y-1 2xl:space-y-[.6vw] rounded-md p-3 2xl:p-[.6vw] leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"}>
                                            <div className="text-[.95vw] font-medium leading-none">Rozcestník</div>
                                            <p className="line-clamp-2 text-[.85vw] leading-snug text-muted-foreground">
                                                Chytře navržený rozcestník pro snadnou navigaci.
                                            </p>
                                        </Link>
                                    </NavigationMenuLink>
                                </li>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className={"bg-[rgba(255,255,255,0)] 2xl:px-[1vw] 2xl:py-[1.2vw] focus:bg-[rgba(255,255,255,0)] 2xl:text-[.94vw]"}>Obsah</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[25vw] gap-3 p-4 2xl:p-[1.2vw] md:w-[30vw] md:grid-cols-2 lg:w-[35vw] ">
                                {/* eslint-disable-next-line react/jsx-key */}
                                {components.map((component) => (
                                    // eslint-disable-next-line react/jsx-key
                                    <li>
                                        <NavigationMenuLink asChild>
                                            <Link href={component.href} className={"block select-none space-y-1 2xl:space-y-[.6vw] rounded-md p-3 2xl:p-[.6vw] leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"}>
                                                <div className="text-[.95vw] font-medium leading-none">{component.title}</div>
                                                <p className="line-clamp-2 text-[.85vw] leading-snug text-muted-foreground">
                                                    {component.description}
                                                </p>
                                            </Link>
                                        </NavigationMenuLink>
                                    </li>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/soutezetryhard" legacyBehavior passHref>
                            <NavigationMenuLink className={"transition-colors font-medium hover:bg-accent hover:text-accent-foreground bg-[rgba(255,255,255,0)] focus:bg-[rgba(255,255,255,0)] h-10 rounded-md px-4 py-2 group inline-flex items-center justify-center 2xl:px-[1vw] 2xl:py-[1.2vw] 2xl:text-[.94vw]"}>
                                Soutěže Tryhard
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>

        </div>
    )
}
export default NavMenu
