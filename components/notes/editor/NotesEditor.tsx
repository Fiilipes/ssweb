"use client"

import {useEditor, EditorContent, ReactNodeViewRenderer} from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import CharacterCount from '@tiptap/extension-character-count'
import Code from '@tiptap/extension-code'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import Placeholder from '@tiptap/extension-placeholder'
import Typography from '@tiptap/extension-typography'
import Document from '@tiptap/extension-document'
import Underline from '@tiptap/extension-underline'



import Emoji, { gitHubEmojis } from '@tiptap-pro/extension-emoji'
import  emojiSuggestion from '@/components/notes/editor/editorextensions/emojis/suggestion'
import  mentionSuggestion from '@/components/notes/editor/editorextensions/mentions/suggestion'

import "./styles.scss"
import { Mathematics } from '@tiptap-pro/extension-mathematics'
import 'katex/dist/katex.min.css'

import { ColorHighlighter } from '@/components/notes/editor/editorextensions/clevereditor/colorhighlighter'
import { SmilieReplacer } from '@/components/notes/editor/editorextensions/clevereditor/smilereplacer'


import css from 'highlight.js/lib/languages/css'
import js from 'highlight.js/lib/languages/javascript'
import ts from 'highlight.js/lib/languages/typescript'
import html from 'highlight.js/lib/languages/xml'
// load all highlight.js languages
import { lowlight } from 'lowlight'

lowlight.registerLanguage('html', html)
lowlight.registerLanguage('css', css)
lowlight.registerLanguage('js', js)
lowlight.registerLanguage('ts', ts)

// INSTALLED EXTENSIONS 💡
// Blockquote
// Bold
// BubbleMenu
// BulletList
// CharacterCount
// Code
// CodeBlock
// Document
// HardBreak
// Heading
// HorizontalRule
// ListItem
// OrderedList
// Paragraph
// Text
// Code
// Italic
// Underline
// Mention
// Strike
// Dropcursor
// Gapcursor
// History
// Typography
// Emoji
// -------------------------


import React from 'react'
import CodeBlockComponent from "@/components/notes/editor/editorextensions/codeblock/CodeBlockComponent";

import MenuBar from "@/components/notes/editor/editorcomponents/MenuBar";
import ContentSpecs from "@/components/notes/editor/editorcomponents/ContentSpecs";
import BubbleMenu from "@/components/notes/editor/editorcomponents/BubbleMenu";
import {Mention} from "@tiptap/extension-mention";



const NotesEditor = ({editor, menubar, props}:{editor:any, menubar:any[], props:any}) => {






    React.useEffect(() => {
        const handleMentionClick = (event:any) => {
            const clickedElement = event.target;
            if (clickedElement.matches('span[data-type="mention"]')) {
                const mentionId = clickedElement.getAttribute('data-id');
                console.log(`Clicked on mention: ${mentionId}`);
                // Perform other actions here
            }
        };

        window.document.addEventListener('click', handleMentionClick);

        return () => {
            window.document.removeEventListener('click', handleMentionClick);
        };
    }, []);

    return (
        <section className={`${
            props.editable ? "border-[2px] border-[#111]" : ""
        } rounded-[16px] min-h-[320px] overflow-hidden bg-white`}>
            <BubbleMenu editor={editor} />

            {/*<ContentSpecs editor={editor} />*/}

            {
                props.editable ?
                    <MenuBar editor={editor} menubar={menubar} />
                    : null
            }

            <div className={"p-[16px]"}>
                <EditorContent editor={editor} />
            </div>
        </section>
    )
}
export default NotesEditor


