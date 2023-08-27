import React from 'react'
import Loading from "@/components/reusable/composition/Loading";
import NotVerifiedWithServerCard from "@/components/reusable/discord/NotVerifiedWithServerCard";
import {DiscordServer} from "@/assets/settings/interfaces";
import {ScrollArea} from "@/components/ui/scroll-area";

const PageContentWrap = ({status, server, children, special = false, disableScroll = false}: {status: null | boolean, server: DiscordServer | undefined, children: React.ReactNode, special?: boolean | undefined, disableScroll?: boolean | undefined}) => {
    return (
            <>
                {
                    !disableScroll ?<ScrollArea className={`${special ? "h-[73vh]" : "h-[63vh]"} pr-[2vw]`}>
                        {
                            status === null ?
                                <Loading>
                                    Načítání...
                                </Loading> :
                                !status ?
                                    <NotVerifiedWithServerCard discordServer={server} />
                                    :
                                    <div>
                                        {children}


                                    </div>
                        }

                    </ScrollArea>
                        : <div className={`${special ? "h-[73vh]" : "h-[63vh]"} pr-[2vw]`}>
                        {
                            status === null ?
                                <Loading>
                                    Načítání...
                                </Loading> :
                                !status ?
                                    <NotVerifiedWithServerCard discordServer={server} />
                                    :
                                    <div>
                                        {children}


                                    </div>
                        }

                    </div>

                }

                <div className={"h-[10vh] w-[75vw] bottom-[2vh] fixed z-80 pointer-events-none"} style={
                    {
                        //linear gradient
                        backgroundImage: "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%)",
                    }
                }>
                </div>

            </>
    )
}
export default PageContentWrap
