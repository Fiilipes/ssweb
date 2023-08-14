import React from 'react'
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";

const ShopItems = ({shop}: {shop:any}) => {
    return (
        <>
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
        </>
    )
}
export default ShopItems
