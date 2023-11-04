import React from 'react'

const Loading = ({children}: {children: React.ReactNode}) => {
    return (
        <div className={"w-full flex items-center flex-row justify-center"}>
            {children}
        </div>
    )
}
export default Loading
