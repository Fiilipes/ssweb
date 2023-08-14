import React from 'react'
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import imgGithub from "@/assets/img/github.svg";
import imgDiscord from "@/assets/img/discord.svg";
import {Button} from "@/components/ui/button";
import {UserCircle2} from "lucide-react";
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/(auth)/api/auth/[...nextauth]/route'

import SignInButton from "@/components/reusable/auth/SignInButton";
import SmallDevices from "@/components/layout/header/SmallDevices";
import LargeDevices from "@/components/layout/header/LargeDevices";

const Header = async () => {

    // @ts-ignore
    const session = await getServerSession(authOptions)

    return (
        <>
            <header className={"fixed z-50 flex flex-row justify-between w-[100%]   px-[5vw]  pt-[2.2vw] pb-[1vw]"} style={
                {
                    backdropFilter: "blur(12px)",
                    backgroundColor: "rgba(255,255,255,.7)",

                }
            }>

                <Link href={"/"} className={"font-bold 2xl:text-[1.1vw]"} style={
                    {
                        letterSpacing: "-1px"
                    }
                }>
                    Survival Server
                </Link>



                <div className={"flex-row w-fit hidden lg:flex 2xl:px-[.8vw] items-center"}>
                    <LargeDevices />
                    <div className={"2xl:ml-[5vw] 2xl:mr-[1.2vw] flex flex-row items-center"}>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Link href={"https://github.com/Fiilipes/SurvivalServer-Web"} target={"_blank"} >
                                        <Image src={imgGithub} alt={"github"} className={"w-4 h-4 mr-2 2xl:mr-[.6vw] 2xl:w-[1vw] 2xl:h-[1vw]"} />
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Github repository</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Link href={"https://discord.gg/QAK5SxQUV5"} target={"_blank"} >
                                        <Image src={imgDiscord} alt={"discord"} className={"w-4 h-4 mr-2 2xl:mr-[.6vw] 2xl:w-[1vw] 2xl:h-[1vw]"} />
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Discord server</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>

                    </div>
                    {
                        !session ? <>
                            <SignInButton>
                                <Button variant={"outline"}  className={"mx-1 2xl:mx-[.4vw] font-bold text-[#444] 2xl:text-[.9vw]"}>
                                    <UserCircle2 className={"h-4 w-4 2xl:h-[1vw] 2xl:w-[1vw] mr-2 2xl:mr-[.8vw]"} />
                                    Jump In
                                </Button>
                            </SignInButton>
                        </> : <>
                            <Link href={"/profil"}>
                                <Button variant={"outline"} className={"mx-1 2xl:px-[1vw] 2xl:py-[1.2vw] 2xl:mx-[.4vw] font-bold text-[#444] 2xl:text-[.9vw]"}>
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src={session?.user?.image ? session?.user?.image : ""} alt={"userImage"} className={"h-4 w-4 2xl:h-[1vw] 2xl:w-[1vw] mr-2 2xl:mr-[.6vw] rounded-full"} />
                                    Profil
                                </Button>
                            </Link>
                        </>
                    }
                </div>
                <SmallDevices />
            </header>
            <div className={"h-[12vh]"}>

            </div>
        </>
    )
}
export default Header
