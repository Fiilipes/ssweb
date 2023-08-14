import React from 'react'
import {Card, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {BadgePlus, Coins, Palette, StickyNote} from "lucide-react";

const SubscriptionCard = () => {
    return (
        <Card className={"w-full mt-[2vw] bg-black text-white flex flex-row"} style={
            {
                backgroundImage: "linear-gradient(310deg, #000 60%, rgba(222, 112, 255,0.5) 100%)",
                // filter: "blur(100px)",
                backdropFilter: "blur(100px)",
            }
        }>
            <div className={"mr-[12vw]"}>
                <CardHeader>
                    <CardTitle>Pro</CardTitle>
                    <CardDescription className={"opacity-100 text-[#ccc]"}>Objevte plný potenciál Survival Serveru s předplatným Pro</CardDescription>
                </CardHeader>
                <CardFooter className={"mt-[1.5vw]"}>
                    <Link href={"/pro"}>
                        <Button variant={"secondary"} className={"flex flex-row items-center"}>
                            <BadgePlus className={"w-[.9vw] h-[.9vw] opacity-80 mr-2"}/> Zjistit více
                        </Button>
                    </Link>
                </CardFooter>
            </div>
            <div className={"pt-[2vw] grid grid-cols-2 gap-x-[1vw]"}>
                <div>
                    <div className={"flex flex-row items-center font-bold pb-2 text-[1vw]"}>
                        <StickyNote className={"w-[.9vw] h-[.9vw] opacity-100 mr-2"}/>
                        <div>
                            Notes
                        </div>
                    </div>
                    <div className={"text-[.75vw] text-[#ccc]"}>
                        Všechny zápisy, testy i procvičování
                    </div>
                </div>
                <div>
                    <div className={"flex flex-row items-center font-bold pb-2 text-[1vw]"}>
                        <Coins className={"w-[.9vw] h-[.9vw] opacity-100 mr-2"}/>
                        <div>
                            Více ss coinů
                        </div>
                    </div>
                    <div className={"text-[.75vw] text-[#ccc]"}>
                        Získejte mnohem více než ostatní
                    </div>
                </div>
                <div>
                    <div className={"flex flex-row items-center font-bold pb-2 text-[1vw]"}>
                        <Palette className={"w-[.9vw] h-[.9vw] opacity-100 mr-2"}/>
                        <div>
                            Custom role
                        </div>
                    </div>
                    <div className={"text-[.75vw] text-[#ccc]"}>
                        Vaše vlastní role na discordu
                    </div>
                </div>
                <div>
                    <div className={"flex flex-row items-center font-bold pb-2 text-[1vw]"}>
                        <BadgePlus className={"w-[.9vw] h-[.9vw] opacity-100 mr-2"}/>
                        <div>
                            Mnohem více
                        </div>
                    </div>
                    <div className={"text-[.75vw] text-[#ccc]"}>
                        Pro zjištění všech výhod klikněte na zjistit více
                    </div>
                </div>
            </div>
        </Card>
    )
}
export default SubscriptionCard
