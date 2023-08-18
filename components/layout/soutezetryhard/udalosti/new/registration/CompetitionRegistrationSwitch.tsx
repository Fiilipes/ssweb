import React from 'react'
import {FormControl, FormDescription, FormField, FormItem, FormLabel} from "@/components/ui/form";
import {Switch} from "@/components/ui/switch";

const CompetitionRegistrationSwitch = ({form, setPreview__Registration, registrationSwitch, setRegistrationSwitch, registrationDateRef}: {form: any, setPreview__Registration: any, registrationSwitch: any, setRegistrationSwitch: any, registrationDateRef: any}) => {
    return (
        <FormField
            control={form.control}
            name="registration"
            render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4 mr-2">
                    <div className="space-y-0.5 mr-8">
                        <FormLabel className="text-base">
                            Registrace
                        </FormLabel>
                        <FormDescription>
                            Na soutěž je nutné se registrovat předem
                        </FormDescription>
                    </div>
                    <FormControl>
                        <Switch
                            checked={field.value}
                            onCheckedChange={(event) => {
                                field.onChange(event)
                                setRegistrationSwitch(!registrationSwitch)
                                setPreview__Registration(event)

                                const myDatePicker = registrationDateRef.current as HTMLDivElement | null
                                // customize the date ref
                                if (myDatePicker) {
                                    if (registrationSwitch) {
                                        // style opacity to 50%
                                        myDatePicker.style.opacity = "0"
                                        // style pointer events to none
                                        myDatePicker.style.pointerEvents = "none"
                                        // style height to 0
                                        myDatePicker.style.height = "0"
                                    } else {
                                        // style opacity to 100%
                                        myDatePicker.style.opacity = "100%"
                                        // style pointer events to all
                                        myDatePicker.style.pointerEvents = "all"
                                        // style height to auto
                                        myDatePicker.style.height = "10vh"
                                    }
                                }

                            }}
                        />
                    </FormControl>
                </FormItem>
            )}
        />
    )
}
export default CompetitionRegistrationSwitch
