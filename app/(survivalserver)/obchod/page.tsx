"use client"

import React from 'react'
import { getSS } from "@/assets/settings/firebase";
import {useSession} from "next-auth/react";
import NotVerifiedWithServerCard from "@/components/reusable/discord/NotVerifiedWithServerCard";
import discordServers from "@/assets/settings/content/discordServers";


const Page = () => {

    const {data:session} = useSession()


    const [verified, setVerified] = React.useState(null)
    const [shop, setShop] = React.useState<any[] | null>(null)

    React.useEffect(
        () => {
            if (session) {
                getSS(["users", "shop"]).then((res: any) => {

                    // @ts-ignore
                    const myUser = res["users"].users.list.find((u:any) => u.discordID === session?.id)

                    setVerified(myUser)

                    setShop(res["shop"].shop.list)
                })
            }
        }, [session]
    )

    return (
        <>
            {
                verified === null ? <>
                        Načítání...
                    </> :
                    // @ts-ignore
                    !verified.servers.find(server => server.name === "Survival Server") ? <>
                            <NotVerifiedWithServerCard discordServer={discordServers.find(server => server.name === "Survival Server")} />
                        </> : <>

                            <div className="hidden flex-col md:flex">

                                <div className="flex-1 space-y-4 p-8 pt-6">
                                    <div>
                                        <h1 className={"text-[2vw] font-bold"}>
                                            Obchod
                                        </h1>
                                        <p className={"font-medium text-[.9vw] text-[#333]"}>
                                            V obchodě si za své SS coiny můžete nakoupit nejrůznější itemy
                                        </p>
                                    </div>




                                </div>
                            </div>
                        </>
            }

        </>
    )
}
export default Page