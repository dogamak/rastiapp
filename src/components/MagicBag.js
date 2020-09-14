import React, { useState } from 'react'
import WordList from './WordList'
import { pohina, normal } from '../wordlist'

const MagicBag = () => {
    const [clicked, setClicked] = useState(false)

    const containerStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        height: "100%"
    }

    if (clicked) return (
        <div style={containerStyle}>
            <WordList list={pohina} count={3} />
            <WordList list={normal} count={2} />
        </div>
        
    )

    return (
        <div style={containerStyle}>
            <button onClick={() => setClicked(!clicked)} >Arvo!</button>
        </div>
    )
}

export default MagicBag