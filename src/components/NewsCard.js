import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 350,
    height: 560,
    margin: 10,
    display: 'inline-flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    transition: '0.3s',
    '&:hover': {
      transform: 'scale(1.03)',
    }
  },
  link: {
    textDecoration: 'none',
  },
  btn: {
    display: 'block',
    width: 335,
    fontSize: 16,
    fontWeight: 'bold',
    '&:hover': {
      backgroundColor: '#E8F0F2',
      color: '#39A2DB',
    }
  }
});

export default function NewsCard({ newsItem }) {


  const fulldate = new Date(newsItem.publishedAt);
  let date = fulldate.toString().split(" ");
  const hour = parseInt(date[4].substring(0, 2));
  const time = hour > 12 ? true : false;

  const classes = useStyles();
  console.log(newsItem)
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={newsItem.title}
          height="200"
          image={newsItem.urlToImage ? newsItem.urlToImage : "https://www.pngkey.com/png/full/232-2325195_howard-gordon-discusses-24-redemption-no-thumbnail-png.png"}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h6">
            {newsItem.title}
          </Typography>
          <Typography variant="body3" color="textSecondary" component="p">
            <b>Author:</b> {newsItem.source.name ? newsItem.source.name : "Unknown"} /
            {time
              ? `${hour - 12}:${date[4].substring(3, 5)}pm`
              : `${hour}:${date[4].substring(3, 5)}am on 
              ${date[2]} ${date[1]} ${date[3]}, ${date[0]}`
            }
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {newsItem.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <a href={newsItem.url} target='_blank' className={classes.link}>
          <Button color="primary" variant="outlined" className={classes.btn}>
            Read more
          </Button>
        </a>
      </CardActions>
    </Card>
  );
}