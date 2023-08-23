import React from 'react'
import {Card, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {BadgePlus, Coins, Palette, Sparkles, StickyNote} from "lucide-react";

const GettingStartedCard = () => {
    return (
        <Link href={"/ms/start"}>

        <Card className={"w-full mt-[2vw] bg-black text-white flex flex-row"} style={
            {
                backgroundImage: "linear-gradient(310deg, #000 60%, rgba(100, 255, 205,0.5) 100%)",
                // filter: "blur(100px)",
                backdropFilter: "blur(100px)",
            }
        }>
            <div className={"mr-[5vw]"}>
                <CardHeader>
                    <CardTitle>Jak začít?</CardTitle>
                    <CardDescription className={"opacity-100 text-[#ccc]"}>Začátky Vašeho dobrodružšví na Módovaném Minecraft Serveru</CardDescription>
                </CardHeader>
                <CardFooter className={"mt-[1.5vw]"}>
                        <Button variant={"secondary"} className={"flex flex-row items-center"}>
                            <Sparkles className={"w-[.9vw] h-[.9vw] opacity-80 mr-2"}/> Začít
                        </Button>
                </CardFooter>
            </div>

        </Card>
</Link>

)
}
export default GettingStartedCard
