import React from 'react'
import {FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";

const CompetitionTheme = ({form, setPreview__Theme}: {form: any, setPreview__Theme: any}) => {
    return (
        <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
                <FormItem>
                    <FormLabel>Název</FormLabel>
                    <FormControl>
                        <Input placeholder="Téma přednášky..." {...field} onInput={
                            (e) => {
                                setPreview__Theme(e.currentTarget.value)
                            }
                        } />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}
export default CompetitionTheme
