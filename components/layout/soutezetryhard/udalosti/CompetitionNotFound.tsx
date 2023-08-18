import React from 'react'
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {BadgePlus, ChevronLeftCircle, Undo2} from "lucide-react";
import {Card, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";

const CompetitionNotFound = () => {
    return (
        <article className={"flex flex-col"}>

            <Card className={"w-full mt-[2vw] bg-black text-white flex flex-row"} style={
                {
                    backgroundImage: `linear-gradient(310deg, #000 60%, rgba(100, 112, 255,0.5) 100%)`,
                    backdropFilter: "blur(100px)",
                }
            }>
                <div className={"mr-[12vw]"}>
                    <CardHeader>
                        <CardTitle>Událost nenalezena</CardTitle>
                        <CardDescription className={"opacity-100 text-[#ccc]"}>Tuto událost jsme v databázi nenašli, zkontrolujte prosím zda se nejedná o překlem</CardDescription>
                    </CardHeader>
                    <CardFooter className={"mt-[1.5vw]"}>
                        {/*@ts-ignore*/}
                        <Link href={"/soutezetryhard/udalosti"}>
                            <Button variant={"secondary"} className={"flex flex-row items-center"}>
                                <Undo2 className={"w-[.9vw] h-[.9vw] opacity-80 mr-2"}/> Jít zpět na události
                            </Button>
                        </Link>
                    </CardFooter>
                </div>

            </Card>
        </article>
    )
}
export default CompetitionNotFound
