"use client"

import React, {useEffect} from "react";
import {getSS} from "@/assets/settings/firebase";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


import Image from "next/image";
import {Activity, Book, CalendarClock, Clock, Terminal, Users2} from "lucide-react";

import {useSession} from "next-auth/react";
import PageContentWrap from "@/components/layout/wrap/PageContentWrap";
import discordServers from "@/assets/settings/content/discordServers";
import UnderConstruction from "@/components/reusable/composition/UnderConstruction";
import functions from "@/assets/settings/functions";
import {Competition} from "@/assets/settings/interfaces";
import Link from "next/link";
import {Button} from "@/components/ui/button";

export default function SoutezeTryhard() {

    const {data:session} = useSession()
    useEffect(
        () => {
            (
                async () => {
                    // @ts-ignore
                    const LocomotiveScroll = (await import('locomotive-scroll')).default
                    const locomotiveScroll = new LocomotiveScroll();
                }
            )()
        },[]
    )

    const [verified, setVerified] = React.useState(null)
    const [competitions, setCompetitions] = React.useState<any[] | null>(null)

    React.useEffect(
        () => {
            if (session) {
                getSS(["users", "soutěže"]).then((res: any) => {

                    // @ts-ignore
                    functions.verifyUserById(res["users"],session.id,"Soutěže Tryhard").then(verified => {
                        setVerified(verified)
                        if (verified) {
                            setCompetitions(res["soutěže"].list.added)

                        }
                    })
                })
            }
        }, [session]
    )


    return (
        <>
            <div className=" flex-col flex">
                <div className="flex-1 space-y-4 p-4 lg:p-[2vw] pt-[1.5vw]">

                    <PageContentWrap status={verified} server={discordServers.find(server => server.name === "Soutěže Tryhard")}>

                        <div className={"font-semibold mb-[25px] lg:mb-[16px] text-[18px] lg:text-[16px]"}>
                            Vítejte
                            <span className={"font-bold text-[25px] lg:text-[25px] mx-2"}>
                                @{session?.user?.name}...
                            </span>
                        </div>

                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-[16px]">
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">
                                        Nadcházející události
                                    </CardTitle>
                                    <CalendarClock className={"opacity-60 w-4 h-4"}  />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">
                                        {competitions?.length}
                                    </div>
                                    <p className="text-xs text-muted-foreground">
                                        4 v nadcházejících 30 dnech
                                    </p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">Nejbližší událost</CardTitle>
                                    <Clock className={"opacity-60 w-4 h-4"} />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">Za 2 týdny</div>
                                    <p className="text-xs text-muted-foreground">
                                        Matematická olympiáda
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">
                                        Počet různých účastníků
                                    </CardTitle>
                                    <Users2 className={"opacity-60 w-4 h-4"} />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">9</div>
                                    <p className="text-xs text-muted-foreground">
                                        7 ve více než jedné soutěži
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                        {/*<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">*/}
                        {/*    <Card className="col-span-4">*/}
                        {/*        <CardHeader>*/}
                        {/*            <CardTitle>Seznam</CardTitle>*/}
                        {/*            <CardDescription>*/}
                        {/*                Interaktivní zobrazení všech událostí.*/}
                        {/*            </CardDescription>*/}
                        {/*        </CardHeader>*/}
                        {/*        <CardContent className="pl-2">*/}
                        {/*            overview*/}
                        {/*        </CardContent>*/}
                        {/*    </Card>*/}
                        {/*    <Card className="col-span-3">*/}
                        {/*        <CardHeader>*/}
                        {/*            <CardTitle>Váš status</CardTitle>*/}
                        {/*            <CardDescription>*/}
                        {/*                Jak si vedete v událostech.*/}
                        {/*            </CardDescription>*/}
                        {/*        </CardHeader>*/}
                        {/*        <CardContent>*/}
                        {/*            analytics*/}
                        {/*        </CardContent>*/}
                        {/*    </Card>*/}
                        {/*</div>*/}
                        <article className={"flex flex-col w-full"}>

                            <Card className={"w-full mt-[32px] bg-black text-white flex flex-row"} style={
                                {
                                    backgroundImage: `linear-gradient(310deg, #000 40%, rgba(200, 20,80,0.4) 100%)`,
                                    backdropFilter: "blur(100px)",
                                }
                            }>
                                <div className={"mr-[192px]"}>
                                    <CardHeader>
                                        <CardTitle>Procvičování soutěžní fyziky</CardTitle>
                                        <CardDescription className={"opacity-100 text-[#ccc]"}>Nová možnost jak procvičit své znalosti fyziky a připravit se na mnohé soutěže!</CardDescription>
                                    </CardHeader>
                                    <CardFooter className={"mt-[25px]"}>
                                        {/*@ts-ignore*/}
                                        <Link href={"/soutezetryhard/psf"}>
                                            <Button variant={"secondary"} className={"flex flex-row items-center"}>
                                                <Book className={"w-[14px] h-[14px] opacity-80 mr-2"}/> Přejít na PSF
                                            </Button>
                                        </Link>
                                    </CardFooter>
                                </div>

                            </Card>
                        </article>
                    </PageContentWrap>

                </div>

            </div>

        </>
    )
}