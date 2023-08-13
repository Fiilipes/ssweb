"use client"

import React from "react";

import {getSS} from "@/assets/settings/firebase";

import {useSession} from "next-auth/react";

import pages from "@/assets/settings/content/pages";

import {Separator} from "@/components/ui/separator";

import UserCard from "@/components/reusable/profil/UserCard";
import UserBadges from "@/components/reusable/profil/UserBadges";
import NotVerified from "@/components/reusable/discord/NotVerified";

export default function SoutezeTryhard() {

    const [verified, setVerified] = React.useState(null)

    const {data:session} = useSession()

    React.useEffect(
        () => {
            if (session) {
                getSS(["users"]).then((res: any) => {

                    // @ts-ignore
                    setVerified(res["users"].users.list.find((u:any) => u.discordID === session.id))

                })
            }
        }, [session]
    )

    return (
        <div className={"w-[90%] mx-auto"}>

            <div>
                <h1 className={"text-[3vw] font-bold"}>
                    {pages.profil.title}
                </h1>
                <p className={"font-medium text-[#222]"}>
                    {pages.profil.description}
                </p>
            </div>
            
            <Separator className={"my-4"}/>

            {
                verified !== false ? <>
                    <UserCard session={session} loading={verified === null}/>
                    <UserBadges session={session} loading={verified === null}/>
                </> : <>
                    <NotVerified />
                </>
            }




        </div>
    )
}