"use client"

import React from 'react'

import {ChevronDownCircle} from "lucide-react";
import {Button} from "@/components/ui/button";

const ExploreButton = () => {
    return (
        <Button className={"mt-4 mx-2"}>
            <div onClick={
                () => {
                    window.scrollTo(
                        {
                            top: 580,
                            behavior: 'smooth'
                        }
                    )
                }
            } className={"flex flex-row items-center"} >
                <ChevronDownCircle className={"h-4 w-4 mr-2"} />
                Prozkoumat
            </div>
        </Button>
    )
}
export default ExploreButton
