import { Typography } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import {makeStyles} from '@material-ui/core/styles'
import { CallMissedRounded } from '@material-ui/icons'
import React from 'react'

import image1 from '../../img/image1.png';

const useStyles = makeStyles((theme) => ({
    testimonial: {
        width: '500px',
        textAlign: 'left',
        margin: '7em auto'
    },
    typo: {
        fontSize: '30px',
        lineHeight: '48px',
        fontWeight: 'bold',
        color: 'blue',
        '&::before': {
            content: '--',
            fontSize: '40px',
            color: 'red'
        }
    }
}))

export default function Testimonial() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Grid container directon='column' className={classes.testimonial}>
                <Grid item lg={12} md={12} sm={12}>
                    <Box>
                        <Typography variant="h3" className={classes.typo}>
                            By connecting investors
                            to SMBs we give life to
                            business ideas, empowering businesses with funds to thrive.  
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}


