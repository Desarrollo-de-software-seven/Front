/* eslint-disable no-magic-numbers */
import React, { useState } from 'react';

import Box from '@material-ui/core/Box';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import Avatar from '@material-ui/core/Avatar';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import Modal from '@material-ui/core/Modal';
import { green } from '@material-ui/core/colors';

import ProductCard from './card';

import { catalog, tablets, tvs, phones } from './sample_json';

import call from '../call-assistant.png';

const useStyles = makeStyles((theme) => ({

  // Estilo del total del componente
  root: {
    margin: theme.spacing(6, 0),
    marginBottom: theme.spacing(0),
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: theme.spacing(78),
    textAlign: 'center',
    justifyContent: 'center',
    // Estilo responsivo del total del componente
    '@media only screen and (max-width: 1279px)': {
      margin: theme.spacing(0),

    },
    '@media only screen and (max-width: 600px)': {
      height: theme.spacing(73),

    },

  },
  // Estilo tabs clickeables verticales
  verticalTabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    width: theme.spacing(20),
  },

  // Estilo tabs clickeables horizontales
  horizontalTabs: {
    display: 'flex',
    margin: theme.spacing(6, 0),
    marginBottom: 0,
    marginTop: '1%',
    justifyContent: 'center',
    padding: 0,
    borderRadius: 0,
  },
  GridListTile: {
    display: 'grid',
    justifyContent: 'center',
  },

  // Estilo grid verticales (se ven en la tab 2 y 3)
  YgridList: {
    maxWidth: 1100,
    width: 1050,
    maxHeight: theme.spacing(65),
    // Aquí se estiliza la scrollbar
    '&::-webkit-scrollbar': {
      width: 10,
    },
    '&::-webkit-scrollbar-track': {
      borderRadius: '8px',
      boxShadow: 'inset 0 0 6px rgba(0, 0, 0, 0.3)',
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: '8px',
      backgroundColor: 'darkgrey',
    },
    // Estilo responsivo de YgridList
    '@media only screen and (max-width: 600px)': {
      height: theme.spacing(60),
    },
    '@media only screen and (max-width: 400px)': {
      height: theme.spacing(50),

    },
  },
  avatar: {
    backgroundColor: green[600],
    sizes: 'large',
    alignItems: 'center',
    alignContent: 'center',
    marginTop: 30,
    marginRight: 20,
  },
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
}));

// Esta función maneja el cambio de Tabs
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3} >
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

// eslint-disable-next-line max-statements
const ProductsList = (props) => {
  const classes = useStyles();

  // El valor de la tab actual que se está viendo
  const [value, setValue] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState();

  // Manejador de cambio de la tab que se está viendo
  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  const handleClose = () => setSelectedProduct();

  // -----------------------------------------

  // Esta función se utiliza para determinar el ancho de la pantalla y hacer el número de componentes
  // mostrados por GridList sea acorde al tamaño de la pantalla

  function getCols(screenWidth) {
    if (isWidthUp('lg', screenWidth)) {
      return { cols: 4, titleFont: 'h6' };
    }

    if (isWidthUp('md', screenWidth)) {
      return { cols: 4, titleFont: 'h6' };
    }
    if (isWidthUp('sm', screenWidth)) {
      return { cols: 2, titleFont: 'body1' };
    }
    if (isWidthUp('xs', screenWidth)) {
      return { cols: 1, titleFont: 'body1' };
    }

    return { cols: 1, titleFont: 'body1' };
  }
  // Con esta constante definimos las columnas a mostrar según ancho de pantalla
  const cols = getCols(props.width).cols;

  // Se utiliza .slice para no cambiar el array original y así utilizar filtros en una copia de él
  // Se hace sort de los request según el atributo requerido de la sample data
  const sortedProducts = catalog.slice().sort((a, b) => b.created_date - a.created_date);
  // -----------------------------------------

  for (let i = 0; i < sortedProducts.length; i++) {
    sortedProducts[i].index = i;
  }
  for (let i = 0; i < tvs.length; i++) {
    tvs[i].index = i;
  }
  for (let i = 0; i < tablets.length; i++) {
    tablets[i].index = i;
  }
  for (let i = 0; i < phones.length; i++) {
    phones[i].index = i;
  }
  // -----------------------------------------

  const selectProduct = (index) => {
    if (value === 0) {
      setSelectedProduct(sortedProducts[index]);
    } else if (value === 1) {
      setSelectedProduct(tvs[index]);
    } else if (value === 2) {
      setSelectedProduct(phones[index]);
    } else {
      setSelectedProduct(tablets[index]);
    }
  };

  const ProductDetail = () => (
    <div className={classes.paper}>
      <div style={{ flexDirection: 'row', display: 'flex' }}>
        <Avatar className={classes.avatar} />
        <div>
          <h2 id="simple-modal-title">{selectedProduct.name}</h2>
          <p id="simple-modal-description">
          Precio: {selectedProduct.price}
          </p>
        </div>
      </div>
      <button type='button' onClick={handleClose}>
          Cerrar
      </button>
    </div>
  );

  return (
    <React.Fragment>
      {/* // Esta taba se ve solamente cuando la pantalla es de ancho mayor a 'lg' (Ver documentación Hidden) */}
      <Hidden lgUp>
        <Paper className={classes.horizontalTabs}>
          <Tabs
            orientation="horizontal"
            variant="scrollable"
            scrollButtons="on"
            value={value}
            onChange={handleChange}
            aria-label="Horizontal tabs"
          >
            <Tab label="Catálogo" {...a11yProps(0)} />
            <Tab label="TV's" {...a11yProps(0)} />
            <Tab label='Celulares' {...a11yProps(0)} />
            <Tab label='Tablets' {...a11yProps(0)} />

          </Tabs>
        </Paper>

      </Hidden>

      <div className={classes.root}>

        {/* // Esta taba se ve solamente cuando la pantalla es de ancho menor a 'md' (Ver documentación Hidden) */}
        <Hidden mdDown>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs"
            className={classes.verticalTabs}
          >
            <Tab label="Catálogo" {...a11yProps(0)} />
            <Tab label="TV's" {...a11yProps(0)} />
            <Tab label='Celulares' {...a11yProps(0)} />
            <Tab label='Tablets' {...a11yProps(0)} />

          </Tabs>
        </Hidden>

        {/* // Aquí comienza el componente de la tab n°0*/}

        <TabPanel value={value} index={0}>

          {/* Se cambia el tipo de letra según el tamaño de pantalla con Hidden */}
          <Hidden mdDown>
            <Typography variant='h6'>Catálogo</Typography>
          </Hidden>
          <Hidden lgUp>
            <Typography variant='body1'><Box fontWeight="fontWeightBold">Catálogo</Box></Typography>
          </Hidden>
          <GridList cellHeight={'auto'} cols={cols} className={classes.YgridList}>
            {sortedProducts.map((product) => (
              <GridListTile key={product.id} className={classes.GridListTile} >

                {/* Se presenta cada tarjeta de solicitud nueva. Se utiliza slice para no mostrar
            todos los datos en la vista principal. La idea es que aquí se muestren aquellas
            solicitudes desde hace X días, por lo que desde el backend se requeriría que los entregaran
            en un endpoint ordenado */}
                <ProductCard
                  key={product.id}
                  requestId={product.id}
                  name={product.name}
                  price= {product.price}
                  index= {product.index}
                  setSelectedProduct = {selectProduct}
                />

              </GridListTile>
            ))}

          </GridList>
        </TabPanel>

        {/* // Aquí comienza el componente de la tab n°1*/}

        <TabPanel value={value} index={1}>

          {/* Se cambia el tipo de letra según el tamaño de pantalla con Hidden */}
          <Hidden mdDown>
            <Typography variant='h6'>TV's</Typography>
          </Hidden>
          <Hidden lgUp>
            <Typography variant='body1'><Box fontWeight="fontWeightBold">Catálogo</Box></Typography>
          </Hidden>
          <GridList cellHeight={'auto'} cols={cols} className={classes.YgridList}>
            {tvs.map((product) => (
              <GridListTile key={product.id} className={classes.GridListTile} >

                {/* Se presenta cada tarjeta de solicitud nueva. Se utiliza slice para no mostrar
            todos los datos en la vista principal. La idea es que aquí se muestren aquellas
            solicitudes desde hace X días, por lo que desde el backend se requeriría que los entregaran
            en un endpoint ordenado */}
                <ProductCard
                  key={product.id}
                  requestId={product.id}
                  name={product.name}
                  price= {product.price}
                  index= {product.index}
                  setSelectedProduct = {selectProduct}
                />

              </GridListTile>
            ))}

          </GridList>
        </TabPanel>

        {/* // Aquí comienza el componente de la tab n°2*/}

        <TabPanel value={value} index={2}>

          {/* Se cambia el tipo de letra según el tamaño de pantalla con Hidden */}
          <Hidden mdDown>
            <Typography variant='h6'>Celulares</Typography>
          </Hidden>
          <Hidden lgUp>
            <Typography variant='body1'><Box fontWeight="fontWeightBold">Catálogo</Box></Typography>
          </Hidden>
          <GridList cellHeight={'auto'} cols={cols} className={classes.YgridList}>
            {phones.map((product) => (
              <GridListTile key={product.id} className={classes.GridListTile} >

                {/* Se presenta cada tarjeta de solicitud nueva. Se utiliza slice para no mostrar
            todos los datos en la vista principal. La idea es que aquí se muestren aquellas
            solicitudes desde hace X días, por lo que desde el backend se requeriría que los entregaran
            en un endpoint ordenado */}
                <ProductCard
                  key={product.id}
                  requestId={product.id}
                  name={product.name}
                  price= {product.price}
                  index= {product.index}
                  setSelectedProduct = {selectProduct}
                />

              </GridListTile>
            ))}

          </GridList>
        </TabPanel>

        {/* // Aquí comienza el componente de la tab n°3*/}

        <TabPanel value={value} index={3}>

          {/* Se cambia el tipo de letra según el tamaño de pantalla con Hidden */}
          <Hidden mdDown>
            <Typography variant='h6'>Tablets</Typography>
          </Hidden>
          <Hidden lgUp>
            <Typography variant='body1'><Box fontWeight="fontWeightBold">Catálogo</Box></Typography>
          </Hidden>
          <GridList cellHeight={'auto'} cols={cols} className={classes.YgridList}>
            {tablets.map((product) => (
              <GridListTile key={product.id} className={classes.GridListTile} >

                {/* Se presenta cada tarjeta de solicitud nueva. Se utiliza slice para no mostrar
            todos los datos en la vista principal. La idea es que aquí se muestren aquellas
            solicitudes desde hace X días, por lo que desde el backend se requeriría que los entregaran
            en un endpoint ordenado */}
                <ProductCard
                  key={product.id}
                  requestId={product.id}
                  name={product.name}
                  price= {product.price}
                  index= {product.index}
                  setSelectedProduct = {selectProduct}
                />

              </GridListTile>
            ))}

          </GridList>
        </TabPanel>
        <Modal
          open={selectedProduct}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <ProductDetail />
        </Modal>

      </div>

      <a href='/waiting-view'>
        <img src={call} className="App-call" alt="call" style={{ height: '12%', width: '6%' }}/>
      </a>

    </React.Fragment>
  );
};

// Se exporta la funcion con withWidth para que funcione la funcion de reconocer el ancho de pantalla
export default withWidth()(ProductsList);
