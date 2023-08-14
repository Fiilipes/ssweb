"use client"

import React from 'react'
import { getSS } from "@/assets/settings/firebase";
import {useSession} from "next-auth/react";
import NotVerifiedWithServerCard from "@/components/reusable/discord/NotVerifiedWithServerCard";
import discordServers from "@/assets/settings/content/discordServers";
import PageTitle from "@/components/reusable/composition/PageTitle";
import pages from "@/assets/settings/content/pages";
import PageContentWrap from "@/components/layout/wrap/PageContentWrap";
import ShopItems from "@/components/layout/shop/ShopItems";


const Page = () => {

    const {data:session} = useSession()


    const [verified, setVerified] = React.useState(null)
    const [shop, setShop] = React.useState<any[] | null>(null)

    React.useEffect(
        () => {
            if (session) {
                getSS(["users", "shop"]).then((res: any) => {

                    // @ts-ignore
                    const myUser = res["users"].users.list.find((u:any) => u.discordID === session?.id).servers.find((s:any) => s.name === "Survival Server")?.verified

                    setVerified(myUser)

                    setShop(res["shop"].shop.list)
                })
            }
        }, [session]
    )

    return (
        <>
            <div className="hidden flex-col md:flex">

                <div className="flex-1 space-y-4 p-8 pt-6">
                    <PageTitle title={pages.obchod.title} description={pages.obchod.description} />
                    <PageContentWrap status={verified} server={discordServers.find(server => server.name === "Survival Server")}>
                        <ShopItems shop={shop} />
                    </PageContentWrap>

                </div>
            </div>
        </>
    )
}
export default Page