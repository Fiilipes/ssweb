"use client"

import React from 'react'
import {useState} from 'react';
import {useSession} from "next-auth/react";
import {User} from "@/assets/settings/interfaces";
import {getSS} from "@/assets/settings/firebase";
import functions from "@/assets/settings/functions";
import PageTitle from "@/components/reusable/composition/PageTitle";
import PageContentWrap from "@/components/layout/wrap/PageContentWrap";
import discordServers from "@/assets/settings/content/discordServers";
import UnderConstruction from "@/components/reusable/composition/UnderConstruction";
import {Button} from "@/components/ui/button";

const values = [
    {
        name: "1",
        color: "red"
    },
    {
        name: "2",
        color: "blue"
    },
{
        name: "3",
        color: "green"
    },
    {
        name: "4",
        color: "yellow"
    },
    {
        name: "5",
        color: "purple"
    }

    ]

const Page = () => {


    const {data:session} = useSession()


    const [verified, setVerified] = React.useState(null)
    const [users, setUsers] = React.useState<{list:User[],messageId:string} | null>(null)

    React.useEffect(
        () => {
            if (session) {
                getSS(["users"]).then((res: any) => {

                    // @ts-ignore
                    functions.verifyUserById(res["users"],session.id,"Survival Server").then(verified => setVerified(verified))

                    const users = res["users"]
                    // @ts-ignore
                    users.list.filter((user:User) => user.servers.find(server => server.name === "Survival Server")?.verified).sort((a, b) => b.ssCoins - a.ssCoins)

                    setUsers(users)
                })
            }
        }, [session]
    )

    const myWheel = React.useRef<HTMLDivElement | null>(null)

    return (
        <div>
            <div className="flex-1 space-y-4 p-8 pt-6">

                <PageTitle status={verified} title={"Jak začít?"} description={"Jak začít hrát na Módovaném Survival Serveru"} buttons={[]} />

                <PageContentWrap status={verified} server={discordServers.find(server => server.name === "Survival Server")}>
                    <div ref={myWheel} className={"w-[25vw] h-[25vw] rounded-full transform right-0 transition-all"} style={
                        {
                            transitionDuration: "5s",
                            transitionTimingFunction: "cubic-bezier(0.1, 0.1, 0.25, 1)",
                            transitionProperty: "transform",
                            transform: "rotate(0deg)",
                            // background: "conic-gradient(red 180deg, blue 180deg 360deg)"
                            // using the values array
                            background: `conic-gradient(${values.map((value, index) => {
                                return `${value.color} ${(360 / (values.length)) * index}deg ${(360 / (values.length)) * (index + 1)}deg`
                            })})`

                        }
                    }>
                        {values.map((value, index) => {
                            return (
                                // eslint-disable-next-line react/jsx-key
                                <div className={`w-[25vw] mx-auto   pl-[11vw] pt-[2vw] absolute text-[4vw] h-[25vw] transform`} style={
                                    {
                                        transform: `rotate(${(360 / (values.length)) * index+ 90 / (values.length * 0.5) }deg)`
                                    }
                                }>
                                    {value.name}
                                </div>
                            )
                        })}
                    </div>
                    <Button onClick={() => {
                        // reset
                        myWheel.current.style.transitionDuration = "0s"
                        myWheel.current.style.transform = `rotate(0deg)`
                        setTimeout(() => {
                            // animate
                            myWheel.current.style.transitionDuration = "5s"
                            myWheel.current.style.transform = `rotate(${
                                Math.floor(Math.random() * 360) + 3600
                            }deg)`
                        }, 100)
                    }}>Rotate</Button>
                </PageContentWrap>

            </div>
        </div>
    )
}

export default Page