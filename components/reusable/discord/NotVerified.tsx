import React from 'react'
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {BadgePlus, ChevronLeftCircle} from "lucide-react";
import {Card, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import discordServers from "@/assets/settings/content/discordServers";

const NotVerified = ({children}:{children:any}) => {
    return (
        <article className={"flex flex-col"}>
            <section className={"flex flex-row mt-[1.5vw] mb-[2vw]"}>
                <Link href={"/"}>
                    <Button className={"flex flex-row"}>
                        <ChevronLeftCircle className={"w-[1vw] h-[1vw] opacity-90 mr-[.5vw]"} />
                        Jít zpět na hlavní menu
                    </Button>
                </Link>
            </section>
            {
                children
            }
            <Card className={"w-full mt-[2vw] bg-black text-white flex flex-row"} style={
                {
                    backgroundImage: `linear-gradient(310deg, #000 60%, rgba(50, 200, 155,0.5) 100%)`,
                    backdropFilter: "blur(100px)",
                }
            }>
                <div className={"mr-[12vw]"}>
                    <CardHeader>
                        <CardTitle>Nejste ověřen</CardTitle>
                        <CardDescription className={"opacity-100 text-[#ccc]"}>Pro získání přístupu k našemu webu je nutné být ověřen na Survival Server discordu</CardDescription>
                    </CardHeader>
                    <CardFooter className={"mt-[1.5vw]"}>
                        {/*@ts-ignore*/}
                        <Link href={discordServers.find(s=>s.name==="Survival Server").link}>
                            <Button variant={"secondary"} className={"flex flex-row items-center"}>
                                <BadgePlus className={"w-[.9vw] h-[.9vw] opacity-80 mr-2"}/> Připojit se na server
                            </Button>
                        </Link>
                    </CardFooter>
                </div>

            </Card>
        </article>    )
}
export default NotVerified
