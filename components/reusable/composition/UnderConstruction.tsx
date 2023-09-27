import React from 'react'
import {Card, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {Construction} from "lucide-react";

const UnderConstruction = () => {
    return (
        <article className={"flex flex-col w-full"}>

            <Card className={"w-full mt-[32px] bg-black text-white flex flex-row"} style={
                {
                    backgroundImage: `linear-gradient(310deg, #000 60%, rgba(200, 140,50,0.5) 100%)`,
                    backdropFilter: "blur(100px)",
                }
            }>
                <div className={"mr-[192px]"}>
                    <CardHeader>
                        <CardTitle>Stále ve vývoji</CardTitle>
                        <CardDescription className={"opacity-100 text-[#ccc]"}>Tato část webu zatím není dostupná a stále se vyvíjí.</CardDescription>
                    </CardHeader>
                    <CardFooter className={"mt-[25px]"}>
                        {/*@ts-ignore*/}
                        <Link href={"/"}>
                            <Button variant={"secondary"} className={"flex flex-row items-center"}>
                                <Construction className={"w-[14px] h-[14px] opacity-80 mr-2"}/> Zpět na hlavní menu
                            </Button>
                        </Link>
                    </CardFooter>
                </div>

            </Card>
        </article>
    )
}
export default UnderConstruction
