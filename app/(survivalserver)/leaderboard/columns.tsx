"use client"

import { ColumnDef } from "@tanstack/react-table"

import { MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type User = {
    sscoins: number
    username: string
    tier: "basic" | "pro"
}

export const columns: ColumnDef<User>[] = [
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
        header: "Status",
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const payment = row.original

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
                            <DropdownMenuItem>
                                Zobrazit profil
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            {/*<DropdownMenuItem>View customer</DropdownMenuItem>*/}
                            {/*<DropdownMenuItem>View payment details</DropdownMenuItem>*/}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>

            )
        },
    },
]
