"use client"

import {useSession} from "next-auth/react";
import React from "react";
import {getSS} from "@/assets/settings/firebase";
import PageTitle from "@/components/reusable/composition/PageTitle";
import discordServers from "@/assets/settings/content/discordServers";
import PageContentWrap from "@/components/layout/wrap/PageContentWrap";
import Information from "@/components/layout/info/Information";

const Page = () => {
    const {data:session} = useSession()

    const [verified, setVerified] = React.useState(null)
    const [informations, setInformations] = React.useState<any[]>([])

    React.useEffect(
        () => {
            if (session) {
                getSS(["users", "informations"]).then((res: any) => {

                    // @ts-ignore
                    const myUser = res["users"].users.list.find((u:any) => u.discordID === session?.id).servers.find((s:any) => s.name === "Soutěže Tryhard")?.verified

                    setVerified(myUser)

                    if (myUser) {
                        setInformations(res["informations"].list)
                    }

                })
            }
        }, [session]
    )
    return (
        <div>
            <div className="flex-1 space-y-4 p-8 pt-6">

                <PageTitle status={verified} title={"Informace"} description={"Novinky a důležité zprávy ze Soutěže Tryhard"} buttons={[{content:"Nová zpráva", link:"/soutezetryhard/info/new", variant:"default"}]} />

                <PageContentWrap status={verified} server={discordServers.find(server => server.name === "Soutěže Tryhard")}>
                    {
                        informations.map((info, index) => (
                            // eslint-disable-next-line react/jsx-key
                            <Information info={info} />
                        ))
                    }
                </PageContentWrap>
            </div>
        </div>
    )
}
export default Page
