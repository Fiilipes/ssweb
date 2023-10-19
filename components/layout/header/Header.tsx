import React from 'react'
import Link from "next/link";
import imgGithub from "@/assets/img/github.svg";
import imgDiscord from "@/assets/img/discord.svg";
import imgWigym from "@/assets/img/wigym.svg";
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

import UserMenu from './UserMenu';
import {ThemeSwitcher} from "@/components/layout/header/ThemeSwitcher";
import WebTitle from "@/components/layout/header/WebTitle";
const Header = async () => {

    // @ts-ignore
    const session = await getServerSession(authOptions)




    return (
        <>
            <header className={"fixed z-50 flex flex-row justify-between w-[100vw] ml-0 px-[20px] pt-[10px] pb-[5px] lg:px-[5vw] lg:pt-[36px] lg:pb-[16px] backdrop-blur-xl bg-slate-50/70 dark:bg-[#0d1117]/70"}>

                <WebTitle />

                <section className={"flex-row w-fit hidden lg:flex 2xl:px-[12px] items-start h-full"}>
                    <LargeDevices />
                    {/*<section className={"lg:ml-[30px] lg:mr-[20px] flex flex-row h-full"}>*/}
                    {/*    /!*<SocialIcon icon={imgDiscord} alt={"discord"} link={discordServers.find(server => server.name === "Survival Server")?.link ?  discordServers.find(server => server.name === "Survival Server")?.link : ""} title={"Discord server"} />*!/*/}
                    {/*    /!*<SocialIcon icon={imgWigym} alt={"wigym"} link={"https://wigym.cz"} title={"Wichterlovo Gymnázium"} />*!/*/}

                    {/*</section>*/}
                    {
                        !session ?
                            <SignInButton>
                                <Button variant={"outline"}  className={"mx-1 lg:mx-[6px] font-bold text-[#444] lg:text-[14px]"}>
                                    <UserCircle2 className={"h-4 w-4 2xl:h-[16px] 2xl:w-[16px] mr-2 2xl:mr-[12px]"} />
                                    Staňte se členem
                                </Button>
                            </SignInButton>
                            :

                        <UserMenu  session={session}/>
                    }
                </section>
                <SmallDevices session={session} />
            </header>
            <HeightGap height={"h-[120px]"} />
        </>
    )
}
export default Header
