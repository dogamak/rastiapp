import React from 'react'
import { sampleSize } from 'lodash'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText'
import Paper from '@material-ui/core/Paper';

const WordList = ({ list, count, header }) => {
    const sampledList = sampleSize(list, count)
    return (
        <div>
            <Paper>
                <List subheader={header} >
                    {
                        sampledList.map(word =>
                            <ListItem key={word}>
                                <ListItemText primary={word} />
                            </ListItem>)
                    }
                </List>
            </Paper>
        </div>
    )
}

export default WordList