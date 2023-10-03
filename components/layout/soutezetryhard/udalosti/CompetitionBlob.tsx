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
    console.log(competition.miles.find((mile:any) => mile.name === "competitionDate").date.value)
    return (
        <ContextMenu>
            <ContextMenuTrigger>
                <Alert className={"mt-4 px-[48px] py-[8px] overflow-hidden"} style={
                    competition.type !== "olympiáda" ?
                        {
                            backgroundImage: "linear-gradient(310deg, #fff 60%, rgba(85,40,255,0.5) 100%)",
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
                                <div className={"flex flex-col items-center justify-center min-w-[48px] min-h-[64px] rounded-xl"}>
                                    <div>
                                        {competition.miles.find((mile:any) => mile.name === "competitionDate").date.type === "single" ? functions.getDayOfWeekFromDateArray(functions.getDateArrayFromTimestamp(competition.miles.find((mile:any) => mile.name === "competitionDate").date.value.seconds)) : ` ${functions.getDayOfWeekFromDateArray(functions.getDateArrayFromTimestamp(competition.miles.find((mile:any) => mile.name === "competitionDate").date.value.from.seconds))}`}

                                    </div>
                                    <div className={"font-semibold text-[32px]"}>
                                        {competition.miles.find((mile:any) => mile.name === "competitionDate").date.type === "single" ? functions.getDateArrayFromTimestamp(competition.miles.find((mile:any) => mile.name === "competitionDate").date.value.seconds)[2] : ` ${functions.getDateArrayFromTimestamp(competition.miles.find((mile:any) => mile.name === "competitionDate").date.value.from.seconds)[2]}`}
                                    </div>
                                </div>
                                <Separator className={"transform rotate-90 w-[64px] opacity-100 bg-[#ccc]"} />
                                <div className={"text-[24px] h-[32px] font-bold w-[240px] max-w-[240px] overflow-hidden flex-row justify-start text-left"}>
                                    {competition.name}
                                </div>
                                <Separator className={"transform rotate-90 w-[64px]"} />
                                <div className={"grid grid-cols-2 gap-x-[64px]"}>
                                    <div className={"flex flex-row items-center my-1"}>
                                        <Shapes className={"w-[12px] h-[12px] opacity-70 mr-2"} />
                                        <div className={"text-[12px]"}>
                                            {//first letter capitalized
                                                competition.type.charAt(0).toUpperCase() + competition.type.slice(1)
                                            }
                                        </div>
                                    </div>
                                    <div className={"flex flex-row items-center my-1"}>
                                        <Users2 className={"w-[12px] h-[12px] opacity-70 mr-2"} />
                                        <div className={"flex flex-row items-center w-fit text-[12px]"}>
                                            {
                                                competition.users.length >= 0 ? competition.users.length >= 1 ? competition.users.length >= 5 ? competition.users.length + " účastníků" : competition.users.length + " účastníci" : competition.users.length + " účastník" : "Nikdo se neúčastní"
                                            }
                                        </div>
                                    </div>
                                    <div className={"flex flex-row items-center my-1"}>
                                        <MapPin className={"w-[12px] h-[12px] opacity-70 mr-2"} />
                                        <div className={"text-[12px]"}>
                                            {
                                                competition.place.charAt(0).toUpperCase() + competition.place.slice(1)
                                            }
                                        </div>
                                    </div>
                                </div>



                            </div>
                        </AccordionTrigger>
                        <AccordionContent className={"pt-[16px]"}>
                            <div className={"flex flex-row gap-x-[16px]"}>
                                <Link href={"/soutezetryhard/udalosti/" + competition.name}>
                                    <Button variant={"outline"} className={"flex flex-row items-center"}>
                                        <Info className={"w-[14px] h-[14px] opacity-80 mr-2"}/> Zobrazit bližší informace
                                    </Button>
                                </Link>
                                <Link target={"_blank"} href={"https://discord.com/channels/1130637842276683909/" + competition.postId}>
                                    <Button variant={"outline"} className={"flex flex-row items-center"}>
                                        <MessagesSquare className={"w-[14px] h-[14px] opacity-80 mr-2"}/> Discord
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
