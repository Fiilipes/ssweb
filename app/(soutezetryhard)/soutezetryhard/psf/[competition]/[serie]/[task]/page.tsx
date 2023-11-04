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
import discordServers from "@/assets/settings/content/discordServers";
import PageContentWrap from '@/components/layout/wrap/PageContentWrap';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Input } from "@/components/ui/input"
import Loading from "@/components/reusable/composition/Loading";

const formSchema = z.object({
    answer: z.string().min(1, {
        message: "Odpověď nemůže být prázdná.",
    }).transform((val) => val.trim()).refine((val) => val !== "", {
        message: "Odpověď nemůže být prázdná.",
    })
})
const Page = ({ params }: { params: { competition: string, serie: string, task: string } }) => {
    const router = useRouter()
    const {data:session} = useSession()
    const [users, setUsers] = React.useState<User[]>([])
    const [question, setQuestion] = React.useState<any>(null)
    const [verified, setVerified] = React.useState(null)

    const editor   = functions.createEditor({
        originContent: "<div class='spinner'></div>",
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


            if (session) {
                getSS(["users", "soutěže"]).then((res: any) => {
                    // @ts-ignore
                    functions.verifyUserById(res["users"],session.id,"Soutěže Tryhard").then(verified => {
                        setVerified(verified)
                    })

                    const competitionName = functions.removeDiacritics(decodeURIComponent(params.competition).toLowerCase())
                    const serieNumber = Number(functions.removeDiacritics(decodeURIComponent(params.serie).toLowerCase()))
                    const taskNumber = Number(functions.removeDiacritics(decodeURIComponent(params.task).toLowerCase()))

                    //@ts-ignore
                    const task = questions[competitionName]?.series?.find((serie: any) => serie.id === serieNumber)?.questions.find((task: any) => task.id === taskNumber)

                    setQuestion(task ? task : false)

                    editor?.editor?.commands.setContent(`
                                                <h1>
                                                    ${task?.name.charAt(0).toUpperCase() + task?.name.slice(1)}
                                                </h1>
                                                <p class="special">
                                                       ${
                        task?.task.replace(/\$\$/g, "$")
                    }</p>`)


                })
            }
        }, [session]
    )
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            answer: "",
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
        console.log(Number(values.answer) === Number(question.answer))
    }
    return (
        <div>
            <PageContentWrap status={verified} server={discordServers.find(server => server.name === "Soutěže Tryhard")}>
                {question !== false ? editor && question !== null ? <>
                    <NotesEditor editor={editor?.editor} menubar={editor?.menubar} props={editor?.props} />
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <FormField
                                control={form.control}
                                name="answer"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Odpověď</FormLabel>
                                        <FormControl>
                                            <Input placeholder={
                                                `Odpověď ${question.unit !== "" && question.unit ? `v jednotkách ${question.unit}` : "bez jednotky"}`
                                            } {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            Zde zadejte výslednou hodnotu příkladu vhodně zaokrouhlenou na dvě desetinná místa.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <AlertDialog>
                                <AlertDialogTrigger asChild>
                                    <Button>Potvrdit</Button></AlertDialogTrigger>
                                <AlertDialogContent>
                                    <AlertDialogHeader>
                                        <AlertDialogTitle>Jste s jisti že chcete potvrdit svou odpověď?</AlertDialogTitle>
                                        <AlertDialogDescription>
                                            Tato akce nemůže být vrácena a při špatné odpovědi Vám bude přičten jeden nesprávný pokus.
                                        </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                        <AlertDialogCancel>Zrušit</AlertDialogCancel>
                                        <AlertDialogAction onClick={(

                                        ) => {
                                            console.log("submit the form")
                                            // submit the form by clicking the submit button
                                            document.querySelector("form")?.dispatchEvent(
                                                new Event("submit", { cancelable: true, bubbles: true })
                                            )
                                        }} >
                                            Pokračovat
                                        </AlertDialogAction>

                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>

                        </form>
                    </Form>
                </> : <Loading>
                    <div className={"spinner"}>

                    </div>
                </Loading> : <div>
                    nenalzeno
                </div> }



            </PageContentWrap>
        </div>
    )
}
export default Page
