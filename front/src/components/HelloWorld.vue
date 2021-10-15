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

</div>
</template>

<script>
  export default {
    name: 'HelloWorld',
}
</script>
