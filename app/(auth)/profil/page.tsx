"use client"

import React from "react";

import {getSS} from "@/assets/settings/firebase";

import {useSession} from "next-auth/react";

import pages from "@/assets/settings/content/pages";

import {Separator} from "@/components/ui/separator";

import UserCard from "@/components/reusable/profil/UserCard";
import UserBadges from "@/components/reusable/profil/UserBadges";
import NotVerified from "@/components/reusable/discord/NotVerified";
import PageTitle from "@/components/reusable/composition/PageTitle";
import functions from "@/assets/settings/functions";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {CalendarClock, Clock, Coins, Target, Trophy, Users2} from "lucide-react";
import { User } from "@/assets/settings/interfaces";

export default function SoutezeTryhard() {

    const [verified, setVerified] = React.useState(null)
    const [myUser , setMyUser] = React.useState<User | null>(null)

    const {data:session} = useSession()

    React.useEffect(
        () => {
            if (session) {
                getSS(["users"]).then((res: any) => {
                    // @ts-ignore
                    functions.verifyUserById(res["users"],session.id,null).then(
                        verified => {
                            setVerified(verified)
                            if (verified) {
                                // @ts-ignore
                                setMyUser(res["users"].list.find(user => user.discordID === session.id))
                            }
                        }
                    )
                })
            }
        }, [session]
    )

    return (
        <div className={"w-[90%] mx-auto"}>

            <PageTitle status={verified} title={"Profil"} description={"Zde můžete vidět informace o Vás"} buttons={[]} />

            {
                verified !== false ? <>
                    <UserCard session={session} loading={verified === null}/>
                    <UserBadges session={session} loading={verified === null}/>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-[1vw]">
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">
                                    SS Coiny
                                </CardTitle>
                                <Coins className={"opacity-60 w-4 h-4"}  />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">
                                    {myUser?.ssCoins}
                                </div>
                                <p className="text-xs text-muted-foreground">
                                    Kupte si něco v shopu
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Pořadí</CardTitle>
                                <Trophy className={"opacity-60 w-4 h-4"} />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">4.</div>
                                <p className="text-xs text-muted-foreground">
                                    V celkovém leaderboardu
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">
                                    Status
                                </CardTitle>
                                <Target     className={"opacity-60 w-4 h-4"} />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">Basic</div>
                                <p className="text-xs text-muted-foreground">
                                    Objevte více možností s Pro
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </> : <>
                    <NotVerified>
                        <UserCard session={session} loading={verified === null}/>
                    </NotVerified>
                </>
            }




        </div>
    )
}