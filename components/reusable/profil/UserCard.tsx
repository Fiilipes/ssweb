import React from 'react'

import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Alert, AlertDescription, AlertTitle} from "@/components/ui/alert";
import {Skeleton} from "@/components/ui/skeleton";

import SignOutButton from "@/components/reusable/auth/SignOutButton";
import ShowUserProfile from "@/components/reusable/discord/ShowUserProfile";

const UserCard = ({session, loading}: {session:any, loading:boolean}) => {

    return (
        <Alert className={"flex flex-row justify-between items-end mb-4 lg:p-[1.2vw]"}>
            {
                loading ?
                    <div>
                        <Skeleton className="h-[2vw] w-[2vw] rounded-full mb-[1vw]"/>

                        <Skeleton className="h-4 w-[200px]" />
                        <Skeleton className="h-4 w-[250px]" />
                    </div>
                    :
                    <>
                        <div>
                            <Avatar className={"w-[2vw] h-[2vw] mb-[1vw]"}>
                                <AvatarImage src={`${session?.image}`} alt={`@${session?.username}`} width={320} height={320} />
                                <AvatarFallback>
                                    {session?.username ? session?.username.slice(0, 2) : "??"}
                                </AvatarFallback>
                            </Avatar>
                            <AlertTitle className={"lg:text-[1vw]"}>@{session?.username}</AlertTitle>
                            <AlertDescription className={"lg:text-[.8vw]"}>
                                {session?.email}
                                {session?.image}
                            </AlertDescription>
                        </div>

                        <div className={"flex flex-row"}>

                            <ShowUserProfile discordId={session?.id}>
                                Zobrazit na discordu
                            </ShowUserProfile>

                            <SignOutButton>
                                Odhlásit se
                            </SignOutButton>

                        </div>
                    </>
            }
        </Alert>
    )
}
export default UserCard
