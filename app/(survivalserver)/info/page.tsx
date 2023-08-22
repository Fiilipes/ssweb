"use client"

import React from 'react'
import {useSession} from "next-auth/react";
import {getSS} from "@/assets/settings/firebase";
import PageTitle from "@/components/reusable/composition/PageTitle";
import pages from "@/assets/settings/content/pages";
import PageContentWrap from "@/components/layout/wrap/PageContentWrap";
import discordServers from "@/assets/settings/content/discordServers";
import ShopItems from "@/components/layout/shop/ShopItems";
import UnderConstruction from "@/components/reusable/composition/UnderConstruction";
import functions from "@/assets/settings/functions";

const Page = () => {

    const {data:session} = useSession()

    const [verified, setVerified] = React.useState(null)

    React.useEffect(
        () => {
            if (session) {
                getSS(["users"]).then((res: any) => {

                    // @ts-ignore
                    functions.verifyUserById(res["users"],session.id,"Survival Server").then(verified => setVerified(verified))

                })
            }
        }, [session]
    )

    return (
        <>
            <div className="hidden flex-col md:flex">

                <div className="flex-1 space-y-4 p-8 pt-6">
                    <PageTitle status={verified} title={"Informace"} description={"Novinky a důležité zprávy ze Survival Serveru"} buttons={[{content:"Nová zpráva", link:"/info/new", variant:"default"}]} />
                    <PageContentWrap status={verified} server={discordServers.find(server => server.name === "Survival Server")}>
                        <UnderConstruction />
                    </PageContentWrap>

                </div>
            </div>
        </>
    )
}
export default Page
