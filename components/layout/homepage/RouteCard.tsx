import React from 'react'
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {Store} from "lucide-react";

const RouteCard = ({title,description,link,children}: { title:string, description:string,link:string, children: React.ReactNode }) => {
    return (
        <Link href={link} >

        <Card className={"w-[25vw]"}>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
                    <Button variant={"secondary"} className={"flex flex-row items-center"}>
                        {children}
                    </Button>
            </CardContent>
        </Card>
        </Link>

    )
}
export default RouteCard
