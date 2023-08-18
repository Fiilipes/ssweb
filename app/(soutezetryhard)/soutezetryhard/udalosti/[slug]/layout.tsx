import {Metadata, ResolvingMetadata} from "next";

import React from "react";

import BasicWrap from "@/components/layout/wrap/BasicWrap";
type Props = {
    params: { slug: string }
    searchParams: { [key: string]: string | string[] | undefined }
}
export function generateMetadata(
    { params, searchParams }: Props,
    parent?: ResolvingMetadata
): Metadata {
    // read route params
    const slug = params.slug

    return {
        title: params?.slug ? `${decodeURIComponent(params?.slug)} | Soutěže Tryhard` : `Soutěže Tryhard`,
    }
}
export default async function Layout({children,}: { children: React.ReactNode }) {

    return (
        <>
            {children}
        </>
    )

}