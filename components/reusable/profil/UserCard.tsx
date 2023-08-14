import React from 'react'

import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Alert, AlertDescription, AlertTitle} from "@/components/ui/alert";
import {Skeleton} from "@/components/ui/skeleton";

import SignOutButton from "@/components/reusable/auth/SignOutButton";
import ShowUserProfile from "@/components/reusable/discord/ShowUserProfile";

const UserCard = ({session, loading}: {session:any, loading:boolean}) => {

    return (
        <Alert className={"flex flex-row justify-between items-end mb-4"}>
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
                                <AvatarImage src={`${session?.user?.image}`} alt={`@${session?.user?.name}`} width={320} height={320} />
                                <AvatarFallback>
                                    {session?.user?.name ? session?.user?.name.slice(0, 2) : "??"}
                                </AvatarFallback>
                            </Avatar>
                            <AlertTitle>@{session?.user?.name}</AlertTitle>
                            <AlertDescription>
                                {session?.user?.email}
                            </AlertDescription>
                        </div>

                        <div className={"flex flex-row"}>

                            <ShowUserProfile discordId={session?.id}>
                                View on discord
                            </ShowUserProfile>

                            <SignOutButton>
                                Logout
                            </SignOutButton>

                        </div>
                    </>
            }
        </Alert>
    )
}
export default UserCard
