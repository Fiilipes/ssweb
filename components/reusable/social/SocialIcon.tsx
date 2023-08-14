import React from 'react'
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";

const SocialIcon = ({icon, alt, link, title}: { icon:any, alt:string, link:string|undefined, title:string }) => {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    {/*@ts-ignore*/}
                    <Link href={link} target={"_blank"} >
                        <Image src={icon} alt={alt} className={"w-4 h-4 mr-2 2xl:mr-[.6vw] 2xl:w-[1vw] 2xl:h-[1vw]"} />
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
