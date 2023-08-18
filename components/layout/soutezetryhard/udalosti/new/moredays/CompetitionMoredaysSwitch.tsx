import React from 'react'
import {FormControl, FormDescription, FormField, FormItem, FormLabel} from "@/components/ui/form";
import {Switch} from "@/components/ui/switch";

const CompetitionMoredaysSwitch = ({form, setPreview__MoreDays, moreDaysSwitch, setMoreDaysSwitch}: {form: any, setPreview__MoreDays: any, moreDaysSwitch: any, setMoreDaysSwitch: any}) => {
    return (
        <FormField
            control={form.control}
            name="moredays"
            render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4 mx-2">
                    <div className="space-y-0.5 mr-8">
                        <FormLabel className="text-base">
                            Více dní
                        </FormLabel>
                        <FormDescription>
                            Soutěž probíhá déle než jeden den
                        </FormDescription>
                    </div>
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
