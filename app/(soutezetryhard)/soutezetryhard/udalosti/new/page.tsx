"use client"

import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"


import { Button } from "@/components/ui/button"
import {
    CalendarClock,
    CalendarIcon, CalendarPlus,
    Check,
    ChevronLeft,
    ChevronsUpDown,
    Cross,
    LinkIcon,
    Trash,
    XCircle
} from "lucide-react"

import {
    Form,

} from "@/components/ui/form"

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import {useForm} from "react-hook-form";
import React, {useEffect} from "react";
import {Separator} from "@/components/ui/separator";
import {ScrollArea} from "@/components/ui/scroll-area";
import {  format } from "date-fns"
import {getSS} from "@/assets/settings/firebase";
import CompetitionName from "@/components/layout/soutezetryhard/udalosti/new/CompetitionName";
import CompetitionType from "@/components/layout/soutezetryhard/udalosti/new/CompetitionType";
import CompetitionRegistrationSwitch
    from "@/components/layout/soutezetryhard/udalosti/new/registration/CompetitionRegistrationSwitch";
import CompetitionMoredaysSwitch
    from "@/components/layout/soutezetryhard/udalosti/new/moredays/CompetitionMoredaysSwitch";
import CompetitionRegistrationDate
    from "@/components/layout/soutezetryhard/udalosti/new/registration/CompetitionRegistrationDate";
import CompetitionDate from "@/components/layout/soutezetryhard/udalosti/new/CompetitionDate";
import functions from "@/assets/settings/functions";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Card, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import CompetitionUsers from "@/components/layout/soutezetryhard/udalosti/new/CompetitionUsers";
import CompetitionCreateChannelSwitch
    from "@/components/layout/soutezetryhard/udalosti/new/createchannel/CompetitionCreateChannelSwitch";
import CompetitionPlace from "@/components/layout/soutezetryhard/udalosti/new/CompetitionPlace";
import CompetitionDescription from "@/components/layout/soutezetryhard/udalosti/new/CompetitionDescription";
import {CompetitionLinks} from "@/components/layout/soutezetryhard/udalosti/new/CompetitionLinks";
import {Server, User } from "@/assets/settings/interfaces"
import UnderConstruction from "@/components/reusable/composition/UnderConstruction";


export default function Page() {

    const [registrationSwitch, setRegistrationSwitch] = React.useState(false);
    const [moreDaysSwitch, setMoreDaysSwitch] = React.useState(false);
    const [createChannelSwitch, setCreateChannelSwitch] = React.useState(false);
    const [preview__Name, setPreview__Name] = React.useState("");
    const [preview__Place, setPreview__Place] = React.useState("");
    const [preview__Description, setPreview__Description] = React.useState("");
    const [preview__Type, setPreview__Type] = React.useState("");
    const [preview__Registration, setPreview__Registration] = React.useState(false);
    const [preview__MoreDays, setPreview__MoreDays] = React.useState(false);
    const [preview__RegistrationDate, setPreview__RegistrationDate] = React.useState(undefined);
    const [preview__CompetitionDate, setPreview__CompetitionDate] = React.useState(undefined);
    const [preview__CompetitionDateRange, setPreview__CompetitionDateRange] = React.useState({from: undefined, to: undefined});
    const [users, setUsers] = React.useState<User[]>([]);
    const [competitionUsers, setCompetitionUsers] = React.useState([]);
    const [competitionLinks, setCompetitionLinks] = React.useState([]);

    const [preview__CreateChannel, setPreview__CreateChannel] = React.useState(false);

    useEffect(() => {
        getSS(["users"]).then(
            (data:any) => {


                const databaseUsers = data["users"]?.users.list.filter((user: User) => user?.servers?.find((server: Server) => server?.name === "Soutěže Tryhard")?.verified)

                let myUsers: User[] = []

                databaseUsers.forEach((user: User) => {
                    myUsers.push({
                        discordUsername: user?.discordUsername,
                        discordID: user?.discordID,
                        discordAvatar: `https://cdn.discordapp.com/avatars/${user?.discordID}/${user?.discordAvatar}.webp?size=512`,
                        discordDiscriminator: user?.discordDiscriminator
                    })
                })

                setUsers(myUsers)
            }
        )
    },[])



    // ref to the registration date
    const registrationDateRef = React.useRef<HTMLDivElement>(null);
    const usersRef = React.useRef<HTMLDivElement>(null);
    const linksRef = React.useRef<HTMLDivElement>(null);

    const formSchema = z.object({
        name: z.string().min(2, {
            message: "Name must be at least 2 characters.",
        }),
        type: z.enum(["soutěž", "olympiáda", "seminář", "soustředění", "přednáška"]),
        registration: z.boolean().default(false).optional(),
        moredays: z.boolean().default(false).optional(),
        registrationDate: registrationSwitch? z.date() : z.date().optional(),
        competitionDate: !moreDaysSwitch ? z.date() : z.date().optional(),
        // object of two dates
        competitionDateRange: moreDaysSwitch ? z.object({ from: z.date(), to: z.date() }) : z.object({ from: z.date(), to: z.date() }).optional(),
        user: z.string().optional(),
        createChannel: z.boolean().default(false).optional(),
        place: z.string().optional(),
        description: z.string().optional(),
    })

    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            registration: false,
            moredays: false,
            createChannel: false,

        }

    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)

        functions.createCompetition(values, competitionUsers, competitionLinks, createChannelSwitch, true)


    }
    return (
        <>
            <div className="hidden flex-col md:flex">

                <div className="flex-1 space-y-4 p-8 pt-6">
                    <div>
                        <h1 className={"text-[2vw] font-bold"}>
                            Vytvořit událost
                        </h1>
                        <p className={"font-medium text-[.9vw] text-[#333]"}>
                            Vytvořte novou událost a přidejte jí do Soutěží Tryhard.
                        </p>
                    </div>


                    <Separator className={"mt-4 mb-16"} />



                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">


                            <Tabs defaultValue="division" className="space-y-4">
                                <TabsContent value="division" className="space-y-4">


                                    <CompetitionType form={form} setPreview__Type={setPreview__Type} />

                                    <TabsList>
                                        <TabsTrigger value="finaltouch" disabled={!form.getValues().type} >
                                            Pokračovat
                                        </TabsTrigger>
                                    </TabsList>


                                </TabsContent>
                                <TabsContent value="finaltouch" className="space-y-4">
                                    {

                                        preview__Type === "soutěž" ? <>
                                                <div className={"flex flex-row "}>
                                                    <ScrollArea className={"h-[57vh] pr-8"}>
                                                        <div className={"mb-4 px-2"}>
                                                            <CompetitionName  form={form} setPreview__Name={setPreview__Name}/>
                                                        </div>

                                                        <div className={"flex flex-row mb-8 pl-2"}>

                                                            <CompetitionRegistrationSwitch form={form} setPreview__Registration={setPreview__Registration} registrationSwitch={registrationSwitch} setRegistrationSwitch={setRegistrationSwitch} registrationDateRef={registrationDateRef} />

                                                            <CompetitionMoredaysSwitch form={form} setPreview__MoreDays={setPreview__MoreDays} moreDaysSwitch={moreDaysSwitch} setMoreDaysSwitch={setMoreDaysSwitch} />

                                                        </div>
                                                        <div className={"flex flex-col px-2"}>

                                                            <CompetitionRegistrationDate  form={form} registrationDateRef={registrationDateRef} setPreview__RegistrationDate={setPreview__RegistrationDate} />

                                                            <CompetitionDate form={form} moreDaysSwitch={moreDaysSwitch} setPreview__CompetitionDate={setPreview__CompetitionDate} setPreview__CompetitionDateRange={setPreview__CompetitionDateRange} />

                                                        </div>
                                                        <div className={"px-2 mt-8"}>


                                                            <CompetitionUsers form={form} users={users} competitionUsers={competitionUsers} setCompetitionUsers={setCompetitionUsers} usersRef={usersRef} />
                                                            <div className={"mt-4 flex flex-row flex-wrap opacity-0 transition-all duration-500"} ref={usersRef}>
                                                                {
                                                                    competitionUsers.map((user:User) => (
                                                                        // eslint-disable-next-line react/jsx-key
                                                                        <div className={"flex flex-row items-center mr-4 mb-2"}>

                                                                            <Card>
                                                                                <CardHeader className={"flex flex-row items-start"}>
                                                                                    <CardTitle className={"flex flex-row text-[1.2vw]"}>
                                                                                        <Avatar className={"w-[2vw] h-[2vw] mr-2"} >
                                                                                            <AvatarImage src={user.discordAvatar} />
                                                                                            <AvatarFallback>CN</AvatarFallback>
                                                                                        </Avatar>
                                                                                        @{user.discordUsername}
                                                                                        {
                                                                                            user.discordDiscriminator !== "0" ? "#" + user.discordDiscriminator : ""
                                                                                        }
                                                                                    </CardTitle>
                                                                                    <CardDescription className={"flex flex-row items-center justify-center"}>
                                                                                        <Trash className={"w-[1.1vw] h-[1.1vw] opacity-80 ml-4"} onClick={() => {
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

                                                            <CompetitionCreateChannelSwitch form={form} createChannelSwitch={createChannelSwitch} setCreateChannelSwitch={setCreateChannelSwitch} setPreview__CreateChannel={setPreview__CreateChannel}  />

                                                            <div className={"mb-4 mt-2 px-2 w-full"}>
                                                                <CompetitionPlace  form={form} setPreview__Place={setPreview__Place}/>

                                                                <div className={"flex flex-row my-2 items-end w-full"}>
                                                                    <CompetitionDescription form={form} setPreview__Description={setPreview__Description}/>
                                                                    <CompetitionLinks linksRef={linksRef}  competitionLinks={competitionLinks} setCompetitionLinks={setCompetitionLinks}/>
                                                                </div>

                                                                <div ref={linksRef} className={"mt-4 flex flex-row flex-wrap opacity-0 transition-all duration-500"}>
                                                                    {
                                                                        competitionLinks.map((link:any) => (
                                                                                // eslint-disable-next-line react/jsx-key
                                                                                <div className={"flex flex-row items-center mr-4 mb-2"}>
                                                                                    <Card>
                                                                                        <CardHeader className={"flex flex-row items-start"}>
                                                                                            <CardTitle className={"flex flex-row text-[1.2vw]"}>
                                                                                                <Link target={"_blank"} href={link.link} className={"w-[fit] h-[2vw] mr-2 flex flex-row items-center"} >
                                                                                                    <LinkIcon className={"w-[.8vw] h-[.8vw] mr-2"} />
                                                                                                    {link.label}
                                                                                                </Link>
                                                                                            </CardTitle>
                                                                                            <CardDescription className={"flex flex-row items-center justify-center"}>
                                                                                                <Trash className={"w-[1.1vw] h-[1.1vw] opacity-80 ml-4"} onClick={() => {
                                                                                                    setCompetitionLinks(competitionLinks.filter((link2:any) => link2.link != link.link))
                                                                                                    if (competitionLinks.length - 1 === 0) {
                                                                                                        linksRef.current!.style.opacity = "0"
                                                                                                    }
                                                                                                }} />                                                                                    </CardDescription>
                                                                                        </CardHeader>

                                                                                    </Card>
                                                                                    <div className={"ml-2 font-bold flex flex-row items-center"}>
                                                                                    </div>
                                                                                </div>
                                                                            )
                                                                        )
                                                                    }
                                                                </div>
                                                            </div>


                                                        </div>
                                                    </ScrollArea>

                                                    <div className={"px-8 max-w-[20vw] w-[20vw] overflow-hidden"}>
                                                        <div className={`font-bold`} style={
                                                            {
                                                                fontSize: preview__Name.length > 0 ? preview__Name.length > 30 ? "1vw" : preview__Name.length > 20 ? "1.2vw" : preview__Name.length > 10 ? "1.5vw" : "2vw" : "1.5vw"
                                                            }
                                                        }>
                                                            {preview__Name.length > 0 ? preview__Name : "Vyberte jméno"}
                                                        </div>
                                                        <div className={"text-[1vw] text-[#555] font-semibold mb-8"}>
                                                            {
                                                                // capital first letter
                                                                preview__Type.charAt(0).toUpperCase() + preview__Type.slice(1)
                                                            }
                                                        </div>

                                                        {preview__Registration &&
                                                            <div className={"flex flex-col mb-2"}>
                                                                <div className={"flex flex-row items-center mb-2"}>
                                                                    <CalendarPlus className={"w-[1.1vw] h-[1.1vw] mr-2"}/>
                                                                    <div className={"text-[.9vw] font-bold"}>
                                                                        Datum registrace

                                                                    </div>
                                                                </div>

                                                                <div className={"text-[1vw]"}>
                                                                    {
                                                                        preview__RegistrationDate ? format(preview__RegistrationDate, "PPP") : "Není vybráno"
                                                                    }
                                                                </div>


                                                            </div>
                                                        }

                                                        <div className={"flex flex-col"}>
                                                            <div className={"flex flex-row items-center mb-2"}>
                                                                <CalendarClock className={"w-[1.1vw] h-[1.1vw] mr-2"}/>
                                                                <div className={"text-[.9vw] font-bold"}>
                                                                    Datum konání

                                                                </div>
                                                            </div>

                                                            <div className={"text-[1vw]"}>
                                                                {!preview__MoreDays ? preview__CompetitionDate ? format(preview__CompetitionDate, "PPP") : "Není vybráno" : preview__CompetitionDateRange ? preview__CompetitionDateRange.from ? preview__CompetitionDateRange.to ? format(preview__CompetitionDateRange.from, "LLL dd, y") + " - " + format(preview__CompetitionDateRange.to, "LLL dd, y") : format(preview__CompetitionDateRange.from, "LLL dd, y") : "Není vybráno" : "Není vybráno"}
                                                            </div>


                                                        </div>

                                                    </div>
                                                </div>
                                            </>:
                                            preview__Type === "olympiáda" ?
                                            <>
                                                <UnderConstruction />
                                            </>:
                                            preview__Type === "seminář" ?
                                            <>
                                                <UnderConstruction />
                                            </>:
                                            preview__Type === "soustředění" ?
                                            <>
                                                <UnderConstruction />
                                            </>:
                                            preview__Type === "přednáška" ?
                                            <>
                                                <UnderConstruction />
                                            </>:
                                            <> Invalid type </>

                                    }

                                    <div>
                                        <TabsList className={"mx-1"}>
                                            <TabsTrigger value="division">
                                                Jít zpět
                                            </TabsTrigger>
                                        </TabsList>
                                        <Button type="submit" className={"mx-1"}>Submit</Button>
                                    </div>
                                </TabsContent>
                            </Tabs>
                        </form>
                    </Form>
                </div>
            </div>
        </>
    )
}