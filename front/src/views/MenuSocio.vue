<template>
<div>

  <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #263555;" >
    <a class="navbar-brand" href="#">
      <img src="../assets/images/logo.png" width="250" height="120" alt="" style="border-radius:20px; margin-left: 50px; ">
    </a>
  
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item ">
          <a class="nav-link" href="/cotizacion">COTIZAR</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/reserva">RESERVAR</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/historial">HISTORIAL</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/micuenta">MI CUENTA</a>
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
  BIENVENIDO AL CLUB CAMPESTRE LOS ARRAYANES, AQUI PODRA COTIZAR, RESERVAR Y REVISAR EL HISOTRIAL DE LOS EVENTOS QUE RESERVO ANTERIORMENTE
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
            this.$router.push({path: '/login'});
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

