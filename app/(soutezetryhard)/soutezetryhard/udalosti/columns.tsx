"use client"

import { ColumnDef } from "@tanstack/react-table"

import {MoreHorizontal, User2, View} from "lucide-react"

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
import Link from "next/link"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Competition = {
    name: string,
    type: "soutěž" | "olympiáda" | "seminář" | "soustředění" | "přednáška"
}

export const columns: ColumnDef<Competition>[] = [
    {
        accessorKey: "name",
        header: () => <div className="text-left">Název</div>,
        cell: ({ row }) => {
            return <div className="text-left font-medium">{row.getValue("name")}</div>
        },
    },
    {
        accessorKey: "type",
        header: () => <div className="text-left">Typ</div>,
        cell: ({ row }) => {
            // @ts-ignore
            return <div className="text-left font-medium">{row.getValue("type").charAt(0).toUpperCase() + row.getValue("type").slice(1)}</div>
        },
    },
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
                            <Link href={`/soutezetryhard/udalosti/${row.original.name}`} className={"relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"} >
                                <View className={"h-4 w-4 mr-2"}/>
                                <div>
                                    Zobrazit událost
                                </div>
                            </Link>


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
