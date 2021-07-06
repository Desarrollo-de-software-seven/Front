/* eslint-disable no-magic-numbers */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Box from '@material-ui/core/Box';
import TvIcon from '@material-ui/icons/Tv';
import TabletMacIcon from '@material-ui/icons/TabletMac';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';

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
import axios from 'axios';

import ProductCard from './card';

// import { catalogProducts } from './sample_json';
import call from '../call-assistant.png';
// import { TextField } from '@material-ui/core';

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
    width: 230,
  },

  // Estilo grid verticales (se ven en la tab 2 y 3)
  YgridList: {
    maxWidth: 1100,
    width: 1030,
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
  const [tvs, setTvs] = useState([]);
  const [tablets, setTablets] = useState([]);
  const [phones, setPhones] = useState([]);
  const [catalogProducts, setCatalgoProducts] = useState([]);
  const { id } = useParams();

  // eslint-disable-next-line max-statements
  const fetchData = async () => {
    try {
      const tvData = await axios.get('http://swdev6.ing.puc.cl/tvs');
      const tabletsData = await axios.get('http://swdev6.ing.puc.cl/tablets');
      const phonesData = await axios.get('http://swdev6.ing.puc.cl/Smartphones');
      const products = [];
      const tvsList = [];
      const tabletsList = [];
      const phonesList = [];
      for (let i = 0; i < tvData.data.length; i++) {
        if (parseInt(tvData.data[i].StoreId, 10) === parseInt(id, 10)) {
          tvsList.push({ ...tvData.data[i] });
          products.push({ ...tvData.data[i] });
        }
      }
      for (let i = 0; i < tabletsData.data.length; i++) {
        if (parseInt(tabletsData.data[i].StoreId, 10) === parseInt(id, 10)) {
          tabletsList.push({ ...tabletsData.data[i] });
          products.push({ ...tabletsData.data[i] });
        }
      }
      for (let i = 0; i < phonesData.data.length; i++) {
        if (parseInt(phonesData.data[i].StoreId, 10) === parseInt(id, 10)) {
          phonesList.push({ ...phonesData.data[i] });
          products.push({ ...phonesData.data[i] });
        }
      }
      setTvs(tvsList);
      setTablets(tabletsList);
      setPhones(phonesList);
      setCatalgoProducts(products);
    } catch (error) {
      // console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
  const sortedProducts = catalogProducts.slice().sort((a, b) => ((a.name > b.name) ? 1 : -1));
  const sortedTvs = tvs.slice().sort((a, b) => ((a.name > b.name) ? 1 : -1));
  const sortedTablets = tablets.slice().sort((a, b) => ((a.name > b.name) ? 1 : -1));
  const sortedPhones = phones.slice().sort((a, b) => ((a.name > b.name) ? 1 : -1));
  for (let i = 0; i < sortedProducts.length; i++) {
    sortedProducts[i].index = i;
  }
  for (let i = 0; i < sortedTvs.length; i++) {
    sortedTvs[i].index = i;
  }
  for (let i = 0; i < sortedTablets.length; i++) {
    sortedTablets[i].index = i;
  }
  for (let i = 0; i < sortedPhones.length; i++) {
    sortedPhones[i].index = i;
  }
  // console.log(sortedProducts);
  // -----------------------------------------

  const selectProduct = (index) => {
    if (value === 0) {
      setSelectedProduct(sortedProducts[index]);
    } else if (value === 1) {
      setSelectedProduct(sortedTvs[index]);
    } else if (value === 2) {
      setSelectedProduct(sortedPhones[index]);
    } else {
      setSelectedProduct(sortedTablets[index]);
    }
  };

  const handleIcon = () => {
    if (selectedProduct.TV) {
      return <TvIcon />;
    } else if (selectedProduct.Smartphone) {
      return <PhoneAndroidIcon />;
    }

    return <TabletMacIcon />;
  };

  const handleType = () => {
    if (selectedProduct.TV) {
      return (
        <div>
          <p id="simple-modal-description">
            Tamaño de pantalla: {selectedProduct.TV.screenSize} pulgadas
          </p>
          <p id="simple-modal-description">
            Resolución: {selectedProduct.TV.resolution}
          </p>
          <p id="simple-modal-description">
            Es SmartTV: {selectedProduct.TV.smart ? 'Sí' : 'No'}
          </p>
        </div>
      );
    } else if (selectedProduct.Smartphone) {
      return (
        <div>
          <p id="simple-modal-description">
            Tamaño de pantalla: {selectedProduct.Smartphone.screenSize} pulgadas
          </p>
          <p id="simple-modal-description">
            Memoria de almacenamiento: {selectedProduct.Smartphone.memory} GB
          </p>
          <p id="simple-modal-description">
            Cámara: {selectedProduct.Smartphone.camera} MP
          </p>
          <p id="simple-modal-description">
            Tiene puerto MicroSD: {selectedProduct.Smartphone.microSD ? 'Sí' : 'No'}
          </p>
        </div>
      );
    }

    return (
      <div>
        <p id="simple-modal-description">
          Tamaño de pantalla: {selectedProduct.Tablet.screenSize} pulgadas
        </p>
        <p id="simple-modal-description">
          Memoria de almacenamiento: {selectedProduct.Tablet.memory} GB
        </p>
        <p id="simple-modal-description">
          Tiene 3G: {selectedProduct.Tablet.has3G ? 'Sí' : 'No'}
        </p>
      </div>
    );
  };

  const ProductDetail = () => (
    <div className={classes.paper}>
      <div style={{ flexDirection: 'row', display: 'flex' }}>
        <Avatar className={classes.avatar}>
          {handleIcon()}
        </Avatar>
        <div>
          <h2 id="simple-modal-title">{selectedProduct.name}</h2>
          <p id="simple-modal-description">
          Precio: {selectedProduct.price}
          </p>
          <p id="simple-modal-description">
          Marca: {selectedProduct.brand}
          </p>
          {handleType()}
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
            <Tab label="TV's" {...a11yProps(1)} />
            <Tab label='Celulares' {...a11yProps(2)} />
            <Tab label='Tablets' {...a11yProps(3)} />

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
            <Tab label="TV's" {...a11yProps(1)} />
            <Tab label='Celulares' {...a11yProps(2)} />
            <Tab label='Tablets' {...a11yProps(3)} />

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
                  price={product.price}
                  brand={product.brand}
                  tv={product.TV}
                  phone={product.Smartphone}
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
            <Typography variant='h6'>{'TV\'s'}</Typography>
          </Hidden>
          <Hidden lgUp>
            <Typography variant='body1'><Box fontWeight="fontWeightBold">Catálogo</Box></Typography>
          </Hidden>
          <GridList cellHeight={'auto'} cols={cols} className={classes.YgridList}>
            {sortedTvs.map((tv) => (
              <GridListTile key={tv.id} className={classes.GridListTile} >

                {/* Se presenta cada tarjeta de solicitud nueva. Se utiliza slice para no mostrar
            todos los datos en la vista principal. La idea es que aquí se muestren aquellas
            solicitudes desde hace X días, por lo que desde el backend se requeriría que los entregaran
            en un endpoint ordenado */}
                <ProductCard
                  key={tv.id}
                  requestId={tv.id}
                  name={tv.name}
                  price= {tv.price}
                  brand={tv.brand}
                  tv={tv.TV}
                  phone={tv.Smartphone}
                  index= {tv.index}
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
            {sortedPhones.map((phone) => (
              <GridListTile key={phone.id} className={classes.GridListTile} >

                {/* Se presenta cada tarjeta de solicitud nueva. Se utiliza slice para no mostrar
            todos los datos en la vista principal. La idea es que aquí se muestren aquellas
            solicitudes desde hace X días, por lo que desde el backend se requeriría que los entregaran
            en un endpoint ordenado */}
                <ProductCard
                  key={phone.id}
                  requestId={phone.id}
                  name={phone.name}
                  price= {phone.price}
                  brand={phone.brand}
                  tv={phone.TV}
                  phone={phone.Smartphone}
                  index= {phone.index}
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
            {sortedTablets.map((tablet) => (
              <GridListTile key={tablet.id} className={classes.GridListTile} >

                {/* Se presenta cada tarjeta de solicitud nueva. Se utiliza slice para no mostrar
            todos los datos en la vista principal. La idea es que aquí se muestren aquellas
            solicitudes desde hace X días, por lo que desde el backend se requeriría que los entregaran
            en un endpoint ordenado */}
                <ProductCard
                  key={tablet.id}
                  requestId={tablet.id}
                  name={tablet.name}
                  price= {tablet.price}
                  brand={tablet.brand}
                  tv={tablet.TV}
                  phone={tablet.Smartphone}
                  index= {tablet.index}
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
