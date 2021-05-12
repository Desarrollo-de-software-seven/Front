import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { CardHeader } from '@material-ui/core';
import { green } from '@material-ui/core/colors';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import ShareIcon from '@material-ui/icons/Share';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import MoreVertIcon from '@material-ui/icons/MoreVert';
import Avatar from '@material-ui/core/Avatar';
// import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => createStyles({
  root: {
    maxWidth: 230,
    margin: theme.spacing(0.5),
  },
  cardHeader: {
    marginBottom: 0,
    paddingBottom: 0,

  },
  avatar: {
    backgroundColor: green[600],
    sizes: 'large',
    alignItems: 'center',
    alignContent: 'center',
  },
  cardContent: {
    textAlign: 'left',
  },
}));

const ProductCard = (props) => {
  const classes = useStyles();
  const {
    requestId, name, vacancies, jobDuration, descriptionSummary, createdDate,
  } = props;

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardHeader
          className={classes.cardHeader}
          avatar={(
            <Avatar alt={name} className={classes.avatar} />
          )}
          title={(
            <Typography variant="body2">
              N°
              {requestId}
            </Typography>
            )}
          subheader={(
            <Typography style={{ height: 53 }} variant="h6" component="h2">
              {name}
            </Typography>
            )}
          disableTypography
        />

        <CardContent className={classes.cardContent}>

          <Typography variant="caption" component="p">
            <Box fontWeight="fontWeightMedium" display="inline">Vacantes:</Box>
            {vacancies}
          </Typography>
          <Typography variant="caption" component="p">
            <Box fontWeight="fontWeightMedium" display="inline">Duración del trabajo:</Box>
            {jobDuration}
          </Typography>
          <Typography variant="caption" component="p">
            <Box fontWeight="fontWeightMedium" display="inline">Resumen descripción:</Box>
            {descriptionSummary}
          </Typography>
          <Typography variant="caption" component="p">
            <Box fontWeight="fontWeightMedium" display="inline">Fecha creación:</Box>
            {createdDate.toLocaleDateString('es-ES', {
              weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
            })}
          </Typography>

        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProductCard;
