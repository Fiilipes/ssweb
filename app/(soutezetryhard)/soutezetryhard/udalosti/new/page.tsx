"use client"

import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"


import { Button } from "@/components/ui/button"
import {
    CalendarClock,
    CalendarIcon, CalendarPlus,
    Check,
    ChevronLeft,
    ChevronsUpDown,
    Cross,
    LinkIcon,
    Trash,
    XCircle
} from "lucide-react"

import {
    Form,

} from "@/components/ui/form"

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import {useForm} from "react-hook-form";
import React, {useEffect} from "react";
import {Separator} from "@/components/ui/separator";
import {ScrollArea} from "@/components/ui/scroll-area";
import {  format } from "date-fns"
import {getSS} from "@/assets/settings/firebase";
import CompetitionName from "@/components/layout/soutezetryhard/udalosti/new/CompetitionName";
import CompetitionType from "@/components/layout/soutezetryhard/udalosti/new/CompetitionType";
import CompetitionRegistrationSwitch
    from "@/components/layout/soutezetryhard/udalosti/new/registration/CompetitionRegistrationSwitch";
import CompetitionMoredaysSwitch
    from "@/components/layout/soutezetryhard/udalosti/new/moredays/CompetitionMoredaysSwitch";
import CompetitionRegistrationDate
    from "@/components/layout/soutezetryhard/udalosti/new/registration/CompetitionRegistrationDate";
import CompetitionDate from "@/components/layout/soutezetryhard/udalosti/new/CompetitionDate";
import functions from "@/assets/settings/functions";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Card, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import CompetitionUsers from "@/components/layout/soutezetryhard/udalosti/new/CompetitionUsers";
import CompetitionCreateChannelSwitch
    from "@/components/layout/soutezetryhard/udalosti/new/createchannel/CompetitionCreateChannelSwitch";
import CompetitionPlace from "@/components/layout/soutezetryhard/udalosti/new/CompetitionPlace";
import CompetitionDescription from "@/components/layout/soutezetryhard/udalosti/new/CompetitionDescription";
import {CompetitionLinks} from "@/components/layout/soutezetryhard/udalosti/new/CompetitionLinks";
import {Competition, Server, User} from "@/assets/settings/interfaces"
import UnderConstruction from "@/components/reusable/composition/UnderConstruction";
import {useSession} from "next-auth/react";
import PageTitle from "@/components/reusable/composition/PageTitle";
import PageContentWrap from "@/components/layout/wrap/PageContentWrap";
import discordServers from "@/assets/settings/content/discordServers";
import CompetitionForm from "@/components/layout/soutezetryhard/udalosti/CompetitionForm";


export default function Page() {

    const [users, setUsers] = React.useState<User[]>([]);
    const [verified, setVerified] = React.useState(null)
    const {data:session} = useSession()

    useEffect(() => {
        getSS(["users"]).then(
            (res:any) => {

               if (session) {
                   // @ts-ignore
                   functions.verifyUserById(res["users"],session.id,"Soutěže Tryhard").then(verified => {
                       setVerified(verified)
                       if (verified) {
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
               }
            }
        )
    },[session])


    return (
        <section className="flex-1 space-y-4 p-8 pt-6">

            <PageTitle status={verified} title={"Vytvořit událost"} description={"Vytvořte novou událost a přidejte jí do Soutěží Tryhard."} buttons={[]} />

            <PageContentWrap status={verified} server={discordServers.find(server => server.name === "Soutěže Tryhard")}>
                <CompetitionForm defaultValues={undefined} chooseType={true} users={users} />
            </PageContentWrap>
        </section>
    )
}