import { Grid, makeStyles, Button } from '@material-ui/core'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import React from 'react';
import Fab from '@material-ui/core/Fab';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkOutlinedIcon from '@material-ui/icons/LinkOutlined';


const useStyles = makeStyles({
    footer: {
        marginTop: 20,
        backgroundColor: '#f1f7ff',
    },
    link: {
        textDecoration: 'none',
    },
    hr: {
        width: '90%',
        height: 1
    },
    fabMargin: {
        margin: 20,
    },
    insta:{
        background:'-webkit-linear-gradient(10deg,#515BD4,#8134AF,#DD2A7B ,#FEDA77,#F58529)',
        WebkitBackgroundClip:'text',
        WebkitTextFillColor:'transparent',
        fontSize:'1.5rem',
    },
    git:{
        WebkitBackgroundClip :'text',
        WebkitTextFillColor:'transparent',
        fontSize: '1.5rem',
    },
    portfolio:{
        WebkitBackgroundClip :'text',
        WebkitTextFillColor:'transparent',
        fontSize: '1.5rem',
    }
})

const Footer = () => {
    const classes = useStyles();
    return (
        <Grid className={classes.footer}>
            <Grid>
                This News Site is Made By <a href="https://www.linkedin.com/in/pankaj-bhandari-251063202/" target='_blank' className={classes.link}> <Button color='primary'><LinkedInIcon /> Pankaj Bhandari</Button></a>
            </Grid>
            <hr className={classes.hr} />
            <Grid>
                <a href="https://www.instagram.com/_thepankajbhandari_/" target='_blank' className={classes.link}>
                    <Fab className={[classes.insta,classes.fabMargin]}>
                    <i className="fab fa-instagram" />
                    </Fab>
                </a>
                <a href="https://github.com/PankajBhandari9" target='_blank'>
                    <Fab className={[classes.git,classes.fabMargin]}>
                        <GitHubIcon />
                    </Fab>
                </a>
                <a href="https://pankajbhandari9.github.io/portfolio/" target='_blank'>
                <Fab className={[classes.portfolio,classes.fabMargin]}>
                    <LinkOutlinedIcon color='primary'/>
                </Fab>
                </a>                
            </Grid>
        </Grid>
    )
}

export default Footer
