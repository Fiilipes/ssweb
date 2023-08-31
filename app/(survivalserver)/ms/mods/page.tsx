"use client"

import React from 'react'
import {useSession} from "next-auth/react";
import {User} from "@/assets/settings/interfaces";
import {getSS} from "@/assets/settings/firebase";
import functions from "@/assets/settings/functions";
import PageTitle from "@/components/reusable/composition/PageTitle";
import PageContentWrap from "@/components/layout/wrap/PageContentWrap";
import discordServers from "@/assets/settings/content/discordServers";
import UnderConstruction from "@/components/reusable/composition/UnderConstruction";
import modsArray from "@/assets/settings/content/ms/mods";
import { DataTable } from './data-table';
import {columns} from "@/app/(survivalserver)/ms/mods/columns";

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

    return (
        <div>
            <div className="flex-1 space-y-4 p-8 pt-6">

                <PageTitle status={verified} title={"Módy"} description={"Inofrmace ke všem módům na Módovaném Survival Serveru"} buttons={[]} />

                <PageContentWrap status={verified} server={discordServers.find(server => server.name === "Survival Server")}>
                    <DataTable columns={columns} data={modsArray} />
                </PageContentWrap>                  
            </div>
        </div>
    )
}
export default Page
