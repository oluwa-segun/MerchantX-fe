import React from 'react';
import Container from '@material-ui/core/Container'
import Toolbar from '@material-ui/core/Toolbar'
import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import MenuButton from '@material-ui/icons/Menu'
import {makeStyles} from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import { Link, ListItem } from '@material-ui/core';
import { BorderBottom } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    appBar: {
        BorderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
        flexwrap: 'wrap',
    },
    link: {
        margin: theme.spacing(8, 0, 6),
    }

}));

export default function Navbar() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <AppBar position="static" color="transparent" elevation={0} className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <Container>
                        <Tabs>
                            <IconButton color="inherit" aria-label="Menu">
                                {/* the company logo goes here */}
                                <MenuButton />
                            </IconButton>
                            <Tab label="Why MerchantX?" />
                            <Tab label="Merchants" />
                            <Tab label="Investors" />
                            <Tab label="FAQs" />
                        </Tabs>
                    </Container>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
};
