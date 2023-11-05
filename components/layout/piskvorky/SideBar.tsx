"use client"

import React from 'react'
import Link from "next/link";
import {Button} from "@/components/ui/button";
import { usePathname } from 'next/navigation';
import {BookOpenCheck, PanelLeftClose, PanelRightClose, Target, Trophy} from 'lucide-react';


const links = [
    {
        name: "Přehled",
        href: "/piskvorky",
        icon: {
            small: <Target className={"w-4 h-4 mr-2 opacity-80"} />,
            large: <Target className={"w-6 h-6 opacity-80"} />
        }
    },

    {
        name: "Žebříček",
        href: "/piskvorky/leaderboard",
        icon: {
            small: <Trophy className={"w-4 h-4 mr-2 opacity-80"} />,
            large: <Trophy className={"w-6 h-6 opacity-80"} />
        }

    },
    {
        name: "Pravidla",
        href: "/piskvorky/pravidla",
        icon: {
            small: <BookOpenCheck className={"w-4 h-4 mr-2 opacity-80"} />,
            large: <BookOpenCheck className={"w-6 h-6 opacity-80"} />
        }

    },


]
const SideBar = () => {
    const pathname = usePathname();
    const [open, setOpen] = React.useState(true)


    return (
        <>
            <div className={`md:flex`} style={
                open?{
                    width: "288px",
                } : {
                    width: "fit-content",
                }
            }>

            </div>
            <div className={`flex-col hidden lg:flex transition-all duration-500 fixed pt-[37px] `} style={
                open?{
                    width: "288px",
                } : {
                    width: "fit-content",
                    left: "20px"
                }
            }>
                {links.map((link, i) => (
                    <Link href={link.href} className={"w-fit"} key={i}>
                        <Button variant={pathname === link.href || (link.href !== "/soutezetryhard" && pathname.startsWith(link.href)) ? "secondary" : "outline"} className={pathname === link.href ? `my-1 py-[16px] font-bold text-[#000] text-[16px]  h-[40px] transition-all duration-500 ` : `my-1 py-[16px] font-bold text-[#666] text-[16px]   h-[40px] transition-all duration-500`} style={
                            open?{
                                width: "192px",
                            } : {
                                width: "40px",
                                padding: "0"
                            }
                        }>
                            {open?link.icon.small:link.icon.large}
                            {open&&link.name}
                        </Button>
                    </Link>
                ))}

            </div>
            <Button onClick={() => setOpen(!open)} variant={"outline"} className={`my-1 font-bold text-[#000] p-0 text-[16px] w-[40px] h-[40px] fixed bottom-[30px] left-[20px]`}>
                {
                    open ? <PanelLeftClose className={"w-6 h-6 opacity-80"} /> : <PanelRightClose className={"w-6 h-6 opacity-80"} />
                }
            </Button>

        </>
    )
}
export default SideBar