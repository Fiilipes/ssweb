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
                    <RouteCard title={"Obchod"} description={"Místo plné Survival Server itemů"} link={"/obchod"}>
                        <Store className={"w-[.9vw] h-[.9vw] opacity-80 mr-2"}/> Navštívit
                    </RouteCard>
                    <RouteCard title={"Pravidla"} description={"Pravidla našeho Survival Serveru"} link={"/pravidla"}>
                        <StickyNote className={"w-[.9vw] h-[.9vw] opacity-80 mr-2"}/> Navštívit
                    </RouteCard>
                    <RouteCard title={"Eventy"} description={"Informace o všech eventech na serveru"} link={"/eventy"}>
                        <CalendarRange className={"w-[.9vw] h-[.9vw] opacity-80 mr-2"}/> Navštívit
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
