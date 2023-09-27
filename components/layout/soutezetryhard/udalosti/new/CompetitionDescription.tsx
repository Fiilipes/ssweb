import React from 'react'
import {FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import NotesEditor from "@/components/notes/editor/NotesEditor";
import functions from "@/assets/settings/functions";
import menuOptions from "@/assets/settings/content/notes/menu";

const CompetitionDescription = ({form, setPreview__Description}: {form: any, setPreview__Description: any}) => {
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
    return (
        <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
                <FormItem>
                    <FormLabel className={"text-[20px]"}>
                        Popis
                    </FormLabel>
                    <FormControl>
                        <NotesEditor editor={editor.editor} menubar={editor.menubar} props={editor.props} />
                    </FormControl>
                    <FormDescription>
                        Tato informace se zobrazí na stránce události
                    </FormDescription>

                </FormItem>
            )}
        />    )
}
export default CompetitionDescription
