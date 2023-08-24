"use client"

import * as React from "react"
import {
    Calculator,
    Calendar,
    CreditCard,
    Settings,
    Smile,
    User,
} from "lucide-react"

import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command"

const routes = [
    {
        category: "Suggestions",
        items: [
            {
                icon: <Calendar className="mr-2 h-4 w-4"/>,
                title: "Calendar",
            },
            {
                icon: <Smile className="mr-2 h-4 w-4"/>,
                title: "Search Emoji",
            },
            {
                icon: <Calculator className="mr-2 h-4 w-4"/>,
                title: "Calculator",
            },
        ],
    },
    {
        category: "Settings",
        items: [
            {
                icon: <User className="mr-2 h-4 w-4"/>,
                title: "Profile",
                shortcut: "⌘P",
            },
            {
                icon: <CreditCard className="mr-2 h-4 w-4"/>,
                title: "Billing",
                shortcut: "⌘B",
            },
            {
                icon: <Settings className="mr-2 h-4 w-4"/>,
                title: "Settings",
                shortcut: "⌘S",
            },
        ],
    },
] as  { category: string, items: { icon: React.ReactNode, title: string, shortcut?: string}[]}[]

export function CommandDialogDemo({open, setOpen}:{open:any,setOpen:any}) {


    return (
        <>
            <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandInput placeholder="Napište co hledáte..." />
                <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    {
                        routes.map((route) => (
                            // eslint-disable-next-line react/jsx-key
                            <CommandGroup heading={route.category}>
                                {
                                    route.items.map((item) => (
                                        // eslint-disable-next-line react/jsx-key
                                        <CommandItem>
                                            {item.icon}
                                            <span>{item.title}</span>
                                            {item.shortcut && (
                                                <CommandShortcut>
                                                    {item.shortcut}
                                                </CommandShortcut>
                                            )}
                                        </CommandItem>
                                    ))
                                }
                            </CommandGroup>
                        ))
                    }
                </CommandList>
            </CommandDialog>
        </>
    )
}