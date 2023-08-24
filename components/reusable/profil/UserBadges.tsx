import React from 'react'

import {Skeleton} from "@/components/ui/skeleton";
import {Badge} from "@/components/ui/badge";
import {Separator} from "@/components/ui/separator";

const UserBadges = ({session, loading}: {session:any, loading:boolean}) => {
    return (
      <div>
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
          <Separator className={"my-4"}/>
      </div>
    )
}
export default UserBadges
