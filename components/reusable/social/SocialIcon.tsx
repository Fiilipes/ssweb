import React from 'react'
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";

const SocialIcon = ({icon, alt, link, title}: { icon:any, alt:string, link:string|undefined, title:string }) => {
    return (
        <TooltipProvider>
            <Tooltip >
                <TooltipTrigger asChild>
                    {/*@ts-ignore*/}
                    <Link href={link} target={"_blank"} className={"h-full flex flex-col items-start justify-start"} >
                        <Image src={icon} alt={alt} className={"w-4 h-4 mr-2 fill-white  mt-[12px] lg:w-[16px] lg:h-[16px] opacity-60"} />
                    </Link>
                </TooltipTrigger>
                <TooltipContent>
                    <p>{title}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}
export default SocialIcon
