"use client"

import React from 'react';
import {useSession} from "next-auth/react";
import {getSS} from "@/assets/settings/firebase";
import functions from "@/assets/settings/functions";
import PageTitle from "@/components/reusable/composition/PageTitle";
import PageContentWrap from "@/components/layout/wrap/PageContentWrap";
import discordServers from "@/assets/settings/content/discordServers";
import UnderConstruction from "@/components/reusable/composition/UnderConstruction";

import questions from "@/assets/settings/content/soutezetryhard/psf";
import menuOptions from "@/assets/settings/content/notes/menu";
import NotesEditor from "@/components/notes/editor/NotesEditor";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {CalendarClock, Clock, Users2} from "lucide-react";

const Page = () => {
    const {data:session} = useSession()

    const [verified, setVerified] = React.useState(null)


    React.useEffect(
        () => {
            if (session) {
                getSS(["users"]).then((res: any) => {

                    // @ts-ignore
                    functions.verifyUserById(res["users"],session.id,"Soutěže Tryhard").then(verified => {
                        setVerified(verified)
                    })
                })
            }
        }, [session]
    )







    return (
        <div>
            <div className="flex-1 space-y-4 p-8 pt-6">

                <PageTitle status={verified} title={"PSF"} description={"Procvičování soutěžní fyziky"} buttons={[]} />

                <PageContentWrap status={verified} server={discordServers.find(server => server.name === "Soutěže Tryhard")}>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-[1vw]">
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">
                                    Počet procvičování
                                </CardTitle>
                                <CalendarClock className={"opacity-60 w-4 h-4"}  />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">
                                    188
                                </div>
                                <p className="text-xs text-muted-foreground">
                                    Z toho 52 jste vyřešili
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Nejbližší událost</CardTitle>
                                <Clock className={"opacity-60 w-4 h-4"} />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">Za 2 týdny</div>
                                <p className="text-xs text-muted-foreground">
                                    Matematická olympiáda
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">
                                    Počet různých účastníků
                                </CardTitle>
                                <Users2 className={"opacity-60 w-4 h-4"} />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">9</div>
                                <p className="text-xs text-muted-foreground">
                                    7 ve více než jedné soutěži
                                </p>
                            </CardContent>
                        </Card>
                    </div>

                    {
                        questions["Fyziklání Online"].series.map((serie, index) => {
                            return (
                                // eslint-disable-next-line react/jsx-key
                                <div>
                                    {
                                        serie.questions.map((question, index) => {
                                            let editor   = functions.createEditor({
                                                originContent: `<h1>${question?.name.charAt(0).toUpperCase() + question?.name.slice(1)}</h1><p>${question?.task}</p><p class="special">${
                                                    // replace all $$ with $
                                                    question?.process.replace(/\$\$/g, "$")}</p>`,
                                                placeholder: {},
                                                document: {},
                                                menubar: [menuOptions().bold, menuOptions().italic, menuOptions().strike, menuOptions().bulletList],
                                                editable:false
                                            })
                                            return (
                                                // eslint-disable-next-line react/jsx-key
                                                <div>
                                                    <NotesEditor editor={editor?.editor} menubar={editor?.menubar} props={editor?.props} />
                                                </div>

                                            )
                                        })

                                    }
                                </div>
                            )
                        })
                    }



                </PageContentWrap>
            </div>
        </div>
    )
}

export default Page