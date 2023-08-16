import React from 'react'
import { BubbleMenu as BubbleMenuTiptap }  from '@tiptap/react'

const BubbleMenu = ({ editor }:{editor:any}) => {

    if (!editor) {
        return null
    }

    return (
        <BubbleMenuTiptap editor={editor} tippyOptions={{ duration: 100 }}>
            <button
                onClick={() => editor.chain().focus().toggleBold().run()}
                className={editor.isActive('bold') ? 'bg-black text-white border-[.1vw] mx-[.2vw] px-[.4vw] py-[.2vw] font-semibold border-black rounded-[.2vw]' : 'bg-white border-[.1vw] px-[.4vw] py-[.2vw] font-semibold border-black rounded-[.2vw] mx-[.2vw]'}
            >
                Bold
            </button>
            <button
                onClick={() => editor.chain().focus().toggleItalic().run()}
                className={editor.isActive('italic') ? 'bg-black text-white border-[.1vw] mx-[.2vw] px-[.4vw] py-[.2vw] font-semibold border-black rounded-[.2vw]' : 'bg-white border-[.1vw] px-[.4vw] py-[.2vw] font-semibold border-black rounded-[.2vw] mx-[.2vw]'}
            >
                Italic
            </button>
            <button
                onClick={() => editor.chain().focus().toggleStrike().run()}
                className={editor.isActive('strike') ? 'bg-black text-white border-[.1vw] mx-[.2vw] px-[.4vw] py-[.2vw] font-semibold border-black rounded-[.2vw]' : 'bg-white border-[.1vw] px-[.4vw] py-[.2vw] font-semibold border-black rounded-[.2vw] mx-[.2vw]'}
            >
                Strike
            </button>
        </BubbleMenuTiptap>
    )
}
export default BubbleMenu
