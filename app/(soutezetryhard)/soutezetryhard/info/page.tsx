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
                        setInformations(res["informations"].list.reverse())
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

                {/*<div className={"fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg md:w-full"}>*/}
                {/*    <div className={"flex flex-col space-y-1.5 text-center sm:text-left"}>*/}
                {/*        <div className={"text-lg font-semibold leading-none tracking-tight"}>*/}
                {/*            d*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </div>
    )
}
export default Page
