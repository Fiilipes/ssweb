import React from 'react'
import {FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";

const CompetitionPlace = ({form, setPreview__Place}: {form: any, setPreview__Place: any}) => {
    return (
        <FormField
            control={form.control}
            name="place"
            render={({ field }) => (
                <FormItem>
                    <FormLabel className={"text-[18px]"}>Místo</FormLabel>
                    <FormControl>
                        <Input placeholder="Místo konání soutěže..."  {...field} onInput={
                            (e) => {
                                setPreview__Place(e.currentTarget.value)
                            }
                        } />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />    )
}
export default CompetitionPlace
