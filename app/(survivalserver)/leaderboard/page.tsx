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
import functions from "@/assets/settings/functions";
import UserMention from "@/components/reusable/profil/UserMention";
import { DataTable } from './data-table';
import {columns, User} from "@/app/(survivalserver)/leaderboard/columns";

const Page = () => {

    const {data:session} = useSession()


    const [verified, setVerified] = React.useState(null)
    const [users, setUsers] = React.useState<User[] | []>([])

    React.useEffect(
        () => {
            if (session) {
                getSS(["users"]).then((res: any) => {

                    // @ts-ignore
                    functions.verifyUserById(res["users"],session.id,"Survival Server").then(verified => setVerified(verified))

                    const data = res["users"]
                    // @ts-ignore
                    const sortedList = data.list.filter((user:User) => user.servers.find(server => server.name === "Survival Server").verified).sort((a, b) => b.ssCoins - a.ssCoins)


                    setUsers(sortedList.map((obj:any) => {
                        return {
                            username: obj.discordUsername,
                            sscoins: obj.ssCoins,
                            tier: "pro"
                        };
                    }))
                })
            }
        }, [session]
    )

    return (
        <>
            <div className="hidden flex-col md:flex">

                <div className="flex-1 space-y-4 p-8 pt-6">
                    <PageTitle status={verified} buttons={[]} title={pages.leaderboard.title} description={pages.leaderboard.description} />
                    <PageContentWrap status={verified} server={discordServers.find(server => server.name === "Survival Server")}>
                        {/*<div>*/}
                        {/*    {*/}
                        {/*        users && users.list.map(*/}
                        {/*        (user:User, index:number) => (*/}
                        {/*            // eslint-disable-next-line react/jsx-key*/}
                        {/*            <div>*/}
                        {/*                <UserMention user={user} />*/}
                        {/*            </div>*/}
                        {/*    ))}*/}
                        {/*</div>*/}

                        <div className="container mx-auto py-10">
                            <DataTable columns={columns} data={users} currentUsername={"filipjarolim"} />
                        </div>

                    </PageContentWrap>

                </div>
            </div>
        </>
    )
}
export default Page