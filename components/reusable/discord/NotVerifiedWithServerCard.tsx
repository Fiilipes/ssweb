import React from 'react'

import {DiscordServer} from "@/assets/settings/interfaces";
import {Card, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {BadgePlus, ChevronLeftCircle, Coins, Palette, StickyNote} from "lucide-react";

const NotVerifiedWithServerCard = ({ discordServer }: { discordServer: DiscordServer | undefined }) => {
    return (
        <article className={"flex flex-col"}>
            <section className={"flex flex-row mt-[1.5vw]"}>
                <Link href={"/"}>
                    <Button className={"flex flex-row"}>
                        <ChevronLeftCircle className={"w-[1vw] h-[1vw] opacity-90 mr-[.5vw]"} />
                        Jít zpět na hlavní menu
                    </Button>
                </Link>
            </section>
            <Card className={"w-full mt-[2vw] bg-black text-white flex flex-row"} style={
                {
                    backgroundImage: `linear-gradient(310deg, #000 60%, ${discordServer?.name === "Survival Server" ? "rgba(100, 112, 255,0.5)" : "rgba(200, 150, 100,0.5)"} 100%)`,
                    backdropFilter: "blur(100px)",
                }
            }>
                <div className={"mr-[12vw]"}>
                    <CardHeader>
                        <CardTitle>Nejste ověření</CardTitle>
                        <CardDescription className={"opacity-100 text-[#ccc]"}>Pro získání přístupu k této stránce je nutné získat plnou verifikaci na {discordServer?.name} discordu</CardDescription>
                    </CardHeader>
                    <CardFooter className={"mt-[1.5vw]"}>
                        {/*@ts-ignore*/}
                        <Link href={discordServer?.link}>
                            <Button variant={"secondary"} className={"flex flex-row items-center"}>
                                <BadgePlus className={"w-[.9vw] h-[.9vw] opacity-80 mr-2"}/> Připojit se na server
                            </Button>
                        </Link>
                    </CardFooter>
                </div>

            </Card>
        </article>
    )
}
export default NotVerifiedWithServerCard
