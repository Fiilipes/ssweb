"use client"

import React from 'react'
import {useRouter} from "next/navigation";
import {useSession} from "next-auth/react";
import {Competition, User} from "@/assets/settings/interfaces";
import functions from "@/assets/settings/functions";
import {getSS} from "@/assets/settings/firebase";
import questions from "@/assets/settings/content/soutezetryhard/psf";
import menuOptions from "@/assets/settings/content/notes/menu";
import NotesEditor from "@/components/notes/editor/NotesEditor";

const Page = ({ params }: { params: { competition: string, serie: string, task: string } }) => {
    const router = useRouter()
    const {data:session} = useSession()
    const [users, setUsers] = React.useState<User[]>([])
    const [question, setQuestion] = React.useState<any>(null)
    const editor   = functions.createEditor({
        originContent: "ahjoj",
        placeholder: {},
        document: {},
        menubar: [menuOptions().bold, menuOptions().italic, menuOptions().strike, menuOptions().bulletList],
        editable:false
    })
    React.useEffect(
        () => {
            console.log(functions.removeDiacritics(decodeURIComponent(params.competition).toLowerCase()))
            console.log(functions.removeDiacritics(decodeURIComponent(params.serie).toLowerCase()))
            console.log(functions.removeDiacritics(decodeURIComponent(params.task).toLowerCase()))
            const competitionName = functions.removeDiacritics(decodeURIComponent(params.competition).toLowerCase())
            const serieNumber = Number(functions.removeDiacritics(decodeURIComponent(params.serie).toLowerCase()))
            const taskNumber = Number(functions.removeDiacritics(decodeURIComponent(params.task).toLowerCase()))

            //@ts-ignore
            const task = questions[competitionName]?.series?.find((serie: any) => serie.id === serieNumber)?.questions.find((task: any) => task.id === taskNumber)

            editor?.editor?.commands.setContent(`
                                                <h1>
                                                    ${task?.name.charAt(0).toUpperCase() + task?.name.slice(1)}
                                                </h1>
                                                <p class="special">
                                                       ${
                task?.task.replace(/\$\$/g, "$")
            }</p>`)
            if (session) {
                getSS(["users", "soutěže"]).then((res: any) => {




                })
            }
        }, [session]
    )

    return (
        <div>
            <div>
                {editor && <NotesEditor editor={editor?.editor} menubar={editor?.menubar} props={editor?.props} />}
            </div>
        </div>
    )
}
export default Page
