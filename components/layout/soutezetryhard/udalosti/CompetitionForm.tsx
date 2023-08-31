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
import {Card, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {CalendarClock, CalendarPlus, LinkIcon, Trash} from "lucide-react";
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

const CompetitionForm = ({defaultValues,chooseType, users}:{defaultValues:any,chooseType: boolean, users:any}) => {


    const [competitionUsers, setCompetitionUsers] = React.useState(defaultValues?.users ? defaultValues?.users : []);
    const [competitionLinks, setCompetitionLinks] = React.useState(defaultValues?.links ? defaultValues?.links : []);

    const [preview__CreateChannel, setPreview__CreateChannel] = React.useState(false);
    const [registrationSwitch, setRegistrationSwitch] = React.useState(defaultValues?.registration ? defaultValues?.registration : false);
    const [moreDaysSwitch, setMoreDaysSwitch] = React.useState(defaultValues?.moredays ? defaultValues?.moredays : false);
    const [createChannelSwitch, setCreateChannelSwitch] = React.useState(defaultValues?.createChannel ? defaultValues?.createChannel : false);
    const [preview__Name, setPreview__Name] = React.useState(defaultValues?.name ? defaultValues?.name : "");
    const [preview__Theme, setPreview__Theme] = React.useState(defaultValues?.theme ? defaultValues?.theme : "");
    const [preview__Place, setPreview__Place] = React.useState("");
    const [preview__Description, setPreview__Description] = React.useState("");
    const [preview__Type, setPreview__Type] = React.useState(defaultValues?.type ? defaultValues?.type : "");
    const [preview__Registration, setPreview__Registration] = React.useState(defaultValues?.registration ? defaultValues?.registration : false);
    const [preview__MoreDays, setPreview__MoreDays] = React.useState(defaultValues?.moredays ? defaultValues?.moredays : false);
    const [preview__RegistrationDate, setPreview__RegistrationDate] = React.useState(defaultValues?.registrationDate ? defaultValues?.registrationDate : undefined);
    const [preview__CompetitionDate, setPreview__CompetitionDate] = React.useState(defaultValues?.moredays ? undefined : defaultValues?.competitionDate ? defaultValues?.competitionDate : undefined);
    const [preview__CompetitionDateRange, setPreview__CompetitionDateRange] = React.useState(defaultValues?.moredays ? defaultValues?.competitionDate ? defaultValues?.competitionDate : {from: undefined, to: undefined} :  {from: undefined, to: undefined});

    // ref to the registration date
    const registrationDateRef = React.useRef<HTMLDivElement>(null);
    const usersRef = React.useRef<HTMLDivElement>(null);
    const linksRef = React.useRef<HTMLDivElement>(null);

    const formSchema = z.object({
        name: preview__Type === "soutěž" ? z.string().min(2, {
            message: "Name must be at least 2 characters.",
        }).default(defaultValues?.name ? defaultValues?.name : undefined) : z.string().min(2, {
            message: "Name must be at least 2 characters.",
        }).default(defaultValues?.name ? defaultValues?.name : undefined).optional(),
        theme: preview__Type === "přednáška" ? z.string().min(2, {
            message: "Theme must be at least 2 characters.",
        }).default(defaultValues?.theme ? defaultValues?.theme : undefined) : z.string().min(2, {
            message: "Theme must be at least 2 characters.",
        }).default(defaultValues?.theme ? defaultValues?.theme : undefined).optional(),
        type: z.enum(["soutěž", "olympiáda", "seminář", "soustředění", "přednáška"]).default(defaultValues?.type ? defaultValues?.type : undefined),
        registration: z.boolean().default(defaultValues?.registration ? defaultValues?.registration : false).optional(),
        moredays: z.boolean().default(defaultValues?.moredays ? defaultValues?.moredays : false).optional(),
        registrationDate: registrationSwitch? z.date() : z.date().optional(),
        competitionDate: !moreDaysSwitch ? z.date() : z.date().optional(),
        // object of two dates
        competitionDateRange: moreDaysSwitch ? z.object({ from: z.date(), to: z.date() }) : z.object({ from: z.date(), to: z.date() }).optional(),
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
            theme: defaultValues?.theme ? defaultValues?.theme : undefined,
            registration: defaultValues?.registration ? defaultValues?.registration : false,
            moredays: defaultValues?.moredays ? defaultValues?.moredays : false,
            createChannel: defaultValues?.createChannel ? defaultValues?.createChannel : false,
            registrationDate: defaultValues?.registrationDate ? defaultValues?.registrationDate : undefined,
            competitionDate: defaultValues?.moredays ? undefined : defaultValues?.competitionDate ? defaultValues?.competitionDate : undefined,
            competitionDateRange: defaultValues?.moredays ? defaultValues?.competitionDate ? defaultValues?.competitionDate : {from: undefined, to: undefined} :  {from: undefined, to: undefined},
            place: defaultValues?.place ? defaultValues?.place : undefined,
            description: defaultValues?.description ? defaultValues?.description : undefined,

        }
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)

        if (defaultValues) {
            console.log("old")
            functions.editCompetition(values, competitionUsers, competitionLinks, createChannelSwitch, true)
        } else {
            console.log("new")
            functions.createCompetition(values, competitionUsers, competitionLinks, createChannelSwitch, true)
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">


                <Tabs defaultValue={chooseType ? "division" : "finaltouch"} className="space-y-4">
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
                                    <div className={"flex flex-col "}>
                                            <div className={"my-[1.5vw] font-bold text-[1.8vw]"}>
                                                Potřebné informace
                                            </div>
                                            <div className={"mb-4 px-2 gap-y-[1vw] flex flex-col"}>
                                                <CompetitionName form={form} setPreview__Name={setPreview__Name}/>
                                                <CompetitionPlace  form={form} setPreview__Place={setPreview__Place}/>

                                            </div>

                                            <div className={"flex flex-row mb-8 pl-2"}>

                                                <CompetitionRegistrationSwitch  form={form} setPreview__Registration={setPreview__Registration} registrationSwitch={registrationSwitch} setRegistrationSwitch={setRegistrationSwitch} registrationDateRef={registrationDateRef} />

                                                <CompetitionMoredaysSwitch  form={form} setPreview__MoreDays={setPreview__MoreDays} moreDaysSwitch={moreDaysSwitch} setMoreDaysSwitch={setMoreDaysSwitch} />

                                            </div>
                                            <div className={"flex flex-col px-2"}>

                                                <CompetitionRegistrationDate  form={form} registrationDateRef={registrationDateRef} setPreview__RegistrationDate={setPreview__RegistrationDate} />

                                                <CompetitionDate form={form} moreDaysSwitch={moreDaysSwitch} setPreview__CompetitionDate={setPreview__CompetitionDate} setPreview__CompetitionDateRange={setPreview__CompetitionDateRange} />

                                            </div>
                                            <div className={"my-[1.5vw] font-bold text-[1.8vw]"}>
                                                Dodatečné informace
                                            </div>

                                            <div className={"px-2 mt-8"}>


                                                <CompetitionUsers form={form} users={users} competitionUsers={competitionUsers} setCompetitionUsers={setCompetitionUsers} usersRef={usersRef} />
                                                <div className={`mt-4 flex flex-row flex-wrap ${defaultValues?.users ? "opacity-1" : "opacity-0"} transition-all duration-500`} ref={usersRef}>
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

                                                    <div className={"flex flex-row my-2 items-end w-full"}>
                                                        <CompetitionDescription form={form} setPreview__Description={setPreview__Description}/>
                                                        <CompetitionLinks linksRef={linksRef}  competitionLinks={competitionLinks} setCompetitionLinks={setCompetitionLinks}/>
                                                    </div>

                                                    <div ref={linksRef} className={`mt-4 flex flex-row flex-wrap ${defaultValues?.links ? "opacity-100" : "opacity-0"} transition-all duration-500`}>
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

                                        {/*<div className={"px-8 max-w-[20vw] w-[20vw] overflow-hidden"}>*/}
                                        {/*    <div className={`font-bold`} style={*/}
                                        {/*        {*/}
                                        {/*            fontSize: preview__Name.length > 0 ? preview__Name.length > 30 ? "1vw" : preview__Name.length > 20 ? "1.2vw" : preview__Name.length > 10 ? "1.5vw" : "2vw" : "1.5vw"*/}
                                        {/*        }*/}
                                        {/*    }>*/}
                                        {/*        {preview__Name.length > 0 ? preview__Name : "Vyberte jméno"}*/}
                                        {/*    </div>*/}
                                        {/*    <div className={"text-[1vw] text-[#555] font-semibold mb-8"}>*/}
                                        {/*        {*/}
                                        {/*            // capital first letter*/}
                                        {/*            preview__Type.charAt(0).toUpperCase() + preview__Type.slice(1)*/}
                                        {/*        }*/}
                                        {/*    </div>*/}

                                        {/*    {preview__Registration &&*/}
                                        {/*        <div className={"flex flex-col mb-2"}>*/}
                                        {/*            <div className={"flex flex-row items-center mb-2"}>*/}
                                        {/*                <CalendarPlus className={"w-[1.1vw] h-[1.1vw] mr-2"}/>*/}
                                        {/*                <div className={"text-[.9vw] font-bold"}>*/}
                                        {/*                    Datum registrace*/}

                                        {/*                </div>*/}
                                        {/*            </div>*/}

                                        {/*            <div className={"text-[1vw]"}>*/}
                                        {/*                {*/}
                                        {/*                    preview__RegistrationDate ? format(preview__RegistrationDate, "PPP") : "Není vybráno"*/}
                                        {/*                }*/}
                                        {/*            </div>*/}


                                        {/*        </div>*/}
                                        {/*    }*/}

                                        {/*    <div className={"flex flex-col"}>*/}
                                        {/*        <div className={"flex flex-row items-center mb-2"}>*/}
                                        {/*            <CalendarClock className={"w-[1.1vw] h-[1.1vw] mr-2"}/>*/}
                                        {/*            <div className={"text-[.9vw] font-bold"}>*/}
                                        {/*                Datum konání*/}

                                        {/*            </div>*/}
                                        {/*        </div>*/}

                                        {/*        <div className={"text-[1vw]"}>*/}
                                        {/*            {!preview__MoreDays ? preview__CompetitionDate ? format(preview__CompetitionDate, "PPP") : "Není vybráno" : preview__CompetitionDateRange ? preview__CompetitionDateRange.from ? preview__CompetitionDateRange.to ? format(preview__CompetitionDateRange.from, "LLL dd, y") + " - " + format(preview__CompetitionDateRange.to, "LLL dd, y") : format(preview__CompetitionDateRange.from, "LLL dd, y") : "Není vybráno" : "Není vybráno"}*/}
                                        {/*        </div>*/}


                                        {/*    </div>*/}

                                        {/*</div>*/}
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
                                                <div className={"flex flex-col "}>
                                                    <div className={"my-[1.5vw] font-bold text-[1.8vw]"}>
                                                        Potřebné informace
                                                    </div>
                                                    <div className={"mb-4 px-2 gap-y-[1vw] flex flex-col"}>
                                                        <CompetitionTheme form={form} setPreview__Theme={setPreview__Theme}/>
                                                        <CompetitionPlace  form={form} setPreview__Place={setPreview__Place}/>

                                                    </div>

                                                    <div className={"px-2 mt-8"}>

                                                    </div>
                                                    <div className={"my-[1.5vw] font-bold text-[1.8vw]"}>
                                                        Dodatečné informace
                                                    </div>

                                                    <div className={"px-2 mt-8"}>

                                                    </div>
                                                </div>
                                                </>:
                                                <> Invalid type </>

                        }

                        <div>

                            <Button type="submit" className={"mx-1"}>{
                                chooseType ? "Vytvořit" : "Upravit"
                            }</Button>
                            {
                                chooseType ? <TabsList className={"mx-1"}>
                                    <TabsTrigger value="division">
                                        Jít zpět
                                    </TabsTrigger>
                                </TabsList> : <Link href={`/soutezetryhard/udalosti/${
                                    defaultValues ? defaultValues?.name : ""}`}>
                                    <Button variant={"outline"} className={"mx-1"}>Zobrazit událost</Button>
                                </Link>
                            }
                        </div>
                    </TabsContent>
                </Tabs>
            </form>
        </Form>    )
}
export default CompetitionForm
