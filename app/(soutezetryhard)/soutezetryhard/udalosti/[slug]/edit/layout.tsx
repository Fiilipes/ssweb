import {Metadata, ResolvingMetadata} from "next";

import React from "react";

import BasicWrap from "@/components/layout/wrap/BasicWrap";
export const metadata: Metadata = {
    title: 'Úprava události | Soutěže Tryhard',
    description: 'Upravit novou událost na Soutěže Tryhard',
}
export default async function Layout({children,}: { children: React.ReactNode }) {

    return (
        <>
            {children}
        </>
    )

}