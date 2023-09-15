import React from 'react'
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {CalendarHeart, Globe, Megaphone, Scale, Store, User, User2} from "lucide-react";
import RouteCard from "@/components/layout/homepage/RouteCard";
import UnderConstruction from '@/components/reusable/composition/UnderConstruction';


const Introduction = () => {
    return (
        <div id={"introduction"} className={"flex flex-row justify-start  pt-[8vw] "}>
            <div>
                <div className="pb-[20px] lg:pb-[2vw]">
                    <div>
                        <h1 className={"text-[30px] text-center lg:text-left lg:text-[2vw] font-bold"}>
                            Představení
                        </h1>
                        <p className={"font-semibold text-[12px] lg:font-medium text-center lg:text-left lg:text-[.9vw] text-[#333]"}>
                            Ukázka našeho serveru
                        </p>
                    </div>
                </div>
                <div className={"font-medium text-[.95vw] text-[#111] my-[1vw]"}>
                    Survival Server je komunitní discord server zaměřený na společné hraní a zábavu.
                </div>
                <div className={"flex flex-col lg:flex-row justify-center items-center gap-y-[10px] lg:gap-y-0 lg:gap-x-[1.5vw]"}>

                    <RouteCard title={"Pravidla"} description={"Pravidla našeho Survival Serveru"} link={"/pravidla"}>
                        <Scale className={"w-4 h-4 lg:w-[.9vw] lg:h-[.9vw] opacity-80 mr-2"}/> Navštívit
                    </RouteCard>
                    <RouteCard title={"Informace"} description={"Novinky a důležité zprávy ze serveru"} link={"/info"}>
                        <Megaphone className={"w-4 h-4 lg:w-[.9vw] lg:h-[.9vw] opacity-80 mr-2"}/> Navštívit
                    </RouteCard>
                    <RouteCard title={"Zdroje"} description={"Odkazy na důležité stránky spojené se serverem"} link={"/zdroje"}>
                        <Globe className={"w-4 h-4 lg:w-[.9vw] lg:h-[.9vw] opacity-80 mr-2"}/> Navštívit
                    </RouteCard>

                </div>
                <div className={"font-medium text-[.95vw] text-[#111] mt-[2vw] mb-[1vw]"}>
                    Server již přes dva roky funguje a má za sebou bohatou historii
                </div>

                <UnderConstruction/>
            </div>
        </div>
    )
}
export default Introduction
