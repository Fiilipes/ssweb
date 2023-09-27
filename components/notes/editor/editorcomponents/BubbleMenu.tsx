import React from 'react'
import { BubbleMenu as BubbleMenuTiptap }  from '@tiptap/react'

const BubbleMenu = ({ editor }:{editor:any}) => {

    if (!editor) {
        return null
    }

    return (
        <BubbleMenuTiptap editor={editor} tippyOptions={{ duration: 100 }}>
            <button
                type={"button"}
                onClick={() => editor.chain().focus().toggleBold().run()}
                className={editor.isActive('bold') ? 'bg-black text-white border-[1.5px] mx-[3px] px-[6px] py-[3px] font-semibold border-black rounded-[3px]' : 'bg-white border-[1.5px] px-[6px] py-[3px] font-semibold border-black rounded-[3px] mx-[3px]'}
            >
                Bold
            </button>
            <button
                type={"button"}
                onClick={() => editor.chain().focus().toggleItalic().run()}
                className={editor.isActive('italic') ? 'bg-black text-white border-[1.5px] mx-[3px] px-[6px] py-[3px] font-semibold border-black rounded-[3px]' : 'bg-white border-[1.5px] px-[6px] py-[3px] font-semibold border-black rounded-[3px] mx-[3px]'}
            >
                Italic
            </button>
            <button
                type={"button"}
                onClick={() => editor.chain().focus().toggleStrike().run()}
                className={editor.isActive('strike') ? 'bg-black text-white border-[1.5px] mx-[3px] px-[6px] py-[3px] font-semibold border-black rounded-[3px]' : 'bg-white border-[1.5px] px-[6px] py-[3px] font-semibold border-black rounded-[3px] mx-[3px]'}
            >
                Strike
            </button>
        </BubbleMenuTiptap>
    )
}
export default BubbleMenu
