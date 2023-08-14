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
import discordServers from "@/assets/settings/content/discordServers";
import SocialIcon from "@/components/reusable/social/SocialIcon";
import HeightGap from "@/components/reusable/composition/HeightGap";

const Header = async () => {

    // @ts-ignore
    const session = await getServerSession(authOptions)



    return (
        <>
            <header className={"fixed z-50 flex flex-row justify-between w-[100%]   px-[5vw]  pt-[2.2vw] pb-[1vw]"} style={{backdropFilter: "blur(12px)", backgroundColor: "rgba(255,255,255,.7)"}}>

                <Link href={"/"} className={"font-bold 2xl:text-[1.1vw]"} style={{letterSpacing: "-1px"}}>
                    Survival Server
                </Link>

                <section className={"flex-row w-fit hidden lg:flex 2xl:px-[.8vw] items-center"}>
                    <LargeDevices />
                    <section className={"2xl:ml-[5vw] 2xl:mr-[1.2vw] flex flex-row items-center"}>

                        <SocialIcon icon={imgGithub} alt={"github"} link={"https://github.com/Fiilipes/ssweb"} title={"Github repository"} />
                        <SocialIcon icon={imgDiscord} alt={"discord"} link={discordServers.find(server => server.name === "Survival Server")?.link ?  discordServers.find(server => server.name === "Survival Server")?.link : ""} title={"Discord server"} />

                    </section>
                    {
                        !session ?
                            <SignInButton>
                                <Button variant={"outline"}  className={"mx-1 2xl:mx-[.4vw] font-bold text-[#444] 2xl:text-[.9vw]"}>
                                    <UserCircle2 className={"h-4 w-4 2xl:h-[1vw] 2xl:w-[1vw] mr-2 2xl:mr-[.8vw]"} />
                                    Staňte se členem
                                </Button>
                            </SignInButton>
                            :
                            <Link href={"/profil"}>
                                <Button variant={"outline"} className={"mx-1 2xl:px-[1vw] 2xl:py-[1.2vw] 2xl:mx-[.4vw] font-bold text-[#444] 2xl:text-[.9vw]"}>
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src={session?.user?.image ? session?.user?.image : ""} alt={"userImage"} className={"h-4 w-4 2xl:h-[1vw] 2xl:w-[1vw] mr-2 2xl:mr-[.6vw] rounded-full"} />
                                    Profil
                                </Button>
                            </Link>
                    }
                </section>
                <SmallDevices session={session} />
            </header>
            <HeightGap height={"h-[8vw]"} />
        </>
    )
}
export default Header
