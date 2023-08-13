"use client"

import {getSS} from "@/assets/settings/firebase";
import React from "react";
import Image from "next/image";

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert"

import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"


import wumpusDiscord from "@/assets/img/wumpus-discord.gif"
import {Separator} from "@/components/ui/separator";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {useSession, signOut} from "next-auth/react";

export default function SoutezeTryhard() {

    const [verified, setVerified] = React.useState(null)

    const {data:session} = useSession()

    React.useEffect(
        () => {
            if (session) {
                getSS(["users"]).then((res: any) => {

                    setVerified(res["users"].users.list.find((u:any) => u.discordID === session.id))

                })
            }
        }, [session]
    )

    return (
        <div className={"w-[90%] mx-auto"}>

            <div>
                <h1 className={"text-[3vw] font-bold"}>
                    Profil
                </h1>
                <p className={"font-medium text-[#222]"}>
                    Zde můžete vidět svůj profil a nastavení
                </p>
            </div>
            <Separator className={"my-4"}/>

            {verified === null ?
                <>
                    <div className={"flex flex-col"}>
                        <Alert className={"flex flex-row justify-between items-end mb-4"}>
                            <div>
                                <Skeleton className="h-[2vw] w-[2vw] rounded-full mb-[1vw]"/>

                                <Skeleton className="h-4 w-[200px]" />
                                <Skeleton className="h-4 w-[250px]" />
                            </div>

                            <div className={"flex flex-row"}>
                                <Link href={`https://discord.com/users/${session?.id}`} target={"_blank"}>
                                    <Button className={"mx-1"} variant={"secondary"}>
                                        View on discord
                                    </Button>
                                </Link>
                                <Button variant={"outline"} className={"mx-1"} onClick={() => {
                                    signOut().then(
                                        () => {
                                            window.location.href = "/"
                                        }
                                    )
                                }}>
                                    Logout
                                </Button>
                            </div>
                        </Alert>
                        <div className={"flex flex-row"}>
                            <Badge className={"w-fit mr-1"} variant={"secondary"}>
                                Not verified
                            </Badge>
                        </div>
                    </div>
                </>
                : !verified ?
                    <>
                        <div className={"flex flex-col"}>
                            <Alert className={"flex flex-row justify-between items-end mb-4"}>
                                <div>
                                    <Avatar className={"w-[2vw] h-[2vw] mb-[1vw]"}>
                                        <AvatarImage src={`${session?.user?.image}`} alt={`@${session?.user?.name}`} width={320} height={320} />
                                        <AvatarFallback>
                                            {session?.user?.name ? session?.user?.name.slice(0, 2) : "??"}
                                        </AvatarFallback>
                                    </Avatar>
                                    <AlertTitle>@{session?.user?.name}</AlertTitle>
                                    <AlertDescription>
                                        {session?.user?.email}
                                    </AlertDescription>
                                </div>

                                <div className={"flex flex-row"}>
                                    <Link href={`https://discord.com/users/${session?.id}`} target={"_blank"}>
                                        <Button className={"mx-1"} variant={"secondary"}>
                                            View on discord
                                        </Button>
                                    </Link>
                                    <Button variant={"outline"} className={"mx-1"} onClick={() => {
                                        signOut().then(
                                            () => {
                                                window.location.href = "/"
                                            }
                                        )
                                    }}>
                                        Logout
                                    </Button>
                                </div>
                            </Alert>
                            <div className={"flex flex-row"}>
                                <Badge className={"w-fit mr-1"} variant={"secondary"}>
                                    Not verified
                                </Badge>
                            </div>
                            <div className={"flex flex-row justify-center items-center mt-16"}>
                                <Image src={wumpusDiscord} alt={"Wumpus"} width={220} height={220} />
                                <div className={"max-w-[15vw]"}>
                                    Pro získání plného přístupu je nutno verifikovat se na {" "}
                                    <Link href={"https://discord.gg/2Yz2H2Y"} target={"_blank"} className={"text-[1.6vw] font-bold "}>
                                        Discord Serveru </Link>

                                </div>
                            </div>
                        </div>
                    </>
                    :
                    <>
                        <div className={"flex flex-col"}>

                            <Alert className={"flex flex-row justify-between items-end mb-4"}>
                                <div>
                                    <Avatar className={"w-[2vw] h-[2vw] mb-[1vw]"}>
                                        <AvatarImage src={`${session?.user?.image}`} alt={`@${session?.user?.name}`} width={320} height={320} />
                                        <AvatarFallback>
                                            {session?.user?.name ? session?.user?.name.slice(0, 2) : "??"}
                                        </AvatarFallback>
                                    </Avatar>
                                    <AlertTitle>@{session?.user?.name}</AlertTitle>
                                    <AlertDescription>
                                        {session?.user?.email}
                                    </AlertDescription>
                                </div>

                                <div className={"flex flex-row	"}>
                                    <Link href={`https://discord.com/users/${session?.id}`} target={"_blank"}>
                                        <Button className={"mx-1"} variant={"secondary"}>
                                            View on discord
                                        </Button>
                                    </Link>

                                    <Button variant={"outline"} className={"mx-1"} onClick={() => {
                                        signOut().then(
                                            () => {
                                                window.location.href = "/"
                                            }
                                        )
                                    }}>
                                        Logout
                                    </Button>
                                </div>
                            </Alert>
                            <div className={"flex flex-row"}>
                                <Badge className={"w-fit mr-1"}>
                                    Admin
                                </Badge>
                                <Badge className={"w-fit mr-1"} variant={"secondary"}>
                                    Verified
                                </Badge>
                                {
                                    // @ts-ignore
                                    verified.servers.find(server => server.name === "Soutěže Tryhard").verified && <Badge className={"w-fit mr-1"} variant={"secondary"}>
                                        Soutěže Tryhard
                                    </Badge>
                                }
                            </div>
                        </div>
                    </>
            }

        </div>
    )
}