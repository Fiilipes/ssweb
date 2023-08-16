"use client"

import React from 'react'
import {Bold, Italic, SquareDashedBottomCode, Strikethrough, Underline} from "lucide-react";

const MenuBar = ({ editor }:{editor:any}) => {
    if (!editor) {
        return null
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [options, setOptions] = React.useState<{name: string,icon: any,onClick: any}[]>([])

    // eslint-disable-next-line react-hooks/rules-of-hooks
    React.useEffect(() => {
        const iconClass = 'text-white w-[1.2vw] h-[1.2vw]'

        setOptions(
            [
                // {
                //     name: 'codeBlock',
                //     icon: <SquareDashedBottomCode className={iconClass} />,
                //     onClick: () => editor.chain().focus().toggleCodeBlock().run()
                // },
                {
                    name: 'bold',
                    icon: <Bold className={iconClass} />,
                    onClick: () => editor.chain().focus().toggleBold().run()
                },
                {
                    name: 'italic',
                    icon: <Italic className={iconClass} />,
                    onClick: () => editor.chain().focus().toggleItalic().run()
                },
                {
                    name: 'underline',
                    icon: <Underline className={iconClass} />,
                    onClick: () => editor.chain().focus().toggleUnderline().run()
                },
                {
                    name: 'strike',
                    icon: <Strikethrough className={iconClass} />,
                    onClick: () => editor.chain().focus().toggleStrike().run()
                },
            ]
        )
    }, [editor])

    return (
        <div className={"bg-[#111] flex flex-row items-center p-[.8vw] gap-x-[.5vw] "}>
            {
                options.map((option, index) => (
                    <button
                        key={index}
                        onClick={option.onClick}
                        className={editor.isActive(option.name) ? 'bg-[#333] rounded-[.2vw] p-[.2vw] transition-all duration-200' : 'rounded-[.2vw] p-[.2vw] hover:bg-[#333] transition-all duration-200'}
                    >
                        {option.icon}
                    </button>
                ))
            }
        </div>
    )
}
export default MenuBar
