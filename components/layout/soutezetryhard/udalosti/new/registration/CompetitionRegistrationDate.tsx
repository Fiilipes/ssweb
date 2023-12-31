import React from 'react'
import {FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import {CalendarIcon} from "lucide-react";
import {Calendar} from "@/components/ui/calendar";
import {format} from "date-fns";

const CompetitionRegistrationDate = ({form, registrationDateRef, setPreview__RegistrationDate}: {form: any, registrationDateRef: any, setPreview__RegistrationDate: any}) => {
    return (
        <FormField
            control={form.control}
            name="registrationDate"
            render={({ field }) => (
                <FormItem className={`flex flex-col ${field.value ? "opacity-100 h-full pointer-events-all" : "opacity-0 h-0 pointer-events-none"} overflow-hidden   duration-700 transition-all mb-2`} ref={registrationDateRef}>
                    <FormLabel className={"text-[20px]"}>Datum registrace</FormLabel>
                    <Popover>
                        <PopoverTrigger asChild>
                            <FormControl>
                                <Button
                                    variant={"outline"}
                                    className={cn(
                                        "w-[240px] pl-3 text-left font-normal",
                                        !field.value && "text-muted-foreground"
                                    )}
                                >
                                    {field.value ? (format(field.value, "PPP")) : <div>
                                        Vyberte datum...
                                    </div>}
                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                            </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={(event) => {
                                    field.onChange(event)
                                    // @ts-ignore
                                    setPreview__RegistrationDate(event)

                                    console.log(event)
                                }}
                                disabled={(date) =>
                                    date < new Date()
                                }
                                initialFocus
                            />
                        </PopoverContent>
                    </Popover>

                    <FormMessage />
                </FormItem>
            )}
        />
    )
}
export default CompetitionRegistrationDate
