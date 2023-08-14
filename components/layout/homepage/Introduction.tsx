import React from 'react'
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {CalendarHeart, Globe, Megaphone, Scale, User, User2} from "lucide-react";

const Introduction = () => {
    return (
        <div id={"introduction"} className={"flex flex-row justify-start w-[80%] h-[100vh] mt-[7vw]"}>
            <div>
                <div className="pb-[2vw]">
                    <div>
                        <h1 className={"text-[2vw] font-bold"}>
                            Představení
                        </h1>
                        <p className={"font-medium text-[.9vw] text-[#333]"}>
                            Ukázka našeho serveru
                        </p>
                    </div>
                </div>
                <div className={"font-medium text-[.95vw] text-[#111] my-[1vw]"}>
                    Survival Server je komunitní discord server zaměřený na společné hraní a zábavu.
                </div>
                <div className={"flex flex-row w-full justify-center items-center gap-x-[1.5vw]"}>

                    <Card className={"w-[25vw]"}>
                        <CardHeader>
                            <CardTitle>Pravidla</CardTitle>
                            <CardDescription>Každý člen serveru je povinný znát pravidla</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Link href={"/pravidla"} >
                                <Button variant={"secondary"} className={"flex flex-row items-center"}>
                                    <Scale className={"w-[.9vw] h-[.9vw] opacity-80 mr-2"}/> Přečíst
                                </Button>

                            </Link>
                        </CardContent>
                    </Card>
                    <Card className={"w-[25vw]"}>
                        <CardHeader>
                            <CardTitle>Informace</CardTitle>
                            <CardDescription>Novinky a důležité zprávy ze serveru</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Link href={"/info"} >
                                <Button variant={"secondary"} className={"flex flex-row items-center"}>
                                    <Megaphone className={"w-[.9vw] h-[.9vw] opacity-80 mr-2"}/> Přečíst
                                </Button>

                            </Link>
                        </CardContent>
                    </Card>
                    <Card className={"w-[25vw]"}>
                        <CardHeader>
                            <CardTitle>Zdroje</CardTitle>
                            <CardDescription>Odkazy na důležité stránky spojené se serverem</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Link href={"/zdroje"} >
                                <Button variant={"secondary"} className={"flex flex-row items-center"}>
                                    <Globe className={"w-[.9vw] h-[.9vw] opacity-80 mr-2"}/> Přečíst
                                </Button>

                            </Link>
                        </CardContent>
                    </Card>
                </div>
                <div className={"font-medium text-[.95vw] text-[#111] mt-[2vw] mb-[1vw]"}>
                    Server již přes dva roky funguje a má za sebou bohatou historii
                </div>
                <div className={"flex flex-row gap-x-[5vw] p-[2vw] "}>
                    <div className={"flex flex-col"}>
                        <div className={"flex flex-row items-center"}>
                            <CalendarHeart className={"w-[1.5vw] h-[1.5vw] opacity-80 mr-2"} />
                            <div className={"font-medium text-[1vw]"}>
                                Discord server
                            </div>
                        </div>
                        <div className={"font-bold text-[1.5vw]"}>
                            25. 06. 2021
                        </div>
                    </div>
                    <div className={"flex flex-col"}>
                        <div className={"flex flex-row items-center"}>
                            <CalendarHeart className={"w-[1.5vw] h-[1.5vw] opacity-80 mr-2"} />
                            <div className={"font-medium text-[1vw]"}>
                                Survival server Bot
                            </div>
                        </div>
                        <div className={"font-bold text-[1.5vw]"}>
                            18. 02. 2023
                        </div>
                    </div>
                    <div className={"flex flex-col"}>
                        <div className={"flex flex-row items-center"}>
                            <CalendarHeart className={"w-[1.5vw] h-[1.5vw] opacity-80 mr-2"} />
                            <div className={"font-medium text-[1vw]"}>
                                Survival server Web
                            </div>
                        </div>
                        <div className={"font-bold text-[1.5vw]"}>
                            01. 09. 2023
                        </div>
                    </div>
                </div>
                <div className={"font-medium text-[.95vw] text-[#111] mt-[2vw] mb-[1vw]"}>
                    V čele serveru stojí tým zkušených lidí zvaný A-Team
                </div>
                <div>

                </div>
                <div>
                    Partnerské servery
                </div>
                <div>
                    SS Bot, ST Bot
                </div>
            </div>
        </div>
    )
}
export default Introduction
