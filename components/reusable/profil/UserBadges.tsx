import React from 'react'

import {Skeleton} from "@/components/ui/skeleton";
import {Badge} from "@/components/ui/badge";
import {Separator} from "@/components/ui/separator";
import { User } from '@/assets/settings/interfaces';

const UserBadges = ({session, loading, myUser}: {session:any, loading:boolean, myUser: User | null}) => {
    return (
      <div>
          <div className={"flex flex-row"}>
              {
                  loading ?
                      <div>
                          <Skeleton className="h-[32px] w-[32px] rounded-full mb-[16px]"/>
                      </div>
                      :
                      <>
                          {
                              myUser && myUser?.discordID === "701509602814066909" || myUser?.discordID === "357137548147032065"
                              &&
                              <Badge className={"w-fit mr-1"} variant={"secondary"}>
                                  Survival Server
                              </Badge>
                          }
                          <Badge className={"w-fit mr-1"}>
                              Admin
                          </Badge>
                          {
                              myUser && myUser?.servers?.find(server => server.name === "Survival Server")?.verified &&
                              <Badge className={"w-fit mr-1"} variant={"secondary"}>
                                  Survival Server
                              </Badge>
                          }
                          {
                              myUser && myUser?.servers?.find(server => server.name === "Soutěže Tryhard")?.verified &&
                              <Badge className={"w-fit mr-1"} variant={"secondary"}>
                                  Soutěže Tryhard
                              </Badge>
                          }

                      </>
              }

          </div>
          <Separator className={"my-4"}/>
      </div>
    )
}
export default UserBadges
