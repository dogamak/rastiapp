import React, { useState } from 'react'
import WordList from './WordList'
import { pohina, normal } from '../wordlist'
import "../App.css"

const MagicBag = () => {
    const [clicked, setClicked] = useState(false)



    if (clicked) return (
        <div className="wordList">
            <WordList list={pohina} count={3} />
            <WordList list={normal} count={2} />
        </div>
        
    )

    const handleClick = () => {
        setTimeout(() => setClicked(true), 120);
    };

    return (
        <div className="buttonDiv">
            <button onClick={handleClick} >ARVO!</button>
        </div>
    )
}

export default MagicBag
