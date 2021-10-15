<template>
<div>

 <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #263555;" >
    <a class="navbar-brand" href="#">
        <img src="../assets/images/logo.png" width="250" height="120" alt="" style="border-radius:20px; margin-left: 50px; ">
    </a>
    
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
        <li class="nav-item ">
            <a class="nav-link" href="/historialsocio">HISTORIAL SOCIO</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="/historialreservas">HISTORIAL RESERVAS</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="/historialcotizacion">HISTORIAL COTIZACIONES</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" @click="cerrarsesion()">CERRAR SESION</a>
        </li>
        </ul>
    </div>
</nav>
<v-alert
      style="margin-top:100px"
      outlined
      type="success"
      text
    >
  ADMINISTRACIÓN CLUB CAMPESTRE LOS ARRAYANES, AQUI PODRA DISPONER DE LAS RESERVAS, LAS COTIZACIONES, LOS SOCIOS YA SEA PARA ELIMINAR, ACTUALIZAR, CREAR O BUSCAR
  </v-alert>
</div>
</template>

<script>

  export default {
    name : 'logueado',
   beforeCreate() {

        var autenticacion = window.localStorage.getItem('autenticacion');
        console.log("Autenticacion esta "+autenticacion);
        if(autenticacion !=='ok'){
            this.$router.push({path: '/loginAdmin'});
        }

    },
    methods: {
        cerrarsesion(){
            window.localStorage.removeItem('autenticacion');
            this.$router.push({path: '/'});
        },
        
    },
    
  }
</script>
