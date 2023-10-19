import Image from 'next/image'
import backgroundBlur from "../assets/img/backgroundBlur.png";
import React from "react";


import ExploreButton from "@/components/layout/homepage/Explore"
import Introduction from "@/components/layout/homepage/Introduction";
import Content from "@/components/layout/homepage/Content";


import {getServerSession} from "next-auth";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {UserCircle2} from "lucide-react";
import SignInButton from "@/components/reusable/auth/SignInButton";
import pages from "@/assets/settings/content/pages";
import Routes from "@/components/layout/homepage/Routes";


export default async function Home() {

    const session = await getServerSession()

    return (
        <main className="flex min-h-screen flex-col items-center justify-center lg:justify-start scroll-smooth">


            <div className={"flex flex-col items-center justify-start h-fit w-full z-10 my-[100px] lg:my-0"}>
                <h1 className={"text-[50px] lg:text-[96px] font-bold mt-[128px]"}>
                    {pages.homepage.title}
                </h1>
                <p className={"text-[15px] text-center lg:text-[20px] font-bold lg:font-medium"}>
                    {pages.homepage.description}
                </p>

                <div className={"mt-[40px] lg:mt-[48px] flex flex-row items-end"}>

                    <ExploreButton/>

                    {
                        session ?
                            <Link href={"/profil"}>
                                <Button variant={"outline"} className={"mx-1 2xl:px-[16px] 2xl:py-[20px] 2xl:mx-[6px] font-bold text-[#444] 2xl:text-[14px]"}>
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <UserCircle2 className={"h-4 w-4 2xl:h-[16px] 2xl:w-[16px] mr-2 2xl:mr-[12px]"} />
                                    Zobrazit profil
                                </Button>
                            </Link>
                            :
                            <SignInButton>
                                <Button variant={"outline"}  className={"mx-1 2xl:mx-[6px] font-bold text-[#444] 2xl:text-[14px]"}>
                                    <UserCircle2 className={"h-4 w-4 2xl:h-[16px] 2xl:w-[16px] mr-2 2xl:mr-[12px]"} />
                                    Připojte se
                                </Button>
                            </SignInButton>
                    }

                </div>
            </div>


            <Content />

            <Introduction />

            <Routes />

            <Image src={backgroundBlur} alt={"background"} className={"hidden lg:block absolute top-[0vw] z-0 opacity-70 w-[1040px] select-none"} />


        </main>
    )
}