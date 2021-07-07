import React from 'react'
import { makeStyles, Hidden, Grid } from '@material-ui/core';
import NewsCard from '../NewsCard';
import Button from '@material-ui/core/Button'

const useStyle = makeStyles({
    downloadMessage: {
        marginTop: 20,
        backgroundColor: '#FFC947',
        color: '#F33535',
        borderRadius: 20,
        padding: 10,
        fontWeight: 'bold',
        fontFamily: `'Bona Nova', serif`,
    },
    spaceTop:{
        marginTop:50,
    }
})
const NewsContent = ({ newsArray, newsResults, loadmore,setLoadmore }) => {
    const classes = useStyle();
    return (
        <Grid>
            <Grid item lg={12}>
                <div className="content">
                    <Hidden only={['sm', 'xs']}>
                        <div className={classes.downloadMessage}>
                            We Provide our best from different Web sites to give you brief Hot News
                        </div>
                    </Hidden>

                </div>
            </Grid>
            <Grid className={classes.spaceTop}>
                {
                    newsArray.map((newsItem) => {
                        return <NewsCard newsItem={newsItem} key={newsItem.title} />
                    })
                }
            </Grid>
            {loadmore<=newsResults && (
                <>
                <hr/>
                <Button variant='outlined' color='primary' onClick={()=>setLoadmore(loadmore+20)}>Load More</Button>
                </>
            )}
            
        </Grid>
    )
}

export default NewsContent;
