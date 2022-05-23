import React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';

import { Link } from "react-router-dom";

import Container from '@mui/material/Container';
import { Grid } from '@mui/material';
import styles from './Layout.module.css'

function Layout({children}) {
    return (
        <>
        <AppBar position="static" sx={{ mb: 1, p: 1 }}>
        <Grid container spacing={1}
                direction="row"
                justifyContent="flex-start"
                alignItems="center">
            <Grid item>
            <Link to="/dictionary-oxford" className={styles.menu}>
                <Typography variant="h6" component="h1">
                    TableDictionary
                </Typography>
            </Link>
            </Grid>
            <Grid item>
            <Link to="/dictionary-oxford/random" className={styles.menu}>
                <Typography variant="h6" component="h1">
                TableWordsRandom
                </Typography>
            </Link>
            </Grid>
        </Grid>
         </AppBar>
        <Container maxWidth="lg">
        {children}
        </Container>
        </>
    );
}

export default Layout;