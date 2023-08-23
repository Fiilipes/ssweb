"use client"

import React from 'react'
import { getSS } from "@/assets/settings/firebase";
import {useSession} from "next-auth/react";
import NotVerifiedWithServerCard from "@/components/reusable/discord/NotVerifiedWithServerCard";
import discordServers from "@/assets/settings/content/discordServers";
import PageTitle from "@/components/reusable/composition/PageTitle";
import pages from "@/assets/settings/content/pages";
import PageContentWrap from "@/components/layout/wrap/PageContentWrap";
import ShopItems from "@/components/layout/shop/ShopItems";
import functions from "@/assets/settings/functions";
import { User } from '@/assets/settings/interfaces';
import UserMention from "@/components/reusable/profil/UserMention";
import RouteCard from "@/components/layout/homepage/RouteCard";
import {Globe, Megaphone, Scale} from "lucide-react";
import GettingStartedCard from "@/components/layout/ms/GettingStartedCard";
import ServerStatus from "@/components/layout/ms/ServerStatus";


const Page = () => {

    const {data:session} = useSession()


    const [verified, setVerified] = React.useState(null)
    const [users, setUsers] = React.useState<{list:User[],messageId:string} | null>(null)

    React.useEffect(
        () => {
            if (session) {
                getSS(["users"]).then((res: any) => {

                    // @ts-ignore
                    functions.verifyUserById(res["users"],session.id,"Survival Server").then(verified => setVerified(verified))

                    const users = res["users"]
                    // @ts-ignore
                    users.list.filter((user:User) => user.servers.find(server => server.name === "Survival Server").verified).sort((a, b) => b.ssCoins - a.ssCoins)

                    setUsers(users)
                })
            }
        }, [session]
    )

    return (
        <>
            <div className="hidden flex-col md:flex">

                <div className="flex-1 space-y-4 p-8 pt-6">
                    <div className={"font-semibold mb-[1vw]"}>
                        Vítejte na hlavní stránce
                        <span className={"font-bold text-[1.5vw] mx-2"}>
                                Módovaného Survivalu
                        </span>
                    </div>
                    <PageContentWrap status={verified} server={discordServers.find(server => server.name === "Survival Server")}>
                        <GettingStartedCard/>

                    </PageContentWrap>

                </div>
            </div>
        </>
    )
}
export default Page