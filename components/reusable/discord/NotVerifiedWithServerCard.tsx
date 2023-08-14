import React from 'react'

import {DiscordServer} from "@/assets/settings/interfaces";

const NotVerifiedWithServerCard = ({ discordServer }: { discordServer: DiscordServer | undefined }) => {
    return (
        <div>
            Je nám líto běžte na {discordServer?.link} a ověřte se
        </div>
    )
}
export default NotVerifiedWithServerCard
