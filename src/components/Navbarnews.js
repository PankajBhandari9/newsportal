import React from 'react';
import newsicon from '../newsicon.png';
import { makeStyles } from '@material-ui/core';
import HamburgerDrawer from './HamburgerDrawer';

const useStyle=makeStyles({
    nav:{
        height:'5rem',
        boxShadow:'0px 1px 8px #888',
        display:'flex',
        alignItems:'center',
    },
    
    iconName:{
        fontFamily: 'cursive',
        color:'purple',
        textShadow:'8px 10px 3px #aaa',
    },
    icon:{
        height:'100%',
        cursor:'pointer',
        marginLeft:'1rem',
    }
})
const Navbarnews = ({setCategory}) => {
    const classes=useStyle();

    return (
        <div className={classes.nav}>
            <div className={classes.iconName}><HamburgerDrawer setCategory={setCategory}/></div>
            <img src={newsicon} className={classes.icon} alt="News Icon" />
        </div>
    )
}

export default Navbarnews;
