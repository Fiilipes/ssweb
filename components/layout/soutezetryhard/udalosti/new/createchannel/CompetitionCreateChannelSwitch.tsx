import React from 'react'
import {FormControl, FormDescription, FormField, FormItem, FormLabel} from "@/components/ui/form";
import {Switch} from "@/components/ui/switch";

const CompetitionCreateChannelSwitch = ({form, setPreview__CreateChannel, createChannelSwitch, setCreateChannelSwitch}: {form: any, setPreview__CreateChannel: any, createChannelSwitch: any, setCreateChannelSwitch: any}) => {
    return (
        <FormField
            control={form.control}
            name="createChannel"
            render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4 mx-2">
                    <div className="space-y-0.5 mr-8">
                        <FormLabel className="text-base">
                            Vytvořit discord channel
                        </FormLabel>
                        <FormDescription>
                            Vytvoří se discord channel pro soutěž
                        </FormDescription>
                    </div>
                    <FormControl>
                        <Switch
                            checked={field.value}
                            onCheckedChange={(event) => {
                                field.onChange(event)
                                setCreateChannelSwitch(!createChannelSwitch)
                                setPreview__CreateChannel(event)
                            }}
                        />
                    </FormControl>
                </FormItem>
            )}
        />
    )
}
export default CompetitionCreateChannelSwitch
