"use client"

import React from 'react'
import {useSession} from "next-auth/react";
import {getSS} from "@/assets/settings/firebase";
import functions from "@/assets/settings/functions";
import PageTitle from "@/components/reusable/composition/PageTitle";
import pages from "@/assets/settings/content/pages";
import PageContentWrap from "@/components/layout/wrap/PageContentWrap";
import discordServers from "@/assets/settings/content/discordServers";

const Page = () => {
    const {data:session} = useSession()


    const [verified, setVerified] = React.useState(null)
    const [events, setEvents] = React.useState<any[] | null>(null)

    React.useEffect(
        () => {
            if (session) {
                getSS(["users", "events"]).then((res: any) => {

                    // @ts-ignore
                    functions.verifyUserById(res["users"],session.id,"Survival Server").then(verified => setVerified(verified))


                    setEvents(res["events"].list)
                })
            }
        }, [session]
    )

    return (
        <>
            <div className="hidden flex-col md:flex">

                <div className="flex-1 space-y-4 p-8 pt-6">
                    <PageTitle status={verified} buttons={[]} title={pages.eventy.title} description={pages.eventy.description} />
                    <PageContentWrap status={verified} server={discordServers.find(server => server.name === "Survival Server")}>
                        .
                    </PageContentWrap>

                </div>
            </div>
        </>
    )
}
export default Page