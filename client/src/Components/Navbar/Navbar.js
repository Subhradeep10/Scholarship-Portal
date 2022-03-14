import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles({
    component: {
        color: '#fff',
        textDecoration: 'none',
    }
});


export default function ButtonAppBar() {
    const classes = useStyles();
    return (

        <Box sx={{ flexGrow: 1 }} >
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        ScholarshipPortal
                    </Typography>
                    <a href="#Home" className={classes.component}><Button color="inherit" >Home</Button></a>
                    <a href="#about" className={classes.component}><Button color="inherit">About</Button></a>
                    <a href="#category" className={classes.component}><Button color="inherit">Category</Button></a>
                    <Button color="inherit">Contact</Button>
                </Toolbar>
            </AppBar>
        </Box >
    );
}
