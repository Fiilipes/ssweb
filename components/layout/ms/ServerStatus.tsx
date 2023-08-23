import React from 'react'
import {Card, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";


const ServerStatus = () => {
    return (
        <Card className={"w-full mt-[2vw] flex flex-row"}>
            <div className={"mr-[5vw]"}>
                <CardHeader>
                    <CardTitle>Stav serveru</CardTitle>
                    <CardDescription>Jak je na tom server?</CardDescription>
                </CardHeader>
                <CardFooter className={"mt-[1.5vw]"}>
                    <div className={"text-[3vw] text-[rgba(100,255,200,1)] font-extrabold"}>
                        Online
                    </div>
                </CardFooter>
            </div>

        </Card>
    )
}
export default ServerStatus
