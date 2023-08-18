import React from 'react'
import {FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";

const CompetitionName = ({form, setPreview__Name}: {form: any, setPreview__Name: any}) => {
    return (
        <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
                <FormItem>
                    <FormLabel>Název</FormLabel>
                    <FormControl>
                        <Input placeholder="Název soutěže..." {...field} onInput={
                            (e) => {
                                setPreview__Name(e.currentTarget.value)
                            }
                        } />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />    )
}
export default CompetitionName
