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
                    <CommandInput placeholder="Použijte příkaz, či vyhledejte stránku" />
                    <CommandList>
                        <CommandEmpty>Žádná stránka nenalezena.</CommandEmpty>
                        <CommandGroup heading="Suggestions">
                            <CommandItem>
                                <Calendar className="mr-2 h-4 w-4" />
                                <span>Calendar</span>
                            </CommandItem>
                            <CommandItem>
                                <Smile className="mr-2 h-4 w-4" />
                                <span>Search Emoji</span>
                            </CommandItem>
                            <CommandItem>
                                <Calculator className="mr-2 h-4 w-4" />
                                <span>Calculator</span>
                            </CommandItem>
                        </CommandGroup>
                        <CommandSeparator />
                        <CommandGroup heading="Settings">
                            <CommandItem>
                                <User className="mr-2 h-4 w-4" />
                                <span>Profile</span>
                                <CommandShortcut>⌘P</CommandShortcut>
                            </CommandItem>
                            <CommandItem>
                                <CreditCard className="mr-2 h-4 w-4" />
                                <span>Billing</span>
                                <CommandShortcut>⌘B</CommandShortcut>
                            </CommandItem>
                            <CommandItem>
                                <Settings className="mr-2 h-4 w-4" />
                                <span>Settings</span>
                                <CommandShortcut>⌘S</CommandShortcut>
                            </CommandItem>
                        </CommandGroup>
                    </CommandList>
                </Command>
           </div>
        </div>
    )

}
export default Routes
