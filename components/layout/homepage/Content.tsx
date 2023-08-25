import React from 'react'
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {BadgePlus, CalendarRange, Coins, Palette, StickyNote, Store, Trophy} from "lucide-react";
import SubscriptionCard from "@/components/reusable/subscription/SubscriptionCard";
import RouteCard from "@/components/layout/homepage/RouteCard";

const Content = () => {
    return (
        <div id={"content"} className={"pt-[10vw] mt-[5vw]"}>
            <div>
                <div className="pb-[20px] lg:pb-[2vw]">
                    <div>
                        <h1 className={"text-[30px] text-center lg:text-left lg:text-[2vw] font-bold"}>
                            Obsah
                        </h1>
                        <p className={"font-semibold text-[12px] lg:font-medium text-center lg:text-left lg:text-[.9vw] text-[#333]"}>
                            Hlavní části našeho serveru
                        </p>
                    </div>
                </div>
                <div className={"flex flex-col lg:flex-row justify-center items-center gap-y-[10px] lg:gap-y-0 lg:gap-x-[1.5vw]"}>
                    <RouteCard title={"Obchod"} description={"Místo plné Survival Server itemů"} link={"/obchod"}>
                        <Store className={"w-4 h-4 lg:w-[.9vw] lg:h-[.9vw] opacity-80 mr-2"}/> Navštívit
                    </RouteCard>
                    <RouteCard title={"Leaderboard"} description={"Žebříček aktivních lidí Survival Serveru"} link={"/leaderboard"}>
                        <Trophy className={"w-4 h-4 lg:w-[.9vw] lg:h-[.9vw] opacity-80 mr-2"}/> Navštívit
                    </RouteCard>
                    <RouteCard title={"Eventy"} description={"Informace o všech eventech na serveru"} link={"/eventy"}>
                        <CalendarRange className={"w-4 h-4 lg:w-[.9vw] lg:h-[.9vw] opacity-80 mr-2"}/> Navštívit
                    </RouteCard>
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
