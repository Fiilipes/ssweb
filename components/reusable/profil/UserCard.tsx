import React from 'react'

import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Alert, AlertDescription, AlertTitle} from "@/components/ui/alert";
import {Skeleton} from "@/components/ui/skeleton";

import SignOutButton from "@/components/reusable/auth/SignOutButton";
import ShowUserProfile from "@/components/reusable/discord/ShowUserProfile";

const UserCard = ({session, loading}: {session:any, loading:boolean}) => {

    return (
        <Alert className={"flex flex-row justify-between items-end mb-4 lg:p-[20px]"}>
            {
                loading ?
                    <div>
                        <Skeleton className="h-[32px] w-[32px] rounded-full mb-[16px]"/>

                        <Skeleton className="h-4 w-[200px]" />
                        <Skeleton className="h-4 w-[250px]" />
                    </div>
                    :
                    <>
                        <div>
                            <Avatar className={"w-[32px] h-[32px] mb-[16px]"}>
                                <AvatarImage src={`${session?.image}`} alt={`@${session?.username}`} width={320} height={320} />
                                <AvatarFallback>
                                    {session?.username ? session?.username.slice(0, 2) : "??"}
                                </AvatarFallback>
                            </Avatar>
                            <AlertTitle className={"lg:text-[16px]"}>@{session?.username}</AlertTitle>
                            <AlertDescription className={"lg:text-[12px]"}>
                                {session?.email}
                            </AlertDescription>
                        </div>

                        <div className={"flex flex-row"}>

                            {
                                session?.id &&
                                <ShowUserProfile discordId={session?.id}>
                                    Zobrazit na discordu
                                </ShowUserProfile>
                            }
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
