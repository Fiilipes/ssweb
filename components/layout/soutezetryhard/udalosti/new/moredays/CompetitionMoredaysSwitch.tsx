import React from 'react'
import {FormControl, FormDescription, FormField, FormItem, FormLabel} from "@/components/ui/form";
import {Switch} from "@/components/ui/switch";

const CompetitionMoredaysSwitch = ({form, setPreview__MoreDays, moreDaysSwitch, setMoreDaysSwitch}: {form: any, setPreview__MoreDays: any, moreDaysSwitch: any, setMoreDaysSwitch: any}) => {
    return (
        <FormField
            control={form.control}
            name="moredays"
            render={({ field }) => (
                <FormItem>
                    <FormControl>
                        <Switch
                            checked={field.value}
                            onCheckedChange={(event) => {
                                field.onChange(event)
                                setMoreDaysSwitch(!moreDaysSwitch)
                                setPreview__MoreDays(event)
                            }}
                        />
                    </FormControl>
                </FormItem>
            )}
        />
    )
}
export default CompetitionMoredaysSwitch
