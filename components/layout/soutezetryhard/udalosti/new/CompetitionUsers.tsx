import React from 'react'
import {FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Separator} from "@/components/ui/separator";
import {Check, ChevronsUpDown} from "lucide-react";
import {Command, CommandEmpty, CommandGroup, CommandInput, CommandItem} from "@/components/ui/command";
import {User} from "@/assets/settings/interfaces";

const CompetitionUsers = ({form, users, competitionUsers, setCompetitionUsers, usersRef }: {form: any, users: User[], competitionUsers: User[], setCompetitionUsers: any, usersRef: any}) => {
    return (
        <FormField
            control={form.control}
            name="user"
            render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4 my-[10px] bg-white">
                    <div className="flex flex-col space-y-0.5 mr-8">
                        <FormLabel className="text-base text-[20px]">
                            Přidat uživatele
                        </FormLabel>
                        <FormDescription>
                            Vyberte uživatele, kteří se budou účastnit této soutěže.
                        </FormDescription>
                    </div>


                    <Popover>
                        <PopoverTrigger asChild>
                            <FormControl>
                                <Button
                                    variant="outline"
                                    role="combobox"

                                >
                                    Přidat

                                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                </Button>
                            </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-[300px] p-0">
                            <Command>
                                <CommandInput placeholder="Hledejte uživatele..." />
                                <CommandEmpty>Uživatel nenalezen.</CommandEmpty>
                                <CommandGroup>
                                    {users.map((user:User) => (
                                        <CommandItem
                                            value={user.discordUsername}
                                            key={user.discordID}
                                            onSelect={() => {
                                                form.setValue("user", user.discordID)
                                                if (!competitionUsers.includes(user)) {
                                                    setCompetitionUsers([...competitionUsers, user])
                                                    if ([...competitionUsers, user].length > 0) {
                                                        usersRef.current.style.opacity = "1"
                                                    }
                                                }
                                            }}
                                        >
                                            <Check
                                                className={cn(
                                                    "mr-2 h-4 w-4",
                                                    user.discordID === field.value
                                                        ? "opacity-100"
                                                        : "opacity-0"
                                                )}
                                            />
                                            <div className={"flex flex-row items-center"}>
                                                <Avatar className={"w-[32px] h-[32px]"} >
                                                    <AvatarImage src={user.discordAvatar} />
                                                    <AvatarFallback>CN</AvatarFallback>
                                                </Avatar>
                                                <div className={"ml-2 font-bold"}>
                                                    @{user.discordUsername}
                                                    {
                                                        user.discordDiscriminator !== "0" ? "#" + user.discordDiscriminator : ""
                                                    }
                                                </div>
                                            </div>
                                        </CommandItem>
                                    ))}
                                </CommandGroup>
                            </Command>
                        </PopoverContent>
                    </Popover>
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}
export default CompetitionUsers
