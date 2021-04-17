import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import image1 from '../../img/image1.png';
import image2 from '../../img/image2.png';
import image3 from '../../img/image3.png';
import investor1 from '../../img/investor1.png';
import investor2 from '../../img/investor2.png';
import investor3 from '../../img/investor3.png';
import investor4 from '../../img/investor4.png';
import merchant1 from '../../img/merchant1.png';
import merchant2 from '../../img/merchant2.png';
import merchant3 from '../../img/merchant3.png';
import merchant4 from '../../img/merchant4.png';
import './index.css';



const useStyles = makeStyles((theme) => ({
    title: {
        color: '#9E9E9E',
        fontSize: '30px',
        fontWeight: 'Bold',
        lineHeight: '34px'
    },
    line: {
        width: '70%',
        marginRight: 'auto',
        marginLeft: 'auto'
    },
    typo: {
        paddingRight: '40px',
        [theme.breakpoints.down('md')]: {
            textAlign: 'center',
            marginBottom: '30px',
            paddingRight: '0px'
        }
    },
    heading2: {
       fontStyle: 'normal',
       lineHeight: '48px',
       fontWeight: 'Bold',
       textAlign: 'center',
       width: '75%',
       marginLeft: 'auto',
       marginRight: 'auto',
       color: '#0B08B8'
    },
    heading3: {
        fontSize: '26px',
        fontWeight: 'Bold',
        lineHeight: '30px',
        color: '#020216',
        marginBottom: '15px',
        marginTop: '10px'
    },
    body: {
        color: theme.textPrimary,
        fontSize: '16px',
        lineHeight: '22px',
        fontFamily: 'Nunito',
        fontWeight: 'normal',
        fontStyle: 'normal',
        minWidth: '500px'
    },
    box: {
        width: '180px',
        height: '60px',
        padding: '14px 36px',
        backgroundColor: '#0E0D2F',
        color: '#FFFFFF',
        marginBottom: theme.spacing(3)
    },
    boxText: {
        fontWeight: 'bold',
        lineHeight: '34px',
        fontSize: '30px',
        margin: '0px 10px',
        flex: 'none',
        flexGrow: 0,
        order: 0,
        textAlign: 'center'
    },
    merchant: {
        display: 'flex',
        textAlign: 'right',
        alignItems: 'flex-end',
        flexFlow: 'column'
    },
    investor: {
        display: 'flex',
        textAlign: 'left',
        alignItems: 'flex-start',
        flexFlow: 'column'
    },
    heading4: {
        fontWeight: 'bold',
        fontSize: '42px',
        lineHeight: '48px',
        color: '#000000'
    },
    body: {
        fontSize: '20px',
        lineHeight: '27px',
        paddingTop: theme.spacing(1)
    },
    investorGrid: {
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center'
    },
    merchantGrid: {
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center'
    }
}));









const first_content = [
    {
        heading: 'Access to funds',
        body: 'Experience the opportunity to access business expansion funds and educational tools to guarantee success.',
        img: image1
    },
    {
        heading: 'Investment opportunity',
        body: 'Make your money server a greater purpose while also earning returns on your investment.',
        img: image2
    },
    {
        heading: 'Marketplace for SMBS',
        body: 'Marketplace for SMBs and investors. Providing the required funds for expansion.',
        img: image3
    }
]

const investors = [
    {
        key: 1,
        item: 'We understand security and observe best practices to secure your money.'
    },
    {
        key: 1,
        item: 'A credit scoring system that increases merchants pay back.'
    },
    {
        key: 1,
        item: 'SMB’s profile contain video pitch and documents to make descion to invest easy.'
    },
    {
        key: 1,
        item: 'Track your investment with our dashboard system designed to give you real time data of your investments.'
    }
]

const merchants = [
    {
        key: 1,
        item: 'Get funding without hassle, tedious or protocol'
    },
    {
        key: 2,
        item: 'interactive and easy to use interface'
    },
    {
        key: 3,
        item: 'Customer supoort to ensure your questions are answered'
    }
]


export default function Section() {
    const classes = useStyles();

    return (
        <div>
            <Container>
                <Grid container direction='column'>
                    <Typography variant='title' align='center' className={classes.title}>What we do</Typography>
                    <Typography variant='h4'  className={classes.heading2}> We help scale small/medium sized businesses with access to loans from investors. </Typography>
                </Grid>

                <Grid container direction='row' style={{marginTop: '50px'}}>
                    {first_content.map((content) => (
                        <Grid item lg={4} md={4} sm={12} spacing={2} className={classes.typo} key={content.heading}>
                            <img src={content.img} />
                            <Typography variant='h6' className={classes.heading3}>{content.heading}</Typography>
                            <Typography variant='body1' className={classes.body}>{content.body}</Typography>
                        </Grid>
                    ))}
                </Grid>

                <Grid container direction='column' style={{marginTop: '50px', marginBottom: '30px'}}>
                    <Typography variant='title' align='center' className={classes.title}>What we offer</Typography>
                    <Typography variant='h4'  className={classes.heading2}>The major challenge in the African market for small and medium business owners is access to funds.</Typography>
                </Grid>

                <Grid container direction="row">
                    <Grid item lg={6} md={6} sm={12} className={classes.merchantGrid}>
                        <div className="imgContainer1">
                                <div className="img1">
                                    <img src={merchant1} />
                                </div>
                                <div className="img2">
                                    <img src={merchant2} />
                                </div>
                                <div className="img3">
                                    <img src={merchant3} />
                                </div>
                                <div className="img4">
                                    <img src={merchant4} />
                                </div>
                        </div>
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} className={classes.merchant}>
                        <Box className={classes.box}>
                            <Typography variant='h5'>
                                Merchants
                            </Typography>
                        </Box>
                        <Typography variant='h4' className={classes.heading4}>
                            We understand your challenges with funds
                        </Typography>
                        <Typography variant='body1' className={classes.body}>
                        Merchant X has an SMB friendly ecosystem positioned to give you access to the right people for your business success.
                        </Typography>

                        <div className="merchantList">
                            <ul>
                                {
                                    merchants.map((content) => (
                                        <li key={content.key}>
                                            <p>{content.item}</p>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </Grid>
                </Grid>

                <Grid container direction="row" style={{marginTop: '50px'}}>
                    <Grid item lg={6} md={6} sm={12} className={classes.investor}>
                        <Box className={classes.box}>
                            <Typography variant='h5'>
                                Investors
                            </Typography>
                        </Box>
                        <Typography variant='h4' className={classes.heading4}>
                            Let your money serve a greater purpose
                        </Typography>
                        <Typography variant='body1' className={classes.body}>
                            Contribute to the success story of african businesses
                        </Typography>

                        <div className="investorList">
                            <ul>
                            { 
                                investors.map((content) => (
                                        <li key={content.key}>
                                            <p>{content.item}</p>
                                        </li>
                                ))
                                }
                        </ul>
                        </div>
                    </Grid>

                    <Grid item lg={6} md={6} sm={12} className={classes.investorGrid}>
                        <div className="imgContainer2">
                                <div className="img1">
                                    <img src={investor1} />
                                </div>
                                <div className="img2">
                                    <img src={investor2} />
                                </div>
                                <div className="img3">
                                    <img src={investor3} />
                                </div>
                                <div className="img4">
                                    <img src={investor4} />
                                </div>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
