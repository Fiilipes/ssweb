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
import {Button} from "@/components/ui/button";

const Page = ({ params }: { params: { slug: string } }) => {
    const {data:session} = useSession()
    const router = useRouter()
    const [verified, setVerified] = React.useState(null)
    const [competitions, setCompetitions] = React.useState<Competition[]>([])
    const [myCompetition, setMyCompetition] = React.useState<Competition | null>(null)

    const [users, setUsers] = React.useState<User[]>([])

    React.useEffect(
        () => {
            console.log(functions.removeDiacritics(decodeURIComponent(params.slug).toLowerCase()))

            if (session) {
                getSS(["users", "soutěže"]).then((res: any) => {
                    console.log(functions.removeDiacritics(decodeURIComponent(res["soutěže"].list.added[0].name).toLowerCase()))
                    console.log(functions.removeDiacritics(decodeURIComponent(params.slug).toLowerCase()) === functions.removeDiacritics(decodeURIComponent(res["soutěže"].list.added[0].name).toLowerCase()))

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
                                console.log(myCompetition)
                                setMyCompetition(myCompetition)
                                console.log(transformedArray)
                                setUsers(transformedArray.map((obj:any) => {
                                    return {
                                        username: obj.discordUsername,
                                        avatar: obj.discordAvatar,
                                        id: obj.discordID,
                                        numberOfCompetitions: res["soutěže"].list.added.filter((competition:any) => competition.users.find((user:any) => user.discordID === obj.discordID)).length
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
            <div className="flex-1 space-y-4 pt-6 ">

                {
                    // @ts-ignore
                    myCompetition !== false ?
                        <>
                            {/*<PageTitle status={ verified } title={myCompetition?.name!} description={`Bližší informace k události ${myCompetition?.name}`} buttons={[{content:"Upravit událost", link:`/soutezetryhard/udalosti/${decodeURIComponent(params.slug)}/edit`, variant:"default"}]} />*/}

                            <PageContentWrap status={ verified } server={discordServers.find(server => server.name === "Soutěže Tryhard")} >
                                <Card className={"p-8"} style={
                                    // @ts-ignore
                                    myCompetition?.competitionType !== "jednokolová soutěž" ?
                                        {
                                            background: "linear-gradient(180deg, rgba(85,40,255,0.5) 0px, #fff 150px)",
                                            // filter: "blur(100px)",
                                            backdropFilter: "blur(100px)",

                                        } : {
                                            background: "linear-gradient(180deg, rgba(250, 150, 50, .4) 0px, #fff 150px)",
                                            // filter: "blur(100px)",
                                            backdropFilter: "blur(100px)",

                                        }
                                }>
                                    <h1 className={"text-[30px] lg:text-[38px] font-bold"}>
                                        {myCompetition?.name!}
                                    </h1>
                                    {
                                        verified &&
                                        <p className={"font-semibold lg:font-medium text-[12px] lg:text-[14px] text-[#333] dark:text-[#ccc]"}>
                                            {`Všechny informace k této události`}
                                        </p>
                                    }

                                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-[40px] mb-[16px]">
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

                                        {
                                            //@ts-ignore
                                            myCompetition?.competitionType === "jednokolová soutěž" ? <>
                                                    <Card>
                                                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                                            <CardTitle className="text-sm font-medium">Datum konání</CardTitle>
                                                            <CalendarClock className={"opacity-60 w-4 h-4"} />
                                                        </CardHeader>
                                                        <CardContent>
                                                            <div className="text-2xl font-bold">{

                                                                // @ts-ignore
                                                                functions.getTimeDifferenceDescription(new Date(myCompetition?.miles.find((mile:any) => mile.name === "competitionDate").date.type === "range" ? myCompetition?.miles.find((mile:any) => mile.name === "competitionDate").date.value.from.seconds * 1000 : myCompetition?.miles.find((mile:any) => mile.name === "competitionDate").date.value.seconds  * 1000), new Date())

                                                            }</div>
                                                            <p className="text-xs text-muted-foreground">
                                                                {
                                                                    // @ts-ignore
                                                                    myCompetition?.miles.find((mile:any) => mile.name === "competitionDate").date.type === "single" ? functions.getDateArrayFromTimestamp(myCompetition?.miles.find((mile:any) => mile.name === "competitionDate").date.value.seconds).reverse().join(". ") : `${functions.getDateArrayFromTimestamp(myCompetition?.miles.find((mile:any) => mile.name === "competitionDate").date.value.from.seconds).reverse().join(". ")} - ${functions.getDateArrayFromTimestamp(myCompetition?.miles.find((mile:any) => mile.name === "competitionDate").date.value.to.seconds).reverse().join(". ")}`}

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
                                                                    myCompetition?.miles.find((mile:any) => mile.name === "registration") ? functions.getDateArrayFromTimestamp(myCompetition?.miles.find((mile:any) => mile.name === "registration").date.type === "single" ? myCompetition?.miles.find((mile:any) => mile.name === "registration").date.value.seconds : myCompetition?.miles.find((mile:any) => mile.name === "registration").date.value.to.seconds).reverse().join(". ") : "Není potřeba"}
                                                            </div>
                                                            <p className="text-xs text-muted-foreground">
                                                                {
                                                                    // check if you can still register
                                                                    // @ts-ignore
                                                                    myCompetition?.miles.find((mile:any) => mile.name === "registration") ? myCompetition?.miles.find((mile:any) => mile.name === "registration").date.type === "single" ? new Date() < myCompetition?.miles.find((mile:any) => mile.name === "registration").date.value * 1000 ? "Stále se můžete registrovat" : "Registrace je již uzavřená" : new Date() < myCompetition?.miles.find((mile:any) => mile.name === "registration").date.value.to * 1000 ? "Stále se můžete registrovat" : "Registrace je již uzavřená"
                                                                        : "Soutěž probíhá bez registrace"
                                                                }
                                                            </p>
                                                        </CardContent>
                                                    </Card>
                                                </> :
                                                <>
                                                    <Card>
                                                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                                            <CardTitle className="text-sm font-medium">
                                                                Počet milníků
                                                            </CardTitle>
                                                            <UserPlus2 className={"opacity-60 w-4 h-4"} />
                                                        </CardHeader>
                                                        <CardContent>
                                                            <div className="text-2xl font-bold">
                                                                {
                                                                    // @ts-ignore
                                                                    myCompetition?.miles.filter(mile => mile.important).length
                                                                }
                                                            </div>
                                                            <p className="text-xs text-muted-foreground">
                                                                Více informací níže
                                                            </p>
                                                        </CardContent>
                                                    </Card>
                                                </>
                                        }
                                    </div>

                                    <div className={"text-[24px] font-bold mt-[40px] mb-[16px]"}>
                                        Soutěžící
                                    </div>

                                    <DataTable columns={columns} data={users} currentUsername={"filipjarolim"} />




                                </Card>
                                    




                                <Button variant={"destructive"} className={"my-[50px]"} onClick={() => {
                                    functions.removeCompetition(myCompetition?.id!)
                                }}>
                                    Odstranit soutěž
                                </Button>


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
