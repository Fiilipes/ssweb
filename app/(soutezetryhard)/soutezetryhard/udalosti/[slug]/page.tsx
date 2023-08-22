"use client"

import React from 'react'

import {useSession} from "next-auth/react";
import {Competition} from "@/assets/settings/interfaces";
import {getSS} from "@/assets/settings/firebase";
import functions from "@/assets/settings/functions";
import PageTitle from "@/components/reusable/composition/PageTitle";
import discordServers from "@/assets/settings/content/discordServers";
import PageContentWrap from "@/components/layout/wrap/PageContentWrap";
import {useRouter} from "next/navigation";
import CompetitionNotFound from "@/components/layout/soutezetryhard/udalosti/CompetitionNotFound";

const Page = ({ params }: { params: { slug: string } }) => {
    const {data:session} = useSession()
    const router = useRouter()
    const [verified, setVerified] = React.useState(null)
    const [competitions, setCompetitions] = React.useState<Competition[]>([])
    const [myCompetition, setMyCompetition] = React.useState<Competition | null>(null)

    React.useEffect(
        () => {
            if (session) {
                getSS(["users", "soutěže"]).then((res: any) => {

                    // @ts-ignore
                    functions.verifyUserById(res["users"],session.id,"Soutěže Tryhard").then(verified => {
                        setVerified(verified)
                        if (verified) {
                            setCompetitions(functions.organizeCompetitionsByDate(res["soutěže"].list.added))

                            const myCompetition = res["soutěže"].list.added.find((c:Competition) => functions.removeDiacritics(c.name.toLowerCase()) === functions.removeDiacritics(decodeURIComponent(params.slug).toLowerCase()))

                            if (myCompetition) {
                                setMyCompetition(myCompetition)
                            }
                        }
                    })


                })
            }
        }, [session]
    )

    return (
        <div>
            <div className="flex-1 space-y-4 p-8 pt-6">

                {
                    // @ts-ignore
                    myCompetition !== false ?
                        <>
                            <PageTitle status={ verified } title={myCompetition?.name!} description={`Bližší informace k události ${myCompetition?.name}.`} buttons={[{content:"Upravit událost", link:`/soutezetryhard/udalosti/${decodeURIComponent(params.slug)}/edit`, variant:"default"}]} />

                            <PageContentWrap status={ verified } server={discordServers.find(server => server.name === "Soutěže Tryhard")}>
                                něco
                            </PageContentWrap>
                        </> :
                        <>
                            <CompetitionNotFound />
                        </>
                }
            </div>
        </div>
    )
}
export default Page
