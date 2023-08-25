import React from 'react'
import {DialogContent, DialogHeader, DialogTitle} from "@/components/ui/dialog";
import { User } from '@/assets/settings/interfaces';
import UserAvatar from "@/components/reusable/profil/UserAvatar";
import functions from '@/assets/settings/functions';

const UserDialog = ({user}:{user:User|any}) => {
    return (
        <DialogContent>
            <DialogHeader>
                <DialogTitle className={"flex flex-row items-center"}>
                    <UserAvatar username={user.discordUsername} avatarUrl={functions.avatarToAvatarUrl(user.discordAvatar,user.discordID)} className={"h-8 w-8 rounded-full mr-2"} />
                    <div>
                        @{user.discordUsername}
                    </div>
                </DialogTitle>
            </DialogHeader>
        </DialogContent>
    )
}
export default UserDialog
