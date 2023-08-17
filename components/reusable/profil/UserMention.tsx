import { User } from '@/assets/settings/interfaces'
import React from 'react'


import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
const UserMention = ({user}:{user:User}) => {
    return (

    <Dialog>
        <DialogTrigger>
            <div className={"border-black border-[.1vw] rounded-[.4vw] px-[.5vw] py-[.3vw] text-[80%] box-decoration-clone font-semibold leading-3"}>
                @{user.discordUsername}
            </div>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogTitle className={"flex flex-row items-center"}>
                    <img src={user.discordAvatar} alt={"userImage"} className={"h-8 w-8 rounded-full mr-2"} />
                    <div>
                        @{user.discordUsername}
                    </div>
                </DialogTitle>
            </DialogHeader>
        </DialogContent>
    </Dialog>
    )
}
export default UserMention
