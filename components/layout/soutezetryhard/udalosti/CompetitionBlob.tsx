import React from 'react'
import {ContextMenu, ContextMenuContent, ContextMenuTrigger} from "@/components/ui/context-menu";
import {Alert} from "@/components/ui/alert";
import {AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import functions from "@/assets/settings/functions";
import {Separator} from "@/components/ui/separator";
import {Construction, Info, MapPin, MessagesSquare, Shapes, Users2} from "lucide-react";
import {
    AlertDialog, AlertDialogAction, AlertDialogCancel,
    AlertDialogContent, AlertDialogDescription, AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger
} from "@/components/ui/alert-dialog";
import { User } from '@/assets/settings/interfaces';
import UserMention from "@/components/reusable/profil/UserMention";
import Link from 'next/link';
import {Button} from "@/components/ui/button";
import UserAvatar from "@/components/reusable/profil/UserAvatar";

const CompetitionBlob = ({competition, users}: {competition: any, users: User[]}) => {
    return (
        <ContextMenu>
            <ContextMenuTrigger>
                <Alert className={"mt-4 px-[3vw] py-[.5vw] overflow-hidden"} style={
                    competition.type === "olympiáda" ?
                        {
                            backgroundImage: "linear-gradient(310deg, #fff 60%, rgba(255,200,100,0.5) 100%)",
                            // filter: "blur(100px)",
                            backdropFilter: "blur(100px)",

                        } : {
                            backgroundImage: "linear-gradient(310deg, #fff 60%, rgba(250,150,50,0.4) 100%)",
                            // filter: "blur(100px)",
                            backdropFilter: "blur(100px)",

                        }
                }>

                    <AccordionItem value={
                        competition.name.toLowerCase().replace(/\s/g, '')
                    } className={"border-none"} >

                        <AccordionTrigger className={"hover:no-underline z-10"}>
                            <div className={"flex flex-row items-center"}>
                                <div className={"flex flex-col items-center justify-center min-w-[3vw] min-h-[4vw] rounded-xl"}>
                                    <div>
                                        {competition.competition.dateType === "single" ? functions.getDayOfWeekFromDateArray(functions.getDateArrayFromTimestamp(competition.competition.date.seconds)) : ` ${functions.getDayOfWeekFromDateArray(functions.getDateArrayFromTimestamp(competition.competition.date.from.seconds))}`}

                                    </div>
                                    <div className={"font-semibold text-[2vw]"}>
                                        {competition.competition.dateType === "single" ? functions.getDateArrayFromTimestamp(competition.competition.date.seconds)[2] : ` ${functions.getDateArrayFromTimestamp(competition.competition.date.from.seconds)[2]}`}
                                    </div>
                                </div>
                                <Separator className={"transform rotate-90 w-[4vw] opacity-100 bg-[#ccc]"} />
                                <div className={"text-[1.5vw] h-[2vw] font-bold w-[15vw] max-w-[15vw] overflow-hidden flex-row justify-start text-left"}>
                                    {competition.name}
                                </div>
                                <Separator className={"transform rotate-90 w-[4vw]"} />
                                <div className={"grid grid-cols-2 gap-x-[4vw]"}>
                                    <div className={"flex flex-row items-center my-1"}>
                                        <Shapes className={"w-[.8vw] h-[.8vw] opacity-70 mr-2"} />
                                        <div>
                                            {//first letter capitalized
                                                competition.type.charAt(0).toUpperCase() + competition.type.slice(1)
                                            }
                                        </div>
                                    </div>
                                    <div className={"flex flex-row items-center my-1"}>
                                        <Users2 className={"w-[.8vw] h-[.8vw] opacity-70 mr-2"} />
                                        <div className={"flex flex-row items-center w-fit"}>
                                            {
                                                competition.users.map((user: User) => {
                                                    // eslint-disable-next-line react/jsx-key,@next/next/no-img-element
                                                    return <UserAvatar className={"mr-[-1vw] h-[1.5vw] w-[1.5vw] opacity-90 rounded-full"} username={users.find(u=>user.discordID===u.discordID)?.discordUsername} avatarUrl={`https://cdn.discordapp.com/avatars/${user.discordID}/${users.find(u=>user.discordID===u.discordID)?.discordAvatar}.png?size=128`} />
                                                })
                                            }
                                        </div>
                                    </div>
                                    <div className={"flex flex-row items-center my-1"}>
                                        <MapPin className={"w-[.8vw] h-[.8vw] opacity-70 mr-2"} />
                                        <div>
                                            {
                                                competition.place.charAt(0).toUpperCase() + competition.place.slice(1)
                                            }
                                        </div>
                                    </div>
                                </div>



                            </div>
                        </AccordionTrigger>
                        <AccordionContent className={"pt-[1vw]"}>
                            <div className={"flex flex-row gap-x-[1vw]"}>
                                <Link href={"/soutezetryhard/udalosti/" + competition.name}>
                                    <Button variant={"outline"} className={"flex flex-row items-center"}>
                                        <Info className={"w-[.9vw] h-[.9vw] opacity-80 mr-2"}/> Zobrazit bližší informace
                                    </Button>
                                </Link>
                                <Link target={"_blank"} href={"https://discord.com/channels/1130637842276683909/" + competition.postId}>
                                    <Button variant={"outline"} className={"flex flex-row items-center"}>
                                        <MessagesSquare className={"w-[.9vw] h-[.9vw] opacity-80 mr-2"}/> Discord
                                    </Button>
                                </Link>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Alert>
            </ContextMenuTrigger>
            <ContextMenuContent>
                <AlertDialog>
                    <AlertDialogTrigger className={"relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 pl-8 w-full"}>

                        Odstranit

                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                            <AlertDialogDescription>
                                This action cannot be undone. This will permanently delete your account
                                and remove your data from our servers.
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction>Continue</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>

            </ContextMenuContent>
        </ContextMenu>
    )
}
export default CompetitionBlob
