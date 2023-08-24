"use client"

import React from 'react'

import {useSession} from "next-auth/react";
import {Competition, Server, User} from "@/assets/settings/interfaces";
import {getSS} from "@/assets/settings/firebase";
import functions from "@/assets/settings/functions";
import PageTitle from "@/components/reusable/composition/PageTitle";
import discordServers from "@/assets/settings/content/discordServers";
import PageContentWrap from "@/components/layout/wrap/PageContentWrap";
import {useRouter} from "next/navigation";
import CompetitionNotFound from "@/components/layout/soutezetryhard/udalosti/CompetitionNotFound";
import CompetitionForm from "@/components/layout/soutezetryhard/udalosti/CompetitionForm";

const Page = ({ params }: { params: { slug: string } }) => {
    const {data:session} = useSession()
    const router = useRouter()
    const [verified, setVerified] = React.useState(null)
    const [competitions, setCompetitions] = React.useState<Competition[]>([])
    const [myCompetition, setMyCompetition] = React.useState<Competition | null>(null)
    const [users, setUsers] = React.useState<User[]>([]);

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

                            const databaseUsers = res["users"]?.list.filter((user: User) => user?.servers?.find((server: Server) => server?.name === "Soutěže Tryhard")?.verified)

                            let myUsers: User[] = []

                            databaseUsers.forEach((user: User) => {
                                myUsers.push({
                                    discordUsername: user?.discordUsername,
                                    discordID: user?.discordID,
                                    discordAvatar: `https://cdn.discordapp.com/avatars/${user?.discordID}/${user?.discordAvatar}.webp?size=512`,
                                    discordDiscriminator: user?.discordDiscriminator
                                })
                            })

                            setUsers(myUsers)
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
                            <PageTitle status={ verified } title={`Upravit událost`} description={`Nyní upravujete událost ${myCompetition?.name}`} buttons={[]} />

                            <PageContentWrap status={ verified } server={discordServers.find(server => server.name === "Soutěže Tryhard")}>
                                <CompetitionForm defaultValues={
                                    {
                                        type: myCompetition?.type,
                                        name: myCompetition?.name,
                                        registration: myCompetition?.registration?.enabled,
                                        moredays: myCompetition?.competition?.dateType === "range",
                                        // @ts-ignore
                                        registrationDate: new Date(myCompetition?.registration.date.seconds * 1000),
                                        // @ts-ignore
                                        competitionDate: myCompetition?.competition?.dateType === "range" ? {from: new Date(myCompetition?.competition?.date?.from?.seconds * 1000), to: new Date(myCompetition?.competition?.date?.to?.seconds * 1000)} : new Date(myCompetition?.competition?.date?.seconds *1000),
                                        place: myCompetition?.place,
                                        description: myCompetition?.description,
                                        createChannel: myCompetition?.createChannel,
                                        links: myCompetition?.links,
                                        users: myCompetition?.users,
                                    }
                                } chooseType={false} users={users} />
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
