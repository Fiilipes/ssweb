"use client"

import React from 'react'

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {DoorOpen, Gavel, Hammer, Megaphone} from "lucide-react";
import functions from '@/assets/settings/functions';
import Link from "next/link";
import {Button} from "@/components/ui/button";
import UserMention from "@/components/reusable/profil/UserMention";
import NotesEditor from "@/components/notes/editor/NotesEditor";

const Information = ({info}:{info:any}) => {
    console.log(info)
    switch (info.type) {
        case "punishment": {
            return (
                <div>
                    <Card >
                        {
                            info.value.type === "ban" &&
                            <>
                                <CardHeader className={"flex flex-row justify-between items-center"}>
                                    <div className={"max-w-[80%]"}>
                                        <CardTitle className={"flex flex-row items-center mb-[.4vw]"}>
                                            <Gavel className={"w-[1.3vw] h-[1.3vw] mr-[.5vw]"} />
                                            <div className={"text-[1.3vw]"}>
                                                Ban
                                            </div>
                                        </CardTitle>
                                        <CardDescription>
                                            @{info.value.user.discordUsername} byl zabanován
                                        </CardDescription>
                                    </div>
                                    <div className={"flex flex-row"}>
                                        <Link href={"/"}>
                                            <Button variant={"secondary"} className={"flex flex-row items-center"}>
                                                Zobrazit na discordu
                                            </Button>
                                        </Link>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className={"flex flex-row items-center"}>
                                        <div className={"text-[1vw] font-semibold text-[#222] mr-2"}>
                                            Důvod:
                                        </div>
                                        <div className={"text-[.8vw] font-semibold text-[#444]"}>
                                            {info.value.reason}
                                        </div>
                                    </div>
                                </CardContent>
                            </>
                        }
                        {
                            info.value.type === "kick" &&
                            <>
                                <CardHeader className={"flex flex-row justify-between items-center"}>
                                    <div className={"max-w-[80%]"}>
                                        <CardTitle className={"flex flex-row items-center mb-[.4vw]"}>
                                            <DoorOpen className={"w-[1.3vw] h-[1.3vw] mr-[.5vw]"} />
                                            <div className={"text-[1.3vw]"}>
                                                Kick
                                            </div>
                                        </CardTitle>
                                        <CardDescription>
                                            @{info.value.user.discordUsername} byl vyhozen
                                        </CardDescription>
                                    </div>
                                    <div className={"flex flex-row"}>
                                        <Link href={"/"}>
                                            <Button variant={"secondary"} className={"flex flex-row items-center"}>
                                                Zobrazit na discordu
                                            </Button>
                                        </Link>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className={"flex flex-row items-center"}>
                                        <div className={"text-[1vw] font-semibold text-[#222] mr-2"}>
                                            Důvod:
                                        </div>
                                        <div className={"text-[.8vw] font-semibold text-[#444]"}>
                                            {info.value.reason}
                                        </div>
                                    </div>
                                </CardContent>
                            </>
                        }
                    </Card>
                    <div className={"text-[.75vw] text-[#333] font-medium p-[.5vw] mb-[1vw]"}>
                        {functions.getTimeAgo(info.time / 1)}
                    </div>
                </div>
            )
        }
        case "announcment": {

            return (
                <div>
                    <Card >

                        <CardHeader className={"flex flex-row justify-between items-center"}>
                            <div className={"max-w-[80%]"}>
                                <CardTitle className={"flex flex-row items-center mb-[.4vw]"}>
                                    <Megaphone className={"w-[1.3vw] h-[1.3vw] mr-[.5vw]"} />
                                    <div className={"text-[1.3vw]"}>
                                        Oznámení
                                    </div>
                                </CardTitle>
                                <CardDescription>
                                    {info.value.content}
                                </CardDescription>
                            </div>
                            <div className={"flex flex-row"}>
                                <Link href={"/"}>
                                    <Button variant={"secondary"} className={"flex flex-row items-center"}>
                                        Zobrazit na discordu
                                    </Button>
                                </Link>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className={"flex flex-row items-center"}>
                                <div className={"text-[1vw] font-semibold text-[#222] mr-2"}>
                                    Autor:
                                </div>
                                <div className={"text-[.8vw] font-semibold text-[#444]"}>
                                    <UserMention user={info.author} />
                                </div>
                            </div>
                        </CardContent>

                    </Card>
                    <div className={"text-[.75vw] text-[#333] font-medium p-[.5vw] mb-[1vw]"}>
                        {functions.getTimeAgo(info.time / 1)}
                    </div>
                </div>
            )
        }
    }
}
export default Information
