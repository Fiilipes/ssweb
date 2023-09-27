"use client"

import React, {useEffect} from 'react'
import Link from "next/link";
import { usePathname } from 'next/navigation';



const WebTitle = () => {

    const pathname = usePathname();
    const [webPart, setWebPart] = React.useState({
        name: "Survival Server",
        href: "/"
    })
    useEffect(() => {
        pathname.startsWith("/soutezetryhard") ? setWebPart({
            name: "Soutěže Tryhard",
            href: "/soutezetryhard"
        }) : setWebPart({
            name: "Survival Server",
            href: "/"
        })
    }, [pathname])

    return (
        <Link href={webPart.href} className={"font-bold 2xl:text-[18px] pt-[10px] pb-[8px] lg:pt-0 lg:pb-0"} style={{letterSpacing: "-1px"}}>
            {webPart.name}
        </Link>
    )
}
export default WebTitle
