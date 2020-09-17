import React, { useState, useEffect } from 'react'
import WordList from './WordList'
import { pohina, normal } from '../wordlist'
import { sampleSize } from 'lodash'
import "../App.css"

const MagicBag = () => {
    const [pohinaList, setPohinaList] = useState([])
    const [normalList, setNormalList] = useState([])
    const [buttonVisibility, setButtonVisibility] = useState(false)

    useEffect(() => {
        const normal = JSON.parse(localStorage.getItem('normalwords'));
        const pohina = JSON.parse(localStorage.getItem('pohinawords'));

        setNormalList(normal);
        setPohinaList(pohina);

        if (!normal || !normal) {
            setButtonVisibility(true)
        }
    }, [])

    const chooseWords = () => {
       const pohinawords = sampleSize(pohina, 2)
       const normalwords = sampleSize(normal, 1)
       setPohinaList(pohinawords)
       setNormalList(normalwords)
       localStorage.setItem('pohinawords', JSON.stringify(pohinawords))
       localStorage.setItem('normalwords', JSON.stringify(normalwords))
    }

    let wordList = null;
    let arvoButton = null;

    if (pohinaList && normalList) {
        wordList = (
            <div className="wordList">
                <WordList list={pohinaList} />
                <WordList list={normalList} />
            </div>
        );
    }

    if (buttonVisibility) {
        arvoButton = (
            <div className="buttonDiv">
                <button onClick={chooseWords} >ARVO!</button>
            </div>
        );
    }

    return (
        <>
            { arvoButton }
            { wordList }
        </>
    )
}

export default MagicBag
