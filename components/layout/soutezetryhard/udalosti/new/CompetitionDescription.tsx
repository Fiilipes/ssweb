import React from 'react'
import {FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";

const CompetitionDescription = ({form, setPreview__Description}: {form: any, setPreview__Description: any}) => {
    return (
        <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
                <FormItem>
                    <FormLabel>Popis</FormLabel>
                    <FormControl >
                        <Textarea
                            placeholder="Sdělte více důležitých informací o soutěži..."
                            className="resize-none w-[40vw] mr-4 h-[6vw]"
                            {...field}
                        />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />    )
}
export default CompetitionDescription
