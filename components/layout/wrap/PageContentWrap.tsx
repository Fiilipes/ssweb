import React from 'react'
import Loading from "@/components/reusable/composition/Loading";
import NotVerifiedWithServerCard from "@/components/reusable/discord/NotVerifiedWithServerCard";
import {DiscordServer} from "@/assets/settings/interfaces";

const PageContentWrap = ({status, server, children}: {status: null | boolean, server: DiscordServer | undefined, children: React.ReactNode}) => {
    return (
        <div className={`pr-[2vw] transition-all duration-500`}>
            {
                status === null ?
                    <Loading>
                        <div className="spinner"></div>
                    </Loading> :
                    !status ?
                        <NotVerifiedWithServerCard discordServer={server} />
                        :
                        <div>
                            {children}
                        </div>
            }
        </div>
    )
}
export default PageContentWrap
