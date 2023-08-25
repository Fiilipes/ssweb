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
import {Activity, CalendarClock, Clock, Globe, Link2, Megaphone, Scale, Users2} from "lucide-react";
import GettingStartedCard from "@/components/layout/ms/GettingStartedCard";
import ServerStatus from "@/components/layout/ms/ServerStatus";

import * as mcs from "node-mcstatus"
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";

const Page = () => {

    const {data:session} = useSession()


    const [verified, setVerified] = React.useState(null)
    const [users, setUsers] = React.useState<{list:User[],messageId:string} | null>(null)
    const [serverStatus, setServerStatus] = React.useState<any>(null)

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

                    const host = 'demo.mcstatus.io';
                    const port = 25565;
                    const options = { query: true };

// The `port` argument is optional and defaults
// to 25565. The `options` argument is optional.
                    mcs.statusJava(host, port, options)
                        .then((result) => {
                            // `result` will be the same shape and
                            // properties as what is documented on
                            // our website.
                            // https://mcstatus.io/docs#java-status
                            console.log(result)
                            setServerStatus(result)
                        })
                        .catch((error) => {
                            // If the server is offline, then
                            // you will NOT receive an error here.
                            // Instead, you will use the `result.online`
                            // boolean values in `.then()`.
                            // Receiving an error here means that there
                            // was an error with the service itself.
                        })

                })
            }
        }, [session]
    )

    return (
        <>
            <div className=" flex-col flex">

                <div className="flex-1 space-y-4 p-8 pt-6">
                    <div className={"font-semibold mb-[1vw]"}>
                        Vítejte na hlavní stránce
                        <span className={"font-bold text-[1.5vw] mx-2"}>
                                Módovaného Survivalu
                        </span>
                    </div>
                    <PageContentWrap status={verified} server={discordServers.find(server => server.name === "Survival Server")}>
                        {
                            serverStatus ? <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-[1vw]">
                                <Card>
                                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                        <CardTitle className="text-sm font-medium">
                                            Stav serveru
                                        </CardTitle>
                                        <Activity className={"opacity-60 w-4 h-4"}  />
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-2xl font-bold">
                                            {serverStatus.online ? "Online" : "Offline"}
                                        </div>
                                        <p className="text-xs text-muted-foreground">
                                            Spuštěn {functions.getTimeAgo(serverStatus.retrieved_at)}
                                        </p>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                        <CardTitle className="text-sm font-medium">Počet aktivních hráčů</CardTitle>
                                        <Users2 className={"opacity-60 w-4 h-4"} />
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-2xl font-bold">{serverStatus.players.online}</div>
                                        <p className="text-xs text-muted-foreground">
                                            Maximálně {serverStatus.players.max}
                                        </p>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                        <CardTitle className="text-sm font-medium">
                                            IP adresa
                                        </CardTitle>
                                        <Link2 className={"opacity-60 w-4 h-4"} />
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-2xl font-bold">
                                            ms1.serv.nu
                                        </div>
                                        <p className="text-xs text-muted-foreground">
                                            Verze minecraft 1.19.2 Java.
                                        </p>
                                    </CardContent>
                                </Card>
                            </div> : null
                        }
                        {/*<GettingStartedCard/>*/}

                    </PageContentWrap>

                </div>
            </div>
        </>
    )
}
export default Page