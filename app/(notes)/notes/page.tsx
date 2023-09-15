"use client"

import React from 'react'
import {useSession} from "next-auth/react";
import {getSS} from "@/assets/settings/firebase";
import PageTitle from "@/components/reusable/composition/PageTitle";
import pages from "@/assets/settings/content/pages";
import PageContentWrap from "@/components/layout/wrap/PageContentWrap";
import discordServers from "@/assets/settings/content/discordServers";
import ShopItems from "@/components/layout/shop/ShopItems";
import UnderConstruction from "@/components/reusable/composition/UnderConstruction";
import functions from "@/assets/settings/functions";
import NotesEditor from "@/components/notes/editor/NotesEditor";
import menuOptions from "@/assets/settings/content/notes/menu";

const Page = () => {

    const {data:session} = useSession()

    const [verified, setVerified] = React.useState(null)

    React.useEffect(
        () => {
            if (session) {
                getSS(["users"]).then((res: any) => {

                    // @ts-ignore
                    functions.verifyUserById(res["users"],session.id,"Survival Server").then(verified => setVerified(verified))

                })
            }
        }, [session]
    )

    const editor = functions.createEditor({
        originContent: "",
        placeholder:   {
            placeholder: ({ node }:{node:any}) => {
                if (node.type.name === 'heading') {
                    return 'What’s the title?'
                }
            },
        },
        document: {
            content: 'heading block*',
        },
        menubar: [menuOptions().bold, menuOptions().italic, menuOptions().strike, menuOptions().bulletList],
        editable: true,
    })

    return (
        <>
            <div className=" flex-col flex">

                <div className="flex-1 space-y-4 p-8 pt-6">
                    <PageTitle status={verified} title={"Notes"} description={"Zápisy, testy a procvičování od Survival Serveru & Dokumentů"} buttons={[]} />
                    <PageContentWrap status={verified} server={discordServers.find(server => server.name === "Survival Server")}>
                        <NotesEditor editor={editor.editor} menubar={editor.menubar} props={editor.props}  />
                    </PageContentWrap>

                </div>
            </div>
        </>
    )
}
export default Page
