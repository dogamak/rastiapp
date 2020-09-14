import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid';

import WordList from './WordList'
import { pohina, normal } from '../wordlist'

const MagicBag = () => {
    const [clicked, setClicked] = useState(false)
    if (clicked) return (
        <div>
            <Grid container spacing={2} justify='center' >
                <Grid item xs>
                    <WordList list={pohina} count={1} header='Pöhinä sananne' />
                </Grid>
                <Grid item xs>
                    <WordList list={normal} count={2} header='Normaalit sananne' />
                </Grid>
            </Grid>
        </div>
    )

    return (
        <div>
            <Button color='primary' onClick={() => setClicked(!clicked)} >Arvo!</Button>
        </div>
    )
}

export default MagicBag