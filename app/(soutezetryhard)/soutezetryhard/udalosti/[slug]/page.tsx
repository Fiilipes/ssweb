"use client"

import React from 'react'

import {useSession} from "next-auth/react";
import {Competition, User} from "@/assets/settings/interfaces";
import {getSS} from "@/assets/settings/firebase";
import functions from "@/assets/settings/functions";
import PageTitle from "@/components/reusable/composition/PageTitle";
import discordServers from "@/assets/settings/content/discordServers";
import PageContentWrap from "@/components/layout/wrap/PageContentWrap";
import {useRouter} from "next/navigation";
import CompetitionNotFound from "@/components/layout/soutezetryhard/udalosti/CompetitionNotFound";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {CalendarClock, Clock, Shapes, UserPlus2, Users2} from "lucide-react";
import {DataTable} from "./data-table";
import {columns} from "./columns";
import {ScrollArea} from "@/components/ui/scroll-area";

const Page = ({ params }: { params: { slug: string } }) => {
    const {data:session} = useSession()
    const router = useRouter()
    const [verified, setVerified] = React.useState(null)
    const [competitions, setCompetitions] = React.useState<Competition[]>([])
    const [myCompetition, setMyCompetition] = React.useState<Competition | null>(null)

    const [users, setUsers] = React.useState<User[]>([])

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

                            // Create a set of discordIDs from array1 for efficient lookup
                            const discordIDsSet = new Set(myCompetition.users.map((item:any) => item.discordID));

// Filter array2 based on the presence of discordID in array1
                            const transformedArray = res["users"].list.filter((item: User) => discordIDsSet.has(item.discordID));

                            if (myCompetition) {
                                setMyCompetition(myCompetition)
                                console.log(transformedArray)
                                setUsers(transformedArray.map((obj:any) => {
                                    return {
                                        username: obj.discordUsername,
                                        avatar: obj.discordAvatar,
                                        id: obj.discordID,
                                    };
                                }))
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

                            <PageContentWrap status={ verified } server={discordServers.find(server => server.name === "Soutěže Tryhard")} >
                                <ScrollArea className={"h-[65vh] max-h-[65vh] min-h-[65vh]"}>
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
                                                <div className="text-2xl font-bold">{

                                                    // @ts-ignore
                                                 functions.getTimeDifferenceDescription(new Date(myCompetition?.competition.dateType === "range" ? myCompetition?.competition.date.from.seconds * 1000 : myCompetition?.competition.date.seconds  * 1000), new Date())

                                                }</div>
                                                <p className="text-xs text-muted-foreground">
                                                    {
                                                        // @ts-ignore
                                                        myCompetition?.competition.dateType === "single" ? functions.getDateArrayFromTimestamp(myCompetition?.competition.date.seconds).reverse().join(". ") : `${functions.getDateArrayFromTimestamp(myCompetition?.competition.date.from.seconds).reverse().join(". ")} - ${functions.getDateArrayFromTimestamp(myCompetition?.competition.date.to.seconds).reverse().join(". ")}`}

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
                                                        myCompetition?.registration?.enabled ? functions.getDateArrayFromTimestamp(myCompetition?.registration?.date?.seconds).reverse().join(". ") : "Není potřeba"}
                                                </div>
                                                <p className="text-xs text-muted-foreground">
                                                    {
                                                        // check if you can still register
                                                        // @ts-ignore
                                                        myCompetition?.registration?.enabled ? new Date() < myCompetition?.registration?.date * 1000 ? "Stále se můžete registrovat" : "Registrace je již uzavřená" : "Není potřeba"
                                                    }
                                                </p>
                                            </CardContent>
                                        </Card>
                                    </div>
                                    <div className={"text-[1.4vw] font-bold mt-[2.5vw] mb-[1vw]"}>
                                        Soutěžící
                                    </div>

                                    <DataTable columns={columns} data={users} currentUsername={"filipjarolim"} />


                                </ScrollArea>
                                <div className={"h-[10vh] w-[70vw] mt-[-10vh] fixed z-80 pointer-events-none"} style={
                                    {
                                        //linear gradient
                                        backgroundImage: "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%)",
                                    }
                                }>
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
