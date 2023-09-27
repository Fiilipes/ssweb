"use client"

import React from 'react'
import {Bold, Italic, SquareDashedBottomCode, Strikethrough, Underline} from "lucide-react";
import menuOptions  from '@/assets/settings/content/notes/menu';

const MenuBar = ({ editor, menubar }:{editor:any, menubar:any[]}) => {
    if (!editor) {
        return null
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [options, setOptions] = React.useState<{name: string,icon: any,onClick: any}[]>([])

    // eslint-disable-next-line react-hooks/rules-of-hooks
    React.useEffect(() => {

        const menuOptionsArray = menuOptions(editor)

        const modifyOptionsWithEditor = (optionsArray:any[], editor:any) => {
            return optionsArray.map(option => {
                // @ts-ignore
                const modifiedOption = menuOptionsArray[option.name]

                return modifiedOption;
            });
        };

        const modifiedOptions = modifyOptionsWithEditor(menubar, editor);

        setOptions(modifiedOptions)


    }, [editor, menubar])

    return (
        <div className={"bg-[#111] flex flex-row items-center p-[10px] gap-x-[8px] "}>
            {
                options.map((option, index) => (
                    <button
                        key={index}
                        onClick={option.onClick}
                        type={"button"}
                        className={editor.isActive(option.name) ? 'bg-[#333] rounded-[4px] p-[4px] transition-all duration-200' : 'rounded-[4px] p-[4px] hover:bg-[#333] transition-all duration-200'}
                    >
                        {option.icon}
                    </button>
                ))
            }
        </div>
    )
}
export default MenuBar
