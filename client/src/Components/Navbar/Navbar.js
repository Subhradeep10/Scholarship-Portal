import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import makeStyles from '@mui/styles/makeStyles';
import { Link } from 'react-router-dom';

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
                    <Link to='/'>
                        <Button color="inherit" >Home</Button>
                    </Link>
                    <Link to='/national' className={classes.component}>
                        <Button color="inherit">National</Button>
                    </Link>
                    <Button color="inherit">International</Button>
                    <Button color="inherit">Regional</Button>
                    <Button color="inherit">Research</Button>
                    <Button color="inherit">Private</Button>
                </Toolbar>
            </AppBar>
        </Box >
    );
}
