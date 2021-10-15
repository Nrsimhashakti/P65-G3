import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'




Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },  
  
  {
    path: '/inicio',
    name: 'Inicio',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/Inicio.vue')
  },
  {
    path: '/nosotros',
    name: 'Nosotros',
   
    component: () => import(/* webpackChunkName: "about" */ '../views/Nosotros.vue')
  },
  {
    path: '/eventos',
    name: 'Eventos',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/Eventos.vue')
  },
  {
    path: '/galeria',
    name: 'Galeria',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/Galeria.vue')
  },
  {
    path: '/login',
    name: 'Login',
   
    component: () => import(/* webpackChunkName: "about" */ '../components/Login.vue')
  },
  {
    path: '/loginAdmin',
    name: 'LoginAdmin',
   
    component: () => import(/* webpackChunkName: "about" */ '../components/LoginAdmin.vue')
  },
  
  
  



  ////////////////////////////////////////
  {
    path: '/menusocio',
    name: 'Logueado',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/MenuSocio.vue')
  },
  {
    path: '/menuadmin',
    name: 'Logueado1',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/MenuAdmin.vue')
  },
  {
    path: '/reserva',
    name: 'FormularioReserva',
   
    component: () => import(/* webpackChunkName: "about" */ '../views/FormularioReserva.vue')
  },
  {
    path: '/cotizacion',
    name: 'FormularioCotizacion',
   
    component: () => import(/* webpackChunkName: "about" */ '../views/FormularioCotizacion.vue')
  },
  {
    path: '/micuenta',
    name: 'micuenta',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/MiCuenta.vue')
  },
  {
    path: '/historial',
    name: 'Historial',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/Historial.vue')
  },
  {
    path: '/historialreservas',
    name: 'Historialreservas',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/HistorialReservas.vue')
  },
  {
    path: '/historialsocio',
    name: 'HistorialSocio',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/HistorialSocio.vue')
  },
  {
    path: '/historialcotizaciones',
    name: 'HistorialCotizacion',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/HistorialCotizaciones.vue')
  },
  {
    path: '/RegistroSocio',
    name: 'RegistroSocio',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/RegistroSocio.vue')
  }
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
