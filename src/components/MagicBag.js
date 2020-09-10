import React, { useState } from 'react'
import { sampleSize } from 'lodash'

const MagicBag = ({ wordlist, count }) => {
    const [words, setWords] = useState([])

    if (words.length === 0) return (
        <div>
            <button onClick={() => setWords(sampleSize(wordlist, count))}>
                Draw!
             </button>
        </div>
    )

    return (
        <div>
            <ul>
                {words.map(w => <li key={w}>{w}</li>)}
            </ul>
        </div>
    )
}

export default MagicBag