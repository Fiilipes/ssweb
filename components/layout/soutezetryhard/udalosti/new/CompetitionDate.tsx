import React from 'react'
import {FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import {CalendarIcon} from "lucide-react";
import {Calendar} from "@/components/ui/calendar";
import {format} from "date-fns";

const CompetitionDate = ({form, moreDaysSwitch, setPreview__CompetitionDate, setPreview__CompetitionDateRange}: {form: any, moreDaysSwitch: any, setPreview__CompetitionDate: any, setPreview__CompetitionDateRange: any }) => {
    return (
        <>
            {
                !moreDaysSwitch ?  <FormField
                    control={form.control}
                    name="competitionDate"
                    render={({ field }) => (
                        <FormItem className="flex flex-col my-2" >
                            <FormLabel>Datum konání soutěže</FormLabel>
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
                                            {field.value? typeof field.value !== "object" ? (
                                                format(field.value, "PPP")
                                            ) : field.value.hasOwnProperty("from") ? (
                                                <span>Pick a date</span>
                                            ) : (
                                                format(field.value, "PPP")
                                            ): (
                                                <span>Pick a date</span>
                                            )}
                                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                        </Button>
                                    </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                    <Calendar
                                        mode="single"
                                        selected={field.value? typeof field.value !== "object" ? (
                                            field.value
                                        ) : undefined : undefined}
                                        onSelect={(event) => {
                                            field.onChange(event)
                                            // @ts-ignore
                                            setPreview__CompetitionDate(event)
                                            // @ts-ignore
                                            setPreview__CompetitionDateRange(undefined)
                                        }
                                        }
                                        disabled={(date) =>
                                            date < new Date()
                                        }
                                        initialFocus
                                    />
                                </PopoverContent>
                            </Popover>
                            <FormDescription>
                                Vyberte datum konání soutěže
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                /> :<FormField
                    control={form.control}
                    name="competitionDateRange"
                    render={({ field }) => (
                        <FormItem className="flex flex-col my-2" >
                            <FormLabel>Datum konání soutěže</FormLabel>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button
                                        id="date"
                                        variant={"outline"}
                                        className={cn(
                                            "w-[300px] justify-start text-left font-normal",
                                            !field.value && "text-muted-foreground"
                                        )}
                                    >
                                        {field.value?.from ? (
                                            field.value.to ? (
                                                <>
                                                    {format(field.value.from, "LLL dd, y")} -{" "}
                                                    {format(field.value.to, "LLL dd, y")}
                                                </>
                                            ) : (
                                                format(field.value.from, "LLL dd, y")
                                            )
                                        ) : (
                                            <span>Pick a date range</span>
                                        )}
                                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                    <Calendar

                                        mode="range"
                                        defaultMonth={field.value?.from}
                                        selected={field.value}
                                        onSelect={(event) => {
                                            field.onChange(event)
                                            // @ts-ignore
                                            setPreview__CompetitionDateRange(event)
                                            setPreview__CompetitionDate(undefined)
                                        }	}
                                        numberOfMonths={2}
                                    />
                                </PopoverContent>
                            </Popover>
                            <FormDescription>
                                Vyberte rozsah data konání soutěže
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            }
        </>
    )
}
export default CompetitionDate
