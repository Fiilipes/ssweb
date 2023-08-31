import {Bold, Italic, List, SquareDashedBottomCode, Strikethrough, Underline} from "lucide-react";
import React from "react";

const iconClass = 'text-white w-[1.2vw] h-[1.2vw]'


const menuOptions = (editor?:any) => ({
    codeBlock:{
        name: 'codeBlock',
        icon
            :
            <SquareDashedBottomCode className={iconClass}/>,
        onClick
            :
            editor ? () => editor.chain().focus().toggleCodeBlock().run() : () => {
            }
    }
    ,
    bold:{
        name: 'bold',
        icon
            :
            <Bold className={iconClass}/>,
        onClick
            :
            editor ? () => editor.chain().focus().toggleBold().run() : () => {
            }
    }
    ,
    italic:{
        name: 'italic',
        icon
            :
            <Italic className={iconClass}/>,
        onClick
            :
            editor ? () => editor.chain().focus().toggleItalic().run() : () => {
            }
    }
    ,
    underline:{
        name: 'underline',
        icon
            :
            <Underline className={iconClass}/>,
        onClick
            :
            editor ? () => editor.chain().focus().toggleUnderline().run() : () => {
            }
    }
    ,
    strike:{
        name: 'strike',
        icon
            :
            <Strikethrough className={iconClass}/>,
        onClick
            :
            editor ? () => editor.chain().focus().toggleStrike().run() : () => {
            }
    }
    ,
    bulletList:{
        name: 'bulletList',
        icon
            :
             <List className={iconClass}/>,
        onClick
            :
            editor ? () => editor.chain().focus().toggleBulletList().run() : () => {
            }
    }
})

export default menuOptions