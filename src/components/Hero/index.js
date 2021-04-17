import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box'
import landing1 from '../../img/landing1.png';
import landing2 from '../../img/landing2.png';
import landing3 from '../../img/landing3.png';
import landing4 from '../../img/landing4.png';
import './index.css';

const useStyles = makeStyles((theme) => ({
    hero: {
        height: 'auto',
        marginBottom: '6em',
        marginTop: '2em'
    },
    button: {
        backgroundColor: '#0C0B5A',
        color: '#FCFCFC',
        marginTop: 50,
        '&:hover': {
            backgroundColor: '#FCFCFC',
            color: '#0C0B5A'
        }
    },
    textSect: {
        marginTop: 'auto',
    },
    grid: {
        top: 50,
        bottom: 50
    },
    body: {
        fontWeight: 'bold',
        fontSize: '30px',
        lineHeight: '25px',
        color: '#C4C4C4'
    },
    heading2: {
        fontStyle: 'normal',
        lineHeight: '35px',
        fontWeight: 'Bold',
        color: '#09068C',
        lineHeight: '60px',
        marginTop: '10px',
        marginBottom: '10px'
     }
}));


export default function Hero() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Container>
                <Grid container direction="row" spacing={1}  className={classes.hero}>
                    <Grid item lg={6} md={6} sm={12} xs={12} className={classes.textSect}>
                        <Box>
                            <Typography variant="body" className={classes.body}>
                                A market place for SMBs
                            </Typography>
                            <Typography variant="h3" className={classes.heading2}>Get quick access to loans from investors</Typography>
                            <Typography variantt="body1">We have carefully crafted a loan ecosystem that allows SMBs grow their business and investor's ROI.</Typography>
                        </Box>
                        <Button variant="contained" className={classes.button}>Create a free account</Button>
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <div className="heroContainer">
                            <div className="img1">
                                <img src={landing1} alt="landing1"/>
                            </div>
                            <div className="img2">
                                <img src={landing2} alt="landing2"/>
                                <img src={landing4} alt="landing4"/>
                            </div>
                            <div className="img3">
                                <img src={landing3} alt="landing3"/>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    )
}

