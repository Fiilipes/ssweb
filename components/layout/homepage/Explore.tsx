"use client"

import React from 'react'

import {ChevronDownCircle} from "lucide-react";
import {Button} from "@/components/ui/button";
import Link from 'next/link';

const ExploreButton = () => {
    return (
        <Button className={"mt-4 mx-2"}>
            <Link href={"#content"} className={"flex flex-row items-center"} >
                <ChevronDownCircle className={"h-4 w-4 mr-2"} />
                Prozkoumat
            </Link>
        </Button>
    )
}
export default ExploreButton
