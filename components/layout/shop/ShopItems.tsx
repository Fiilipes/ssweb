import React from 'react'
import {Skeleton} from "@/components/ui/skeleton";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";

const ShopItems = ({session, shop, loading}: {session:any, shop:any, loading:boolean}) => {
    return (
        <>
            {
                loading ?
                    <div>
                        <Skeleton className="h-[2vw] w-[2vw] rounded-full mb-[1vw]"/>

                        <Skeleton className="h-4 w-[200px]" />
                        <Skeleton className="h-4 w-[250px]" />
                    </div>
                    :
                    <Tabs defaultValue="event-itemy" >
                        <div className={"flex flex-row justify-between items-center"}>
                            <TabsList>
                                {
                                    shop?.map((item: any) => {
                                        console.log(item)
                                        return (
                                            // eslint-disable-next-line react/jsx-key
                                            <TabsTrigger value={item.category.toLowerCase().replace(/\s/g, '-')}>{item.category}</TabsTrigger>
                                        )
                                    })
                                }
                            </TabsList>
                            <div>
                                button
                            </div>
                        </div>
                        {
                            shop?.map((item: any) => {
                                console.log(item)
                                return (
                                    // eslint-disable-next-line react/jsx-key
                                    <TabsContent value={item.category.toLowerCase().replace(/\s/g, '-')}>
                                        {
                                            item.list.map((i: any) => {
                                                return (
                                                    // eslint-disable-next-line react/jsx-key
                                                    <div>
                                                        {i.name}
                                                    </div>
                                                )
                                            })
                                        }
                                    </TabsContent>
                                )
                            })
                        }
                    </Tabs>
            }
        </>
    )
}
export default ShopItems
