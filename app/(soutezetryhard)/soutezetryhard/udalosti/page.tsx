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
import {Competition, User} from "@/assets/settings/interfaces";
import {useSession} from "next-auth/react";
import PageTitle from "@/components/reusable/composition/PageTitle";
import discordServers from "@/assets/settings/content/discordServers";
import PageContentWrap from "@/components/layout/wrap/PageContentWrap";
import UnderConstruction from "@/components/reusable/composition/UnderConstruction";
import { monthNames } from '@/assets/settings/content/months';
import {DataTable} from "./data-table";
import {columns} from "./columns";

const Page = () => {

    const {data:session} = useSession()

    const [verified, setVerified] = React.useState(null)
    const [competitions, setCompetitions] = React.useState<Competition[]>([])
    const [competitionsOrganized, setCompetitionsOrganized] = React.useState<Competition[]>([])
    const [users, setUsers] = React.useState<User[]>([])

    React.useEffect(
        () => {
            if (session) {
                getSS(["users", "soutěže"]).then((res: any) => {

                    // @ts-ignore
                    functions.verifyUserById(res["users"],session.id,"Soutěže Tryhard").then(verified => {
                        setVerified(verified)
                        if (verified) {
                            setCompetitionsOrganized(functions.organizeCompetitionsByDate(res["soutěže"].list.added))
                            setCompetitions(res["soutěže"].list.added)
                            setUsers(res["users"].list)
                        }
                    })
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
                                <TabsTrigger value="table">Tabulka</TabsTrigger>
                                <TabsTrigger value="calendar">Kalendář</TabsTrigger>
                            </TabsList>
                        </div>

                        <TabsContent value={"list"} className={"w-full"}>

                            <Accordion type="single" collapsible className="w-full">
                                <ScrollArea className={"w-full h-[55vh] pr-[2vw]"}>

                                    {
                                        competitionsOrganized ? competitionsOrganized.map((competition: any) => {
                                            return (
                                                // eslint-disable-next-line react/jsx-key
                                                <div>
                                                    {
                                                        competition.year !== new Date().getFullYear()  && <div className={"text-[3.5vw] font-bold mb-[1vw] mt-[5vw]"}>
                                                            {competition.year}
                                                        </div>
                                                    }
                                                    {
                                                        competition.competitions.map((comp: any) => {
                                                            return (
                                                                // eslint-disable-next-line react/jsx-key
                                                                <div>
                                                                    <div className={"text-[1.5vw] text-[#333] font-bold"}>
                                                                        {monthNames[comp.month]}
                                                                    </div>
                                                                    {
                                                                        comp.competitions.map((c: any) => {
                                                                            // eslint-disable-next-line react/jsx-key
                                                                            return <CompetitionBlob competition={c} users={users} />
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

                        <TabsContent value={"table"}>
                            <DataTable columns={columns} data={competitions} />

                        </TabsContent>
                        <TabsContent value={"calendar"}>
                            <UnderConstruction />
                        </TabsContent>
                    </Tabs>
                </PageContentWrap>

            </div>

        </div>
    )
}
export default Page