"use client"

import React from 'react'
import Link from "next/link";
import {Button} from "@/components/ui/button";
import { usePathname } from 'next/navigation';


const links = [
    {
        name: "Přehled",
        href: "/ms"
    },
    {
        name: "Jak začít",
        href: "/ms/start"
    },
    {
        name: "Informace",
        href: "/ms/info"
    },
    {
        name: "Pravidla",
        href: "/ms/pravidla"
    },
    {
        name: "Módy",
        href: "/ms/mods"
    }

]
const Navbar = () => {
    const pathname = usePathname();


    return (
        <div className={"w-[18vw] flex flex-col pt-[2.3vw]"}>
            {links.map((link, i) => (
                <Link href={link.href} key={i}>
                    <Button variant={pathname === link.href ? "secondary" : "outline"} className={pathname === link.href ? "my-1 py-[1vw] font-bold text-[#000] text-[1vw] w-[12vw] h-[2.5vw]" : "my-1 py-[1vw] font-bold text-[#666] text-[1vw] w-[12vw] h-[2.5vw]"}>
                        {link.name}
                    </Button>
                </Link>
            ))}
        </div>
    )
}
export default Navbar