import './codeblockcomponent.scss'

import { NodeViewContent, NodeViewWrapper } from '@tiptap/react'
import React from 'react'

// eslint-disable-next-line react/display-name
export default ({ node: { attrs: { language: defaultLanguage } }, updateAttributes, extension }: {node:any,updateAttributes:any, extension:any}) => (
    <NodeViewWrapper className="code-block">
        <select contentEditable={false} defaultValue={defaultLanguage} onChange={event => updateAttributes({ language: event.target.value })}>
            <option value="null">
                auto
            </option>
            <option disabled>
                —
            </option>
            {extension.options.lowlight.listLanguages().map((lang:any, index:number) => (
                <option key={index} value={lang}>
                    {lang}
                </option>
            ))}
        </select>
        <pre>
      <NodeViewContent as="code" />
    </pre>
    </NodeViewWrapper>
)