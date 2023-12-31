"use client"

import React from 'react'
import {useSession} from "next-auth/react";
import db, {getSS} from "@/assets/settings/firebase";
import PageTitle from "@/components/reusable/composition/PageTitle";
import discordServers from "@/assets/settings/content/discordServers";
import PageContentWrap from '@/components/layout/wrap/PageContentWrap';
import NotesEditor from "@/components/notes/editor/NotesEditor";
import functions from "@/assets/settings/functions";
import {useEditor} from "@tiptap/react";
import {Button} from "@/components/ui/button";
import {doc, setDoc} from "@firebase/firestore";
import {useRouter} from "next/navigation";
import menuOptions from "@/assets/settings/content/notes/menu";


const Page = () => {
    const {data:session} = useSession()

    const [verified, setVerified] = React.useState(null)
    const [informations, setInformations] = React.useState<any[]>([])
    const router = useRouter()

    React.useEffect(
        () => {
            if (session) {
                getSS(["users", "informations"]).then((res: any) => {

                    // @ts-ignore
                    functions.verifyUserById(res["users"],session.id,"Soutěže Tryhard").then(verified => {
                        setVerified(verified)
                        if (verified) {
                            setInformations(res["informations"].list)
                        }
                    })

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
        <div>
            <div className="flex-1 space-y-4 p-8 pt-6">

                <PageTitle status={verified} title={"Nová zpráva"} description={"Vytvořte novou zprávu na server Soutěže Tryhard"} buttons={[]} />

                <PageContentWrap status={verified} server={discordServers.find(server => server.name === "Soutěže Tryhard")}>
                    <NotesEditor editor={editor.editor} menubar={editor.menubar}  props={editor.props} />
                    <Button onClick={() => {
                        // @ts-ignore
                        setDoc(doc(db, "ssbot", "informations"), {list: [...informations, {author: {discordAvatar: session?.user?.image, discordUsername: session?.user?.name, discordDiscriminator: session?.discriminator, discordID: session?.id}, messageId: null, time: new Date().getTime(), type: "announcment", value: {content: functions.convertHtmlToMarkdown(editor?.editor?.getHTML() ? editor?.editor?.getHTML() : "")}}]})
                        router.push("/soutezetryhard/info")



                    }} className={"mt-[2vw]"}>
                        Odeslat
                    </Button>
                </PageContentWrap>

            </div>
        </div>
    )
}
export default Page
