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
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {CalendarClock, Clock, Shapes, UserPlus2, Users2} from "lucide-react";

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
                            <PageTitle status={ verified } title={myCompetition?.name!} description={`Bližší informace k události ${myCompetition?.name}`} buttons={[{content:"Upravit událost", link:`/soutezetryhard/udalosti/${decodeURIComponent(params.slug)}/edit`, variant:"default"}]} />

                            <PageContentWrap status={ verified } server={discordServers.find(server => server.name === "Soutěže Tryhard")}>
                                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-[1vw]">
                                    <Card>
                                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                            <CardTitle className="text-sm font-medium">
                                                Typ události
                                            </CardTitle>
                                            <Shapes className={"opacity-60 w-4 h-4"}  />
                                        </CardHeader>
                                        <CardContent>
                                            <div className="text-2xl font-bold">
                                                {myCompetition&&myCompetition.type.charAt(0).toUpperCase() + myCompetition.type.slice(1)}
                                            </div>
                                            <p className="text-xs text-muted-foreground">
                                                {
                                                    myCompetition?.type === "soutěž" ?
                                                        "Základní typ události"
                                                        :
                                                        "nic"
                                                }
                                            </p>
                                        </CardContent>
                                    </Card>

                                    <Card>
                                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                            <CardTitle className="text-sm font-medium">Datum konání</CardTitle>
                                            <CalendarClock className={"opacity-60 w-4 h-4"} />
                                        </CardHeader>
                                        <CardContent>
                                            <div className="text-2xl font-bold">Za 2 týdny</div>
                                            <p className="text-xs text-muted-foreground">
                                                {
                                                    // @ts-ignore
                                                    myCompetition?.competition.dateType === "single" ? functions.getDateArrayFromTimestamp(myCompetition?.competition.date.seconds).reverse().join(".") : `${functions.getDateArrayFromTimestamp(myCompetition?.competition.date.from.seconds).reverse().join(".")} - ${functions.getDateArrayFromTimestamp(myCompetition?.competition.date.to.seconds).reverse().join(".")}`}

                                            </p>
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                            <CardTitle className="text-sm font-medium">
                                                Registrace
                                            </CardTitle>
                                            <UserPlus2 className={"opacity-60 w-4 h-4"} />
                                        </CardHeader>
                                        <CardContent>
                                            <div className="text-2xl font-bold">
                                                {
                                                    // @ts-ignore
                                                    myCompetition?.registration?.enabled ? functions.getDateArrayFromTimestamp(myCompetition?.registration?.date?.seconds).reverse().join(".") : "Není potřeba"}
                                            </div>
                                            <p className="text-xs text-muted-foreground">
                                                7 ve více než jedné soutěži
                                            </p>
                                        </CardContent>
                                    </Card>
                                </div>

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
