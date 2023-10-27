"use client"

import { Button } from '@/components/ui/button'
import React from 'react'
import play from "play-dl";

const Page = () => {
    return (
        <Button onClick={async () => {
            const stream = await play.stream('https://www.youtube.com/watch?v=N20q-391r48')

        }}>
            Play
        </Button>
    )
}
export default Page
