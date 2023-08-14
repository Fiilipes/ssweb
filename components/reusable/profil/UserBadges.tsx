import React from 'react'

import {Skeleton} from "@/components/ui/skeleton";
import {Badge} from "@/components/ui/badge";

const UserBadges = ({session, loading}: {session:any, loading:boolean}) => {
    return (
        <div className={"flex flex-row"}>
            {
                loading ?
                    <div>
                        <Skeleton className="h-[2vw] w-[2vw] rounded-full mb-[1vw]"/>
                    </div>
                    :
                    <>
                        <Badge className={"w-fit mr-1"}>
                            Admin
                        </Badge>
                        <Badge className={"w-fit mr-1"} variant={"secondary"}>
                            Verified
                        </Badge>
                    </>
            }

        </div>
    )
}
export default UserBadges
