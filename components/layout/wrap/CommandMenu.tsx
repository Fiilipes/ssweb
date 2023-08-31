"use client"

import * as React from "react"

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


import {routes} from "@/assets/settings/content/routes"
import Link from "next/link";

export function CommandDialogDemo({open, setOpen}:{open:any,setOpen:any}) {


    return (
        <>
            <CommandDialog  open={open} onOpenChange={setOpen}>
                <CommandInput placeholder="Napište co hledáte..." />
                <CommandList>
                    <CommandEmpty>Pro hledaný výraz jsme nenašli žádný výsledek.</CommandEmpty>
                    {
                        routes.map((route) => (
                            // eslint-disable-next-line react/jsx-key
                            <CommandGroup heading={route.category}>
                                {
                                    route.items.map((item) => (
                                        // eslint-disable-next-line react/jsx-key
                                        <Link href={item.link} onClick={() => setOpen(false)}>
                                            <CommandItem>
                                                {item.icon}
                                                <span>{item.title}</span>
                                                {item.shortcut && (
                                                    <CommandShortcut>
                                                        {item.shortcut}
                                                    </CommandShortcut>
                                                )}
                                            </CommandItem>
                                        </Link>
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