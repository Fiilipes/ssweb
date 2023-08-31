"use client"

import { ColumnDef } from "@tanstack/react-table"


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

import { ArrowUpDown, MoreHorizontal, User2 } from "lucide-react"


// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type User = {
    name: string
    description: string
    modLink: string
}

export const columns: ColumnDef<User>[] = [
    {
        accessorKey: "name",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Název
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => {
            return <div className="text-left font-medium">{row.getValue("name")}</div>
        },

    },
    {
        accessorKey: "description",
        header: () => <div className="text-left">Popis</div>,
        cell: ({ row }) => {
            return <div className="text-left font-medium">{row.getValue("description")}</div>
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
                            <Dialog>
                                    <DialogTrigger className={"relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"} >
                                        <User2 className={"h-4 w-4 mr-2"}/>
                                        <div>
                                            Zobrazit profil
                                        </div>
                                    </DialogTrigger>


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
