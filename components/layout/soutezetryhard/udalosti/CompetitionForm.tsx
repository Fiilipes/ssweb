"use client"

import React from 'react'
import * as z from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import functions from "@/assets/settings/functions";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import CompetitionType from "@/components/layout/soutezetryhard/udalosti/new/CompetitionType";
import {ScrollArea} from "@/components/ui/scroll-area";
import CompetitionName from "@/components/layout/soutezetryhard/udalosti/new/CompetitionName";
import CompetitionRegistrationSwitch
    from "@/components/layout/soutezetryhard/udalosti/new/registration/CompetitionRegistrationSwitch";
import CompetitionMoredaysSwitch
    from "@/components/layout/soutezetryhard/udalosti/new/moredays/CompetitionMoredaysSwitch";
import CompetitionRegistrationDate
    from "@/components/layout/soutezetryhard/udalosti/new/registration/CompetitionRegistrationDate";
import CompetitionDate from "@/components/layout/soutezetryhard/udalosti/new/CompetitionDate";
import CompetitionUsers from "@/components/layout/soutezetryhard/udalosti/new/CompetitionUsers";
import {User} from "@/assets/settings/interfaces";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command"
import {
    CalendarClock,
    CalendarIcon,
    CalendarPlus,
    Clock,
    LinkIcon,
    PlaneTakeoff,
    Plus,
    Speech,
    Swords,
    Trash,
    Users2
} from "lucide-react";
import CompetitionCreateChannelSwitch
    from "@/components/layout/soutezetryhard/udalosti/new/createchannel/CompetitionCreateChannelSwitch";
import CompetitionPlace from "@/components/layout/soutezetryhard/udalosti/new/CompetitionPlace";
import CompetitionDescription from "@/components/layout/soutezetryhard/udalosti/new/CompetitionDescription";
import {CompetitionLinks} from "@/components/layout/soutezetryhard/udalosti/new/CompetitionLinks";
import Link from "next/link";
import {format} from "date-fns";
import UnderConstruction from "@/components/reusable/composition/UnderConstruction";
import {Button} from "@/components/ui/button";
import {Form} from "@/components/ui/form";
import CompetitionTheme from "@/components/layout/soutezetryhard/udalosti/new/CompetitionTheme";
import {
    Dialog,
    DialogContent,
    DialogDescription, DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import menuOptions from "@/assets/settings/content/notes/menu";
import {Popover, PopoverContent, PopoverTrigger} from '@/components/ui/popover';
import {cn} from "@/lib/utils";
import {Calendar} from "@/components/ui/calendar";
import CompetitionSoutezType from "@/components/layout/soutezetryhard/udalosti/new/CompetitionSoutezType";
import {Separator} from "@/components/ui/separator";
import { Switch } from '@/components/ui/switch';
import {DateRange} from "react-day-picker";
import CompetitionMiles from "@/components/layout/soutezetryhard/udalosti/new/CompetitionMiles";

const milesOptionsIconClass = "w-4 h-4 mr-2"
const milesOptions = [
    {
        name: "registration",
        label: "Registrace",
        date: {
            value: undefined,
            type: "single"
        },
        description: "Registrace na soutěž",
        icon: <CalendarPlus className={milesOptionsIconClass} />,
    },
    {
        name: "competitionDate",
        label: "Datum soutěže",
        date: {
            value: undefined,
            type: "single"
        },
        description: "Datum konání soutěže",
        icon: <Swords className={milesOptionsIconClass} />,
    },

]

const CompetitionForm = ({defaultValues,chooseType, users}:{defaultValues:any,chooseType: boolean, users:any}) => {


    const [competitionUsers, setCompetitionUsers] = React.useState(defaultValues?.users ? defaultValues?.users : []);
    const [competitionLinks, setCompetitionLinks] = React.useState(defaultValues?.links ? defaultValues?.links : []);
    const [submit, setSubmit] = React.useState(false);
    const [preview__CreateChannel, setPreview__CreateChannel] = React.useState(false);
    const [createChannelSwitch, setCreateChannelSwitch] = React.useState(defaultValues?.createChannel ? defaultValues?.createChannel : false);
    const [preview__Name, setPreview__Name] = React.useState(defaultValues?.name ? defaultValues?.name : "");
    const [preview__Place, setPreview__Place] = React.useState("");
    const [preview__Description, setPreview__Description] = React.useState("");
    const [preview__Type, setPreview__Type] = React.useState(defaultValues?.type ? defaultValues?.type : "");
    const [preview__CompetitionType, setPreview__CompetitionType] = React.useState(defaultValues?.competitionType ? defaultValues?.competitionType : "");
    const [miles,setMiles] = React.useState<any[]>([])
    // ref to the registration date
    const usersRef = React.useRef<HTMLDivElement>(null);
    const [date, setDate] = React.useState<DateRange | Date | undefined>(undefined)
    const formSchema = z.object({
        name: z.string().min(2, {
            message: "Name must be at least 2 characters.",
        }).default(defaultValues?.name ? defaultValues?.name : undefined),
        type: z.enum(["soutěž", "přednáška", "zájezd"]).default(defaultValues?.type ? defaultValues?.type : undefined),
        competitionType: z.enum(["jednokolová soutěž", "vícekolová soutěž"]).default(defaultValues?.competitionType ? defaultValues?.competitionType : undefined),
        user: z.string().optional(),
        createChannel: z.boolean().default(defaultValues?.createChannel ? defaultValues?.createChannel : false).optional(),
        place: z.string().default(defaultValues?.place ? defaultValues?.place : undefined),
        description: z.string().default(defaultValues?.description ? defaultValues?.description : undefined).optional(),
    })

    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            type: defaultValues?.type ? defaultValues?.type : undefined,
            name: defaultValues?.name ? defaultValues?.name : undefined,
            competitionType: defaultValues?.competitionType ? defaultValues?.competitionType : undefined,
            createChannel: defaultValues?.createChannel ? defaultValues?.createChannel : false,
            place: defaultValues?.place ? defaultValues?.place : undefined,
            description: defaultValues?.description ? defaultValues?.description : undefined,

        }
    })

    const editor = functions.createEditor({
        originContent: "",
        placeholder:   {
            placeholder: ({ node }:{node:any}) => {
                if (node.type.name !== 'heading') {
                    return "Napište krátké info k soutěži..."
                }
            },
        },
        document: {},
        menubar: [menuOptions().bold, menuOptions().italic, menuOptions().strike, menuOptions().bulletList],
        editable: true,
    })
    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        if (submit) {
            // Do something with the form values.
            // ✅ This will be type-safe and validated.
            console.log(values)

            if (defaultValues) {
                console.log("old")
                functions.editCompetition(values, competitionUsers, competitionLinks, createChannelSwitch, true)
            } else {
                console.log("new")
                functions.createCompetition(values, competitionUsers, competitionLinks, createChannelSwitch, functions.convertHtmlToMarkdown(editor?.editor?.getHTML() ? editor?.editor?.getHTML() : ""),miles, true)
            }
        } else {
            console.log("not submit")
        }

    }

    React.useEffect(() => {
        setInterval(() => {
            setSubmit(false)
        }, 1000)
    },[])


    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">


                <Tabs defaultValue={chooseType ? "introduction" : "need"} className="space-y-4">
                    <TabsContent value="introduction" className="space-y-4">


                        <div className={"my-[24px] flex flex-row items-center justify-between font-bold text-[28px]"}>
                            <div>
                                Úvod
                            </div>
                            <TabsList>
                                <TabsTrigger className={"bg-black text-white"} value="need" disabled={!form.getValues().type} >
                                    Pokračovat
                                </TabsTrigger>
                            </TabsList>
                        </div>
                        <CompetitionType form={form} setPreview__Type={setPreview__Type} />
                        <div className={"h-[64px]"}></div>
                        <Separator className={"mb-[16px]  mt-[64px]"}/>

                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 ">
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">
                                        1. typ
                                    </CardTitle>
                                    <Swords className={"opacity-60 w-4 h-4"}  />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">
                                        Soutěž
                                    </div>
                                    <p className="text-xs text-muted-foreground">
                                        Základní typ události
                                    </p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">
                                        2. typ
                                    </CardTitle>
                                    <Speech className={"opacity-60 w-4 h-4"} />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">Přednáška</div>
                                    <p className="text-xs text-muted-foreground">
                                        Událost, ve které se nesoutěží
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">
                                        3. typ
                                    </CardTitle>
                                    <PlaneTakeoff className={"opacity-60 w-4 h-4"} />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">Zájezd</div>
                                    <p className="text-xs text-muted-foreground">
                                        Událost, která se koná mimo server
                                    </p>
                                </CardContent>
                            </Card>
                        </div>


                    </TabsContent>
                    <TabsContent value="need" className="space-y-4">
                        {

                            preview__Type === "soutěž" ? <>
                                     <div className={"my-[24px] flex flex-row items-center justify-between font-bold text-[28px]"}>
                                            <div>
                                                Potřebné informace
                                            </div>
                                            <div className={"flex flex-row items-center"}>
                                                <TabsList>
                                                    <TabsTrigger className={"bg-black text-white"} value="miles" disabled={ !form.getValues().name ||
                                                        !form.getValues().competitionType
                                                    } >
                                                        Pokračovat
                                                    </TabsTrigger>
                                                </TabsList>
                                                {
                                                    chooseType ? <TabsList className={"mx-1"}>
                                                        <TabsTrigger value="introduction">
                                                            Jít zpět
                                                        </TabsTrigger>
                                                    </TabsList> : <Link href={`/soutezetryhard/udalosti/${
                                                        defaultValues ? defaultValues?.name : ""}`}>
                                                        <Button variant={"outline"} className={"mx-1"}>Zobrazit událost</Button>
                                                    </Link>
                                                }
                                            </div>
                                        </div>
                                        <div className={"mb-4 gap-y-[16px] flex flex-col"}>
                                            <CompetitionName form={form} setPreview__Name={setPreview__Name}/>
                                            <CompetitionSoutezType form={form} setPreview__CompetitionType={setPreview__CompetitionType} />
                                            <CompetitionPlace  form={form} setPreview__Place={setPreview__Place}/>

                                        </div>

                                    {/*<CompetitionDate form={form} moreDaysSwitch={moreDaysSwitch} setPreview__CompetitionDate={setPreview__CompetitionDate} setPreview__CompetitionDateRange={setPreview__CompetitionDateRange} />*/}
                                </>:
                                preview__Type === "přednáška" ?
                                    <>
                                        <UnderConstruction />
                                    </>:
                                    preview__Type === "zájezd" &&
                                    <>
                                        <UnderConstruction />
                                    </>

                        }

                        <div>


                        </div>
                    </TabsContent>
                    <TabsContent value={"miles"}>
                        <div className={"my-[24px] flex flex-row items-center justify-between font-bold text-[28px]"}>
                            <div>
                                Milníky
                            </div>
                            <div className={"flex flex-row items-center"}>
                                <TabsList>
                                    <TabsTrigger className={"bg-black text-white"} value="other" disabled={!form.getValues().type} >
                                        Pokračovat
                                    </TabsTrigger>
                                </TabsList>
                                {
                                    chooseType ? <TabsList className={"mx-1"}>
                                        <TabsTrigger value="need">
                                            Jít zpět
                                        </TabsTrigger>
                                    </TabsList> : <Link href={`/soutezetryhard/udalosti/${
                                        defaultValues ? defaultValues?.name : ""}`}>
                                        <Button variant={"outline"} className={"mx-1"}>Zobrazit událost</Button>
                                    </Link>
                                }
                            </div>
                        </div>

                       <CompetitionMiles date={date} setDate={setDate}  milesOptions={milesOptions} miles={miles} setMiles={setMiles} />


                        {/*<CompetitionRegistrationSwitch  form={form} setPreview__Registration={setPreview__Registration} registrationSwitch={registrationSwitch} setRegistrationSwitch={setRegistrationSwitch} registrationDateRef={registrationDateRef} />*/}

                        {/*<CompetitionRegistrationDate  form={form} registrationDateRef={registrationDateRef} setPreview__RegistrationDate={setPreview__RegistrationDate} />*/}



                    </TabsContent>
                    <TabsContent value={"other"}>
                        <div className={"my-[24px] flex flex-row items-center justify-between font-bold text-[28px]"}>
                            <div>
                                Dodatečné informace
                            </div>
                            <div className={"flex flex-row items-center"}>
                                <Button className={"inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"} type="submit" onClick={() => setSubmit(true)}>Dokončit</Button>
                                {
                                    chooseType ? <TabsList className={"mx-1"}>
                                        <TabsTrigger value="miles">
                                            Jít zpět
                                        </TabsTrigger>
                                    </TabsList> : <Link href={`/soutezetryhard/udalosti/${
                                        defaultValues ? defaultValues?.name : ""}`}>
                                        <Button variant={"outline"} className={"mx-1"}>Zobrazit událost</Button>
                                    </Link>
                                }
                            </div>
                        </div>
                        <div className={"mt-8"}>


                            <CompetitionUsers form={form} users={users} competitionUsers={competitionUsers} setCompetitionUsers={setCompetitionUsers} usersRef={usersRef} />
                            <CompetitionCreateChannelSwitch form={form} createChannelSwitch={createChannelSwitch} setCreateChannelSwitch={setCreateChannelSwitch} setPreview__CreateChannel={setPreview__CreateChannel}  />

                            <div className={`mt-4 flex flex-row flex-wrap ${defaultValues?.users ? "opacity-1" : "opacity-0"} transition-all duration-500`} ref={usersRef}>
                                {
                                    competitionUsers.map((user:User) => (
                                        // eslint-disable-next-line react/jsx-key
                                        <div className={"flex flex-row items-center mr-4 mb-2"}>

                                            <Card>
                                                <CardHeader className={"flex flex-row items-start"}>
                                                    <CardTitle className={"flex flex-row text-[20px]"}>
                                                        <Avatar className={"w-[32px] h-[32px] mr-2"} >
                                                            <AvatarImage src={user.discordAvatar} />
                                                            <AvatarFallback>CN</AvatarFallback>
                                                        </Avatar>
                                                        @{user.discordUsername}
                                                        {
                                                            user.discordDiscriminator !== "0" ? "#" + user.discordDiscriminator : ""
                                                        }
                                                    </CardTitle>
                                                    <CardDescription className={"flex flex-row items-center justify-center"}>
                                                        <Trash className={"w-[17px] h-[17px] opacity-80 ml-4"} onClick={() => {
                                                            setCompetitionUsers(competitionUsers.filter((user2:User) => user2.discordID != user.discordID))
                                                            if (competitionUsers.length - 1 === 0) {
                                                                usersRef.current!.style.opacity = "0"
                                                            }
                                                        }} />
                                                    </CardDescription>
                                                </CardHeader>

                                            </Card>
                                            <div className={"ml-2 font-bold flex flex-row items-center"}>


                                            </div>
                                        </div>
                                    ))
                                }
                            </div>


                            <div className={"mb-4 mt-2 w-full"}>

                                <CompetitionDescription editor={editor} form={form} setPreview__Description={setPreview__Description}/>

                                {/*<CompetitionLinks linksRef={linksRef}  competitionLinks={competitionLinks} setCompetitionLinks={setCompetitionLinks}/>*/}

                                {/*<div ref={linksRef} className={`mt-4 flex flex-row flex-wrap ${defaultValues?.links ? "opacity-100" : "opacity-0"} transition-all duration-500`}>*/}
                                {/*    {*/}
                                {/*        competitionLinks.map((link:any) => (*/}
                                {/*                // eslint-disable-next-line react/jsx-key*/}
                                {/*                <div className={"flex flex-row items-center mr-4 mb-2"}>*/}
                                {/*                    <Card>*/}
                                {/*                        <CardHeader className={"flex flex-row items-start"}>*/}
                                {/*                            <CardTitle className={"flex flex-row text-[1.2vw]"}>*/}
                                {/*                                <Link target={"_blank"} href={link.link} className={"w-fit h-[32px] mr-2 flex flex-row items-center"} >*/}
                                {/*                                    <LinkIcon className={"w-[12px] h-[12px] mr-2"} />*/}
                                {/*                                    {link.label}*/}
                                {/*                                </Link>*/}
                                {/*                            </CardTitle>*/}
                                {/*                            <CardDescription className={"flex flex-row items-center justify-center"}>*/}
                                {/*                                <Trash className={"w-[17px] h-[17px] opacity-80 ml-4"} onClick={() => {*/}
                                {/*                                    setCompetitionLinks(competitionLinks.filter((link2:any) => link2.link != link.link))*/}
                                {/*                                    if (competitionLinks.length - 1 === 0) {*/}
                                {/*                                        linksRef.current!.style.opacity = "0"*/}
                                {/*                                    }*/}
                                {/*                                }} />                                                                                    </CardDescription>*/}
                                {/*                        </CardHeader>*/}

                                {/*                    </Card>*/}
                                {/*                    <div className={"ml-2 font-bold flex flex-row items-center"}>*/}
                                {/*                    </div>*/}
                                {/*                </div>*/}
                                {/*            )*/}
                                {/*        )*/}
                                {/*    }*/}
                                {/*</div>*/}
                            </div>


                        </div>
                    </TabsContent>
                </Tabs>
            </form>
        </Form>    )
}
export default CompetitionForm
