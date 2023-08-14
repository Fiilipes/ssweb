import React from 'react'
import {Separator} from "@/components/ui/separator";
import {Button} from "@/components/ui/button";
import Link from "next/link";

const PageTitle = ({status, title, description, buttons=[]}: {status:boolean | null, title:string, description:string, buttons:{content:string,link:string|undefined,variant:"link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | null | undefined}[]}) => {
    return (
      <>
          <div className={"flex flex-row justify-between w-full items-center"}>
              <div>
                  <h1 className={"text-[2vw] font-bold"}>
                      {title}
                  </h1>
                  {
                      status &&
                      <p className={"font-medium text-[.9vw] text-[#333]"}>
                          {description}
                      </p>
                  }
              </div>
              <div className={"flex flex-row gap-x-[1vw]"}>
                  {
                        status && buttons.map((button, index) => {

                            if (button.link) {
                                return (
                                    <Link href={button.link} key={index}>
                                        <Button variant={button.variant}>{button.content}</Button>
                                    </Link>
                                )
                            }
                        })
                  }
              </div>
          </div>

          <Separator className={"my-4"}/>
      </>
    )
}
export default PageTitle
