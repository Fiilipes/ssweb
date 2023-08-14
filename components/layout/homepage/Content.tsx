import React from 'react'
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {BadgePlus, CalendarRange, Coins, Palette, StickyNote, Store, Trophy} from "lucide-react";
import SubscriptionCard from "@/components/reusable/subscription/SubscriptionCard";

const Content = () => {
    return (
        <div id={"content"} className={"mt-[15vw]"}>
            <div>
                <div className="pb-[2vw]">
                    <div>
                        <h1 className={"text-[2vw] font-bold"}>
                            Obsah
                        </h1>
                        <p className={"font-medium text-[.9vw] text-[#333]"}>
                            Hlavní části našeho serveru
                        </p>
                    </div>
                </div>
                <div className={"flex flex-row justify-center items-center gap-x-[1.5vw]"}>

                    <Card className={"w-[25vw]"}>
                        <CardHeader>
                            <CardTitle>Obchod</CardTitle>
                            <CardDescription>Místo plné Survival Server itemů</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Link href={"/obchod"} >
                                <Button variant={"secondary"} className={"flex flex-row items-center"}>

                                    <Store className={"w-[.9vw] h-[.9vw] opacity-80 mr-2"}/> Navštívit
                                </Button>

                            </Link>
                        </CardContent>
                    </Card>
                    <Card className={"w-[25vw]"}>
                        <CardHeader>
                            <CardTitle>Leaderboard</CardTitle>
                            <CardDescription>Žebříček aktivních členů serveru</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Link href={"/leaderboard"} >
                                <Button variant={"secondary"} className={"flex flex-row items-center"}>

                                    <Trophy className={"w-[.9vw] h-[.9vw] opacity-80 mr-2"}/> Navštívit
                                </Button>

                            </Link>
                        </CardContent>
                    </Card>
                    <Card className={"w-[25vw]"}>
                        <CardHeader>
                            <CardTitle>Eventy</CardTitle>
                            <CardDescription>Informace o všech eventech na serveru</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Link href={"/eventy"} >
                                <Button variant={"secondary"} className={"flex flex-row items-center"}>

                                    <CalendarRange className={"w-[.9vw] h-[.9vw] opacity-80 mr-2"}/> Navštívit
                                </Button>

                            </Link>
                        </CardContent>
                    </Card>

                </div>
                <SubscriptionCard />
                <div className={"text-[.75vw] text-[#333] font-medium p-[.5vw]"}>
                    Zakoupením předplatného plně podpoříte rozvoj Survival Serveru
                </div>
            </div>
        </div>
    )
}
export default Content
