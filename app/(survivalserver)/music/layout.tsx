import {Metadata} from "next";

import React from "react";

import BasicWrap from "@/components/layout/wrap/BasicWrap";
import stream from 'youtube-audio-stream';
const url = 'https://youtube.com/watch?v=34aQNMvGEZQ'
import decoder from "lame";
import speaker from 'speaker';


export const metadata: Metadata = {
    title: 'Hudba',
    description: 'Survival Server Hudba',
}

export default async function Layout({children,}: { children: React.ReactNode }) {

    return (
        <BasicWrap>

            stream(url)
            .pipe(decoder())
            .pipe(speaker())
        </BasicWrap>
    )

}