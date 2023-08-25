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
import UserDialog from "@/components/reusable/profil/UserDialog";
const UserMention = ({user}:{user:User}) => {
    return (

    <Dialog>
        <DialogTrigger>
            <div className={"border-black border-[.1vw] rounded-[.4vw] px-[.5vw] py-[.3vw] text-[80%] box-decoration-clone font-semibold leading-3"}>
                @{user.discordUsername}
            </div>
        </DialogTrigger>
        <UserDialog user={user} />
    </Dialog>
    )
}
export default UserMention
