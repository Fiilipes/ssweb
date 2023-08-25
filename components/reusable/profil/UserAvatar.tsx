import React from 'react'
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
const UserAvatar = ({username,avatarUrl, className}:{username:string|undefined,avatarUrl:string, className:string}) => {
    return (
        <Avatar className={className}>
            <AvatarImage src={avatarUrl} alt={`@${username}`} />
            <AvatarFallback>{
                username ? username.slice(0, 2) : "??"
            }</AvatarFallback>
        </Avatar>
    )
}
export default UserAvatar
