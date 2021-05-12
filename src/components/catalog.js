import React from 'react';

import Box from '@material-ui/core/Box';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';


import ProductCard from './card';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import {new_requests,posted_requests} from './sample_json'
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';



const useStyles = makeStyles((theme) => ({

           // Estilo del total del componente
    root: {
      margin: theme.spacing(6,0),
      marginBottom: theme.spacing(0),
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      display: 'flex',
      height: theme.spacing(78),
      textAlign:'center',
      justifyContent:'center',
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
      width: theme.spacing(20)
    },


    // Estilo tabs clickeables horizontales
    horizontalTabs:{
      display:'flex',
      margin: theme.spacing(6,0),
      marginBottom:0,
      justifyContent:'center',
      padding:0,
      borderRadius:0
    },
    GridListTile:{
      display:'grid',
      justifyContent:'center'
    },

         // Estilo grid verticales (se ven en la tab 2 y 3)
    YgridList: {
      maxWidth: 1100,
      maxHeight: theme.spacing(65),
            // Aquí se estiliza la scrollbar
      "&::-webkit-scrollbar": {
        width: 10
            },
      "&::-webkit-scrollbar-track": {
        borderRadius: '8px',
        boxShadow: `inset 0 0 6px rgba(0, 0, 0, 0.3)`,
      },
      "&::-webkit-scrollbar-thumb": {
        borderRadius: '8px',
        backgroundColor: "darkgrey",
    
      },

              // Estilo responsivo de YgridList
      '@media only screen and (max-width: 600px)': {
        height: theme.spacing(60),
  
      },
      '@media only screen and (max-width: 400px)': {
        height: theme.spacing(50),
  
      },


    },


  }));

 
  // No estoy muy seguro para qué es esta función pero venía en la documentación de Material-UI
  // para el cambio de tabs

  
  // Esta funcioón maneja el cambio de Tabs 
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
          <Box p={3}  >
          {children}
          </Box>
        )}
      </div>
    );
  }

  // No estoy muy seguro para qué es esta función pero venía en la documentación de Material-UI
  
  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }
    
  
  const ExternalClientView = (props)=> {
    const classes = useStyles();

    // El valor de la tab actual que se está viendo
    const [value, setValue] = React.useState(0);


    // Manejador de cambio de la tab que se está viendo  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

      //-----------------------------------------


        // Esta función se utiliza para determinar el ancho de la pantalla y hacer el número de componentes
    // mostrados por GridList sea acorde al tamaño de la pantalla

    function getCols(screenWidth) {
      if (isWidthUp('lg', screenWidth)) {
        return {cols: 4,title_font:'h6'};
      }

      if (isWidthUp('md', screenWidth)) {
        return {cols: 4,title_font:'h6'};
      }
      if (isWidthUp('sm', screenWidth)) {
        return {cols: 2,title_font:'body1'};
      }
      if (isWidthUp('xs', screenWidth)) {
        return {cols: 1,title_font:'body1'};
      }


      return {cols: 1,title_font:'body1'};
    }
    // Con esta constante definimos las columnas a mostrar según ancho de pantalla
    const cols = getCols(props.width).cols;

    // Se utiliza .slice para no cambiar el array original y así utilizar filtros en una copia de él
    // Se hace sort de los request según el atributo requerido de la sample data
    const sorted_new_requests =   new_requests.slice().sort((a,b)=> b.created_date-a.created_date)
    const SLA_sorted_posted_requests = posted_requests.slice().sort((a,b)=> a.SLA-b.SLA)

    // Orden custom de los elementos del array
    const status_orderLH = ["start","on-going","ready"]
    const Status_sorted_posted_requests = posted_requests.slice().sort((a, b) => status_orderLH.indexOf(a.status)-status_orderLH.indexOf(b.status))

    // State definido para la información que muestran las tarjetas, modificable por filterSLA y filterStatus
    const [shown_posted_requests,setShown_posted_requests] = React.useState(SLA_sorted_posted_requests)

      //-----------------------------------------
    
    //-----------------------------------------

    // Ordenar la información lo haría el backend

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
       centered
     >
       <Tab label="Inicio" {...a11yProps(0)} />
       <Tab label="Solicitudes pendientes" {...a11yProps(1)} />
       <Tab label="Solicitudes publicadas" {...a11yProps(2)} />

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
          <Tab label="Inicio" {...a11yProps(0)} />
          <Tab label="Solicitudes pendientes" {...a11yProps(1)} />
          <Tab label="Solicitudes publicadas" {...a11yProps(2)} />

        </Tabs>
        </Hidden>


        {/* ----------------------------------------------------------------------------------------------------------- */}
        
        
         {/* // Aquí comienza el componente de la tab n°2*/}

        <TabPanel value={value} index={1}>


        {/* Se cambia el tipo de letra según el tamaño de pantalla con Hidden */}
        <Hidden mdDown> 
        <Typography variant='h6'>Catálogo</Typography>
        </Hidden>
        <Hidden lgUp> 
        <Typography variant='body1'><Box fontWeight="fontWeightBold">Catálogo</Box></Typography>
        </Hidden>
        <GridList cellHeight={'auto'} cols={cols} className={classes.YgridList}>
        {sorted_new_requests.map((new_request) => (
                  <GridListTile key={new_request.id} className={classes.GridListTile} >
              
            {/* Se presenta cada tarjeta de solicitud nueva. Se utiliza slice para no mostrar 
            todos los datos en la vista principal. La idea es que aquí se muestren aquellas 
            solicitudes desde hace X días, por lo que desde el backend se requeriría que los entregaran
            en un endpoint ordenado */}
                <ProductCard 
                key={new_request.id} 
                requestId={new_request.id} 
                name={new_request.name}
                vacancies= {new_request.vacancies}
                jobDuration= {new_request.job_duration}
                description_summary= {new_request.description_summary}
                createdDate= {new_request.created_date}
                  />

                      

                  </GridListTile>
                ))} 

        </GridList>
        </TabPanel>

        </div>

</React.Fragment>
);
}


// Se exporta la funcion con withWidth para que funcione la funcion de reconocer el ancho de pantalla
export default withWidth()(ExternalClientView)