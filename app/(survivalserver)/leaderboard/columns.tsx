"use client"

import { ColumnDef } from "@tanstack/react-table"

import {MoreHorizontal, User2} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import UserDialog from "@/components/reusable/profil/UserDialog";
import functions from "@/assets/settings/functions"
import UserAvatar from "@/components/reusable/profil/UserAvatar";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type User = {
    sscoins: number
    username: string
    avatar: string
    id: string
    tier: "basic" | "pro"
}

export const columns: ColumnDef<User>[] = [
    {
        accessorKey: "avatar",
        header: () => <div className="text-left">Avatar</div>,
        cell: ({ row }) => {
            return <UserAvatar username={row.getValue("username")} avatarUrl={functions.avatarToAvatarUrl(row.getValue("avatar"),row.original.id)} className={"h-[2vw] w-[2vw] opacity-90"} />
        }
    },
    {
        accessorKey: "username",
        header: () => <div className="text-left">Username</div>,
        cell: ({ row }) => {
            return <div className="text-left font-medium">@{row.getValue("username")}</div>
        },

    },
    {
        accessorKey: "sscoins",
        header: () => <div className="text-left">SS Coins</div>,
        cell: ({ row }) => {
            return <div className="text-left font-medium">{row.getValue("sscoins")}</div>
        },
    },
    {
        accessorKey: "tier",
        header: () => <div className="text-left">Tier</div>,
        cell: ({ row }) => {
            // @ts-ignore
            return <div className="text-left font-medium">{row.getValue("tier").charAt(0).toUpperCase() + row.getValue("tier").slice(1)}</div>
        },    },
    {
        id: "actions",
        cell: ({ row }) => {

            return (
                <div className={"flex flex-row justify-end"}>
                    <DropdownMenu >
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className={"h-8 w-8 p-0"} >
                                <span className="sr-only">Open menu</span>
                                <MoreHorizontal className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Možnosti</DropdownMenuLabel>
                            <Dialog>
                                    <DialogTrigger className={"relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"} >
                                        <User2 className={"h-4 w-4 mr-2"}/>
                                        <div>
                                            Zobrazit profil
                                        </div>
                                    </DialogTrigger>


                                <UserDialog user={{
                                    discordAvatar: row.original.avatar,
                                    discordID: row.original.id,
                                    discordUsername: row.original.username,
                                }} />
                            </Dialog>

                            {/*<DropdownMenuSeparator />*/}
                            {/*<DropdownMenuItem>View customer</DropdownMenuItem>*/}
                            {/*<DropdownMenuItem>View payment details</DropdownMenuItem>*/}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>

            )
        },
    },
]
