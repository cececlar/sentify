import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { FormHelperText } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "60%",
    margin: "1rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    fontSize: "3rem",
  },
}));

export default function Article({
  key,
  title,
  description,
  body,
  url,
  date,
  image,
  sentiment,
  magnitude,
  source,
}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [emoji, setEmoji] = useState("😐");

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    if (sentiment && magnitude) {
      if (sentiment >= 0.3) {
        setEmoji("😌");
      } else if (!sentiment || sentiment >= -0.3) {
        setEmoji("😐");
      } else {
        setEmoji("😒");
      }
    }
  }, [sentiment, magnitude]);

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {emoji}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={title}
        subheader={date}
      />

      <CardMedia className={classes.media} image={image} title="Paella dish" />
      <CardContent>
        <Typography variant="h6" className="scores">
          Sentiment Score: {sentiment}
        </Typography>
        <Typography variant="h6">Magnitude Score: {magnitude}</Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography style={{ whiteSpace: "pre-line" }} paragraph>
            {body}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
