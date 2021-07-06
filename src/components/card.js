/* eslint-disable no-magic-numbers */
import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { CardHeader } from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import TvIcon from '@material-ui/icons/Tv';
import TabletMacIcon from '@material-ui/icons/TabletMac';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';

const useStyles = makeStyles((theme) => createStyles({
  root: {
    width: 230,
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
    name, price, brand, tv, phone, setSelectedProduct, index,
  } = props;

  const handleClick = () => {
    setSelectedProduct(index);
  };

  const handleIcon = () => {
    if (tv) {
      return <TvIcon />;
    } else if (phone) {
      return <PhoneAndroidIcon />;
    }

    return <TabletMacIcon />;
  };

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={() => {
        handleClick();
      }}>
        <CardHeader
          className={classes.cardHeader}
          avatar={(
            <Avatar alt={name} className={classes.avatar}>
              {handleIcon()}
            </Avatar>
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
            <Box fontWeight="fontWeightMedium" display="inline">Precio: $</Box>
            {price}
          </Typography>

          <Typography variant="caption" component="p">
            <Box fontWeight="fontWeightMedium" display="inline">Marca: </Box>
            {brand}
          </Typography>

        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProductCard;
