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


export default async function Home() {

    const session = await getServerSession()

  return (
      <main className="flex min-h-screen flex-col items-center justify-start scroll-smooth">


        <div className={"flex flex-col items-center justify-start h-fit w-full z-10"}>
          <h1 className={"text-[6vw] font-bold mt-[8vw]"}>
              {pages.homepage.title}
          </h1>
          <p className={"text-[1.2vw] font-medium"}>
              {pages.homepage.description}
          </p>

          <div className={"mt-16"}>

            <ExploreButton/>

              {
                  session ?
                      <Link href={"/profil"}>
                          <Button variant={"outline"} className={"mx-1 2xl:px-[1vw] 2xl:py-[1.2vw] 2xl:mx-[.4vw] font-bold text-[#444] 2xl:text-[.9vw]"}>
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <UserCircle2 className={"h-4 w-4 2xl:h-[1vw] 2xl:w-[1vw] mr-2 2xl:mr-[.8vw]"} />
                              Zobrazit profil
                          </Button>
                      </Link>
                      :
                      <SignInButton>
                          <Button variant={"outline"}  className={"mx-1 2xl:mx-[.4vw] font-bold text-[#444] 2xl:text-[.9vw]"}>
                              <UserCircle2 className={"h-4 w-4 2xl:h-[1vw] 2xl:w-[1vw] mr-2 2xl:mr-[.8vw]"} />
                              Jump In
                          </Button>
                      </SignInButton>
              }

          </div>
        </div>

        <Image src={backgroundBlur} alt={"background"} className={"absolute top-[8vw] z-0 opacity-60 w-[45vw]"} />

        <Content />

        <Introduction />

      </main>
  )
}
