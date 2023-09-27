import React from 'react'
import {FormControl, FormDescription, FormField, FormItem, FormLabel} from "@/components/ui/form";
import {Switch} from "@/components/ui/switch";

const CompetitionCreateChannelSwitch = ({form, setPreview__CreateChannel, createChannelSwitch, setCreateChannelSwitch}: {form: any, setPreview__CreateChannel: any, createChannelSwitch: any, setCreateChannelSwitch: any}) => {
    return (
        <FormField
            control={form.control}
            name="createChannel"
            render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4 my-[10px] mb-[30px] bg-white">
                    <div className="space-y-0.5 mr-8">

                        <FormLabel className="text-base text-[20px]">
                            Vytvořit discord channel
                        </FormLabel>
                        <FormDescription>
                            Budete moci lépe komunikovat o soutěži na discordu
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
