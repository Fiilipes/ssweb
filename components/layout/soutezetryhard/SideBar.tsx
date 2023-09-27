"use client"

import React from 'react'
import Link from "next/link";
import {Button} from "@/components/ui/button";
import { usePathname } from 'next/navigation';


const links = [
    {
        name: "Přehled",
        href: "/soutezetryhard"
    },
    // {
    //     name: "Informace",
    //     href: "/soutezetryhard/info"
    // },
    // {
    //     name: "Zdroje",
    //     href: "/soutezetryhard/zdroje"
    // },
    {
        name: "Události",
        href: "/soutezetryhard/udalosti"
    },
    // {
    //     name: "PSF",
    //     href: "/soutezetryhard/psf"
    // },
    // {
    //     name: "Váš status",
    //     href: "/soutezetryhard/status"
    // },

]
const Navbar = () => {
    const pathname = usePathname();


    return (
        <>
            <div className={"w-[288px] mx-0 px-0 hidden md:flex"}>

            </div>
            <div className={"w-[288px] flex-col hidden lg:flex fixed pt-[37px] "}>
                {links.map((link, i) => (
                    <Link href={link.href} className={"w-fit"} key={i}>
                        <Button variant={pathname === link.href || (link.href !== "/soutezetryhard" && pathname.startsWith(link.href)) ? "secondary" : "outline"} className={pathname === link.href ? "my-1 py-[16px] font-bold text-[#000] text-[16px] w-[192px] h-[40px]" : "my-1 py-[16px] font-bold text-[#666] text-[16px] w-[192px] h-[40px]"}>
                            {link.name}
                        </Button>
                    </Link>
                ))}
            </div>
        </>
    )
}
export default Navbar