import React from 'react'
import { CSSTransition } from 'react-transition-group';

const WordList = ({ list }) => {
    const bgColors = ["#F4511E", "#FDD835", "#FFB300", "#FB8C00", "#43A047", "#7CB342", "#C0CA33", 
    "#039BE5", "#00ACC1", "#00897B", "#5E35B1", "#3949AB", "#1E88E5", "#E53935", "#D81B60", "#8E24AA"];
    bgColors.sort(() => 0.5 - Math.random());

    return (
        <div className="wordList">
            {list.map((word, index) =>
                <CSSTransition appear in={true} classNames="slide" timeout={300}>
                    <div className='item' style={{backgroundColor: bgColors[index]}} key={word.fi}>
                        <div className='word-container'>
                            <div className="word">{word.fi.toUpperCase()}</div>
                            <div className="word-separator"></div>
                            <div className="word en">{word.en.toUpperCase()}</div>
                        </div>
                    </div>
                </CSSTransition>)
            }
        </div>
    )
}

export default WordList
