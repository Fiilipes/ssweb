import React from 'react'
import {Separator} from "@/components/ui/separator";

const PageTitle = ({title, description}: {title:string, description:string}) => {
    return (
      <>
          <div>
              <h1 className={"text-[2vw] font-bold"}>
                  {title}
              </h1>
              <p className={"font-medium text-[.9vw] text-[#333]"}>
                  {description}
              </p>
          </div>
          <Separator className={"my-4"}/>
      </>
    )
}
export default PageTitle
