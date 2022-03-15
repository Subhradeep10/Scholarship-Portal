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
                    <Link to='/' className={classes.component}>
                        <Button color="inherit" >Home</Button>
                    </Link>
                    <Link to='/national' className={classes.component}>
                        <Button color="inherit">National</Button>
                    </Link>
                    <Link to='/international' className={classes.component}>
                        <Button color="inherit">International</Button>
                    </Link>
                    <Link to='/regional' className={classes.component}>
                        <Button color="inherit">Regional</Button>
                    </Link>
                    <Link to='/research' className={classes.component}>
                        <Button color="inherit">Research</Button>
                    </Link>
                    <Link to='/Private' className={classes.component}>
                        <Button color="inherit">Private</Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </Box >
    );
}
