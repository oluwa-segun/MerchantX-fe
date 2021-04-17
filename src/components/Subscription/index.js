import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        width: '90%',
        height: '400px',
        backgroundColor: '#0B08B8',
        display: 'flex',
        flexFlow: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        margin: '20px auto',
        padding: '20px',
        borderRadius: '42px',
        color: '#ffffff'
    },
    heading: {
        fontSize: '42px',
        fontweight: 'bold',
        lineHeight: '48px'
    }
}))

export default function Subscription() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Box className={classes.mainContainer}>
                <Typography variant="h4" className={classes.heading} >Get in Touch</Typography>
                <Typography variant="body">Subscribe to know when we launch</Typography>
            </Box>
        </React.Fragment>
    )
}