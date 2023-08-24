"use client"

import React from 'react';
import {useSession} from "next-auth/react";
import {getSS} from "@/assets/settings/firebase";
import functions from "@/assets/settings/functions";
import PageTitle from "@/components/reusable/composition/PageTitle";
import PageContentWrap from "@/components/layout/wrap/PageContentWrap";
import discordServers from "@/assets/settings/content/discordServers";
import UnderConstruction from "@/components/reusable/composition/UnderConstruction";

const Page = () => {
    const {data:session} = useSession()

    const [verified, setVerified] = React.useState(null)

    React.useEffect(
        () => {
            if (session) {
                getSS(["users"]).then((res: any) => {

                    // @ts-ignore
                    functions.verifyUserById(res["users"],session.id,"Soutěže Tryhard").then(verified => {
                        setVerified(verified)

                    })
                })
            }
        }, [session]
    )
    return (
        <div>
            <div className="flex-1 space-y-4 p-8 pt-6">

                <PageTitle status={verified} title={"Zdroje"} description={"Důležité odkazy a zdroje spojené s událostmi Soutěže Tryhard"} buttons={[]} />

                <PageContentWrap status={verified} server={discordServers.find(server => server.name === "Soutěže Tryhard")}>
                    <UnderConstruction />
                </PageContentWrap>
            </div>
        </div>
    )
}

export default Page