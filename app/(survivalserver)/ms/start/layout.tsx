import {Metadata} from "next";

import React from "react";

import BasicWrap from "@/components/layout/wrap/BasicWrap";

export const metadata: Metadata = {
    title: 'Jak začít | MS1',
    description: 'Jak začít na Módovaném Survivalu',
}

export default async function Layout({children,}: { children: React.ReactNode }) {

    return (
        <>
            {children}
        </>
    )

}