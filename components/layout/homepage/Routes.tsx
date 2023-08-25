import React from 'react'
import {
    Calculator,
    Calendar,
    CreditCard,
    Settings,
    Smile,
    User,
} from "lucide-react"

import {
    Command,
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
const Routes = () => {
    return (
        <div id={"navigation"} className={"mt-[5vw] w-full px-[10vw]"}>
            <div>
                <div className="pb-[20px] lg:pb-[2vw]">
                    <div>
                        <h1 className={"text-[30px] text-center lg:text-left lg:text-[2vw] font-bold"}>
                            Rozcestník
                        </h1>
                        <p className={"font-semibold text-[12px] lg:font-medium text-center lg:text-left lg:text-[.9vw] text-[#333]"}>
                            Navigujte se snadně na našem webu
                        </p>
                    </div>
                </div>
                <Command className="rounded-lg border shadow-md">
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
                                            <Link href={item.link}>
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
                </Command>
           </div>
        </div>
    )

}
export default Routes
