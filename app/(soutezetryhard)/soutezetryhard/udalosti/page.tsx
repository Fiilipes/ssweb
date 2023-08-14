"use client"

import React from 'react'
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {Accordion} from "@/components/ui/accordion";
import {Separator} from "@/components/ui/separator";

import {getSS} from "@/assets/settings/firebase";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {ScrollArea} from "@/components/ui/scroll-area";

import functions from "@/assets/settings/functions";
import CompetitionBlob from "@/components/layout/soutezetryhard/udalosti/CompetitionBlob";
import {Competition} from "@/assets/settings/interfaces";
import {useSession} from "next-auth/react";
import PageTitle from "@/components/reusable/composition/PageTitle";
import discordServers from "@/assets/settings/content/discordServers";
import PageContentWrap from "@/components/layout/wrap/PageContentWrap";

const Page = () => {

    const {data:session} = useSession()

    const [verified, setVerified] = React.useState(null)
    const [competitions, setCompetitions] = React.useState<Competition[]>([])

    React.useEffect(
        () => {
            if (session) {
                getSS(["users", "soutěže"]).then((res: any) => {

                    // @ts-ignore
                    const myUser = res["users"].users.list.find((u:any) => u.discordID === session?.id).servers.find((s:any) => s.name === "Soutěže Tryhard")?.verified

                    setVerified(myUser)

                    if (myUser) {
                        setCompetitions(functions.organizeCompetitionsByDate(res["soutěže"].list.added))
                    }

                })
            }
        }, [session]
    )

    return (
        <div>
            <div className="flex-1 space-y-4 p-8 pt-6">

                <PageTitle status={verified} title={"Události"} description={"Všechny dostupné informace k událostem."} buttons={[{content:"Nová událost", link:"/soutezetryhard/udalosti/new", variant:"default"}]} />

                <PageContentWrap status={verified} server={discordServers.find(server => server.name === "Soutěže Tryhard")}>

                    <Tabs defaultValue="list" className="w-full">

                        <div className={"flex flex-row justify-between w-full items-center mb-8"}>
                            <TabsList>
                                <TabsTrigger value="list">List</TabsTrigger>
                                <TabsTrigger value="calendar">Kalendář</TabsTrigger>
                            </TabsList>
                        </div>

                        <TabsContent value={"list"} className={"w-full"}>

                            <Accordion type="single" collapsible className="w-full">
                                <ScrollArea className={"w-full h-[50vh] pr-[2vw]"}>

                                    {
                                        competitions ? competitions.map((competition: any) => {
                                            return (
                                                // eslint-disable-next-line react/jsx-key
                                                <div>
                                                    {competition.year}
                                                    {
                                                        competition.competitions.map((comp: any) => {
                                                            return (
                                                                // eslint-disable-next-line react/jsx-key
                                                                <div>
                                                                    {comp.month}
                                                                    {
                                                                        comp.competitions.map((c: any) => {
                                                                            // eslint-disable-next-line react/jsx-key
                                                                            return <CompetitionBlob competition={c} />
                                                                        })
                                                                    }
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            )
                                        }) : <></>
                                    }
                                </ScrollArea>

                            </Accordion>

                        </TabsContent>

                        <TabsContent value={"calendar"}>
                            idk
                        </TabsContent>
                    </Tabs>
                </PageContentWrap>

            </div>

        </div>
    )
}
export default Page