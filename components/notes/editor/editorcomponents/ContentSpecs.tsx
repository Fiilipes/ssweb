import React from 'react'

const ContentSpecs = ({ editor }:{editor:any}) => {
    return (
        <div className="character-count">
            {editor?.storage.characterCount.characters()} characters
            <br />
            {editor?.storage.characterCount.words()} words
        </div>
    )
}
export default ContentSpecs
