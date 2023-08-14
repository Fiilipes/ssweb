import React from 'react'
import {ContextMenu, ContextMenuContent, ContextMenuTrigger} from "@/components/ui/context-menu";
import {Alert} from "@/components/ui/alert";
import {AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import functions from "@/assets/settings/functions";
import {Separator} from "@/components/ui/separator";
import {MapPin, Shapes} from "lucide-react";
import {
    AlertDialog, AlertDialogAction, AlertDialogCancel,
    AlertDialogContent, AlertDialogDescription, AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger
} from "@/components/ui/alert-dialog";

const CompetitionBlob = ({competition}: {competition: any}) => {
    return (
        <ContextMenu>
            <ContextMenuTrigger>
                <Alert className={"mt-4 p-2 overflow-hidden"} style={
                    competition.type === "olympiáda" ?
                        {
                            backgroundImage: "linear-gradient(310deg, #fff 60%, rgba(255,100,200,0.5) 100%)",
                            // filter: "blur(100px)",
                            backdropFilter: "blur(100px)",

                        } : {
                            backgroundImage: "linear-gradient(310deg, #fff 60%, rgba(50,0,200,0.4) 100%)",
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
                                <div className={"text-[1.8vw] font-bold"}>
                                    {competition.name}
                                </div>
                                <Separator className={"transform rotate-90 w-[4vw]"} />
                                <div className={"flex flex-col"}>
                                    <div className={"flex flex-row items-center my-1"}>
                                        <Shapes className={"w-[.8vw] h-[.8vw] opacity-70 mr-2"} />
                                        <div>
                                            {competition.type}
                                        </div>
                                    </div>
                                    <div className={"flex flex-row items-center my-1"}>
                                        <MapPin className={"w-[.8vw] h-[.8vw] opacity-70 mr-2"} />
                                        <div>
                                            {competition.place}
                                        </div>
                                    </div>

                                </div>



                            </div>
                        </AccordionTrigger>
                        <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
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
