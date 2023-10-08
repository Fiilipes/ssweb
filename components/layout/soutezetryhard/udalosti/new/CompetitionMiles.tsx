"use client"

import React, { useState } from 'react'
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator
} from "@/components/ui/command";
import {CalendarIcon, FilePlus2, Plus, Sparkle, Swords, Trash} from "lucide-react";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import {cn} from "@/lib/utils";
import { format } from 'date-fns';
import {Switch} from "@/components/ui/switch";
import {Label} from "@/components/ui/label";
import { Calendar } from '@/components/ui/calendar';
import functions from '@/assets/settings/functions';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import competitionSoutezType from "@/components/layout/soutezetryhard/udalosti/new/CompetitionSoutezType";
const CompetitionMiles = ({milesOptions, miles, setMiles, date, setDate, competitionSoutezType}: {milesOptions: any, miles: any, setMiles: any, date:any, setDate:any, competitionSoutezType: any,}) => {
    const setMileDate = (date:Date, mile:any) => {
        let allMiles = miles
        let myMile = allMiles.find((m:any) => m.name === mile?.name)
        let myMileIndex = allMiles.indexOf(myMile)
        myMile.date.value = date
        allMiles[myMileIndex] = myMile
        setMiles(allMiles)
    }

    const [count, setCount] = useState(0)

    return (
        <>
            {/*{*/}
            {/*    competitionSoutezType*/}
            {/*}*/}
            {/*{*/}
            {/*    count*/}
            {/*}*/}
            <Command>
                <CommandInput placeholder="Type a command or search..." />
                <CommandList key={"newcompetition"}>
                    <CommandEmpty>Nenašli jsme pro hledaný výraz žádný výsledek :(</CommandEmpty>

                    <CommandGroup heading="Předvolby" >
                        {
                            milesOptions[competitionSoutezType].map((mile:any) => {
                                if (!miles.some((m:any) => m.name === mile.name)) {
                                    return (
                                        // eslint-disable-next-line react/jsx-key
                                        <button className={"block w-full"} onClick={() => {
                                            let allMiles = miles
                                            allMiles.push(mile)
                                            setMiles(allMiles)
                                        }}>
                                            <CommandItem>
                                                {mile.icon}
                                                <span>{mile.label}</span>
                                            </CommandItem>
                                        </button>
                                    )
                                } else {
                                    return
                                }

                            })
                        }
                        {
                            competitionSoutezType === "vícekolová soutěž" &&
                            <Sheet>

                                <SheetTrigger className={"w-full"}>
                                    <CommandItem>
                                        <FilePlus2 className={"w-4 h-4 mr-2"} />
                                        <span>
                                        Nové kolo soutěže
                                    </span>
                                    </CommandItem>

                                </SheetTrigger>

                                <SheetContent>
                                    <SheetHeader>
                                        <SheetTitle>Nové kolo soutěže</SheetTitle>
                                        <SheetDescription>
                                            Přidejte nové kolo pro soutěž
                                        </SheetDescription>
                                    </SheetHeader>
                                    <div className="grid gap-4 py-4">
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="nameNewRound" className="text-right">
                                                Název
                                            </Label>
                                            <Input id="nameNewRound"  placeholder={
                                                "Zde zadejte název nového kola"
                                            } className="col-span-3" />
                                        </div>
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="descriptionNewRound" className="text-right">
                                                Popis
                                            </Label>
                                            <Input id="descriptionNewRound"  placeholder={
                                                "Zde zadejte popis nového kola"
                                            } className="col-span-3" />
                                        </div>
                                    </div>

                                    <SheetClose onClick={() => {
                                        console.log("HEEEYq")
                                        let allMiles = miles
                                        allMiles.push({
                                            // @ts-ignore
                                            name: document.getElementById("nameNewRound")!.value.toLowerCase().replace(/\s/g, ""),
                                            // @ts-ignore

                                            label: document.getElementById("nameNewRound")!.value ,
                                            date: {
                                                value: undefined,
                                                type: "single"
                                            },
                                            // @ts-ignore
                                            description: document.getElementById("descriptionNewRound")!.value,
                                            icon: <Sparkle className={"w-4 h-4 mr-2"} />,
                                            important: true
                                        })
                                        setMiles(allMiles)
                                        setCount(count + 1)
                                    }}>
                                        <Button>
                                            Přidat milník
                                        </Button>
                                    </SheetClose>
                                </SheetContent>
                            </Sheet>
                        }
                        <Sheet>

                            <SheetTrigger className={"w-full"}>
                                <CommandItem>
                                    <Sparkle className={"w-4 h-4 mr-2"} />
                                    <span>
                                        Vlastní milník
                                    </span>
                                </CommandItem>

                            </SheetTrigger>

                            <SheetContent>
                                <SheetHeader>
                                    <SheetTitle>Vlastní milník</SheetTitle>
                                    <SheetDescription>
                                        Přidejte svůj vlastní milník k soutěži
                                    </SheetDescription>
                                </SheetHeader>
                                <div className="grid gap-4 py-4">
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="nameCustomMile" className="text-right">
                                            Název
                                        </Label>
                                        <Input id="nameCustomMile"  placeholder={
                                            "Zde zadejte název milníku"
                                        } className="col-span-3" />
                                    </div>
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="descriptionCustomMile" className="text-right">
                                            Popis
                                        </Label>
                                        <Input id="descriptionCustomMile"  placeholder={
                                            "Zde zadejte popis milníku"
                                        } className="col-span-3" />
                                    </div>
                                </div>

                                <SheetClose onClick={() => {
                                    console.log("HEEEYq")
                                    let allMiles = miles
                                    allMiles.push({
                                        // @ts-ignore
                                        name: document.getElementById("nameCustomMile")!.value.toLowerCase().replace(/\s/g, ""),
                                        // @ts-ignore

                                        label: document.getElementById("nameCustomMile")!.value ,
                                        date: {
                                            value: undefined,
                                            type: "single"
                                        },
                                        // @ts-ignore
                                        description: document.getElementById("descriptionCustomMile")!.value,
                                        icon: <Sparkle className={"w-4 h-4 mr-2"} />,
                                        important: false
                                    })
                                    setMiles(allMiles)
                                    setCount(count + 1)
                                }}>
                                    <Button>
                                        Přidat milník
                                    </Button>
                                </SheetClose>
                            </SheetContent>
                        </Sheet>

                    </CommandGroup>
                    <CommandSeparator />

                </CommandList>
            </Command>
            <div className={"py-8 flex flex-col gap-y-4"}>

                {

                    miles.map((mile:any) => {

                        return (
                            // eslint-disable-next-line react/jsx-key
                            <Card>
                                <CardHeader>
                                    <CardTitle>{mile.label}</CardTitle>
                                    <CardDescription>{mile.description}</CardDescription>
                                </CardHeader>
                                <CardContent className={"flex flex-col gap-y-8"}>
                                    <div className={"flex flex-row gap-x-[100px]"}>
                                        <button className="flex flex-row items-center ">
                                            <div className="text-left w-fit pr-8 font-semibold text-[14px]">Více dní</div>
                                            <Switch id="more-days" defaultChecked={
                                                mile.date.type === "range"
                                            } onCheckedChange={
                                                (event) => {
                                                    console.log(event)
                                                    // edit the current mile's date
                                                    let allMiles = miles
                                                    let myMile = allMiles.find((m:any) => m.name === mile.name)
                                                    let myMileIndex = allMiles.indexOf(myMile)
                                                    myMile.date.type = event ? "range" : "single"
                                                    allMiles[myMileIndex] = myMile
                                                    setMiles(allMiles)
                                                    // if event is true hide single date and show range date and if not hide range date and show single date



                                                }
                                            } />
                                        </button>
                                        <button className="flex flex-row items-center">
                                            <div className="text-left w-fit pr-8 font-semibold text-[14px]">
                                                Date
                                            </div>
                                            <button id={"single"} className={
                                                mile.date.type === "range" ? "hidden" : ""
                                            }>
                                                <Popover>
                                                    {/* eslint-disable-next-line react/jsx-no-undef */}
                                                    <PopoverTrigger asChild>
                                                        <Button
                                                            variant={"outline"}
                                                            className={cn(
                                                                "w-[280px] justify-start text-left font-normal",
                                                                !mile?.date?.value && "text-muted-foreground"
                                                            )}
                                                        >
                                                            <CalendarIcon className="mr-2 h-4 w-4" />
                                                            {mile?.date?.value && !mile?.date?.value?.from!&&!mile?.date?.value?.to! ? format(mile?.date?.value, "PPP") : <span>Pick a date</span>}

                                                        </Button>
                                                    </PopoverTrigger>
                                                    <button>
                                                        <PopoverContent className="w-auto p-0">
                                                            <button>
                                                                <Calendar
                                                                    mode="single"
                                                                    selected={mile?.date?.value}
                                                                    onSelect={(event) => {
                                                                        setDate(event)
                                                                        // @ts-ignore
                                                                        setMileDate(event, mile)

                                                                    }}
                                                                    initialFocus
                                                                />
                                                            </button>
                                                        </PopoverContent>
                                                    </button>
                                                </Popover>
                                            </button>
                                            <button id={"range"} className={
                                                mile.date.type === "range" ? "" : "hidden"
                                            }>
                                                <Popover>
                                                    <PopoverTrigger asChild>
                                                        <Button
                                                            id="date"
                                                            variant={"outline"}
                                                            className={cn(
                                                                "w-[300px] justify-start text-left font-normal",
                                                                !mile?.date?.value && "text-muted-foreground"
                                                            )}
                                                        >
                                                            <CalendarIcon className="mr-2 h-4 w-4" />
                                                            {mile?.date?.value?.from! ? (
                                                                mile?.date?.value?.to! ? (
                                                                    <>
                                                                        {format(mile?.date?.value?.from!, "LLL dd, y")} -{" "}
                                                                        {format(mile?.date?.value?.to!, "LLL dd, y")}
                                                                    </>
                                                                ) : (
                                                                    format(mile?.date?.value?.from!, "LLL dd, y")
                                                                )
                                                            ) : (
                                                                <span>Pick a date</span>
                                                            )}
                                                        </Button>
                                                    </PopoverTrigger>
                                                    <button>
                                                        <PopoverContent className="w-auto p-0" align="start">
                                                            <button>
                                                                <Calendar

                                                                    mode="range"
                                                                    defaultMonth={mile?.date?.value?.from}
                                                                    selected={mile?.date?.value}
                                                                    onSelect={(event) => {
                                                                        setDate(event)
                                                                        // @ts-ignore
                                                                        setMileDate(event, mile)

                                                                    }}
                                                                    numberOfMonths={2}

                                                                />
                                                            </button>
                                                        </PopoverContent>
                                                    </button>
                                                </Popover>
                                            </button>

                                        </button>
                                        <button>
                                            <Trash className={"w-4 h-4"} onClick={() => {
                                                let allMiles = miles
                                                allMiles.splice(allMiles.indexOf(mile), 1)
                                                setMiles(allMiles)
                                            }} />
                                        </button>
                                    </div>

                                </CardContent>

                            </Card>
                        )
                    })
                }
            </div>
        </>
    )
}
export default CompetitionMiles
