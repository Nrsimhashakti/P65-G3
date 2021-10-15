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

  <v-container style="width: 960px;">
             
    <v-form>
      
      <form class="button1">
        <button><input @click="historial()" type="submit"  value="Mis Reservas"></button>
      </form>
      <h3>Datos personales</h3>
      <p>Edita y Actualiza tu informacion personal </p>
      
      
        <div class="user-details2">
          <form>
            <div class="input-box">
              
                <label for="correo">Identificación</label>
                <input type="number" id="documento" name="documento" placeholder="Ingrese su identificacion" v-model="atributos.documento">
                
                <div class="button">
                    <input @click="buscarSocio()" value="BUSCAR" readonly>
                </div>
            </div>
          </form>
          <form>
            <div v-if="atributos._id !== ''">
              <div class="input-box">
                
                  <label for="correo">Correo
                      <input type="tel" id="numero cel" name="correo" placeholder="Correo electronico" v-model="atributos.correo">
                  </label>
              
                  <label for="nombre">
                      <span>Nombre</span>
                      <input type="text" id="nombre" name="nombre" placeholder="Nombre" required v-model="atributos.nombre">
                  </label>
                  <label for="apellido">
                      <span>Apellido</span>
                      <input type="text" id="apellido" name="apellido" placeholder="Apellido" required v-model="atributos.apellido">
                  </label>

                  <label for="numero cel">
                      <span>Número de celular</span>
                      <input type="tel" id="numero cel" name="numero cel" placeholder="Celular" v-model="atributos.telefono">
                  </label>
              </div>
            </div>
          </form>
          
        
        </div>
          <div class="button3">
                  <input @click="actualizarSocio()" value="Actualizar" readonly> 
          </div>

    </v-form>
     </v-container>

</div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      atributos: {
        _id: '',
        documento:" ",
        correo: "",
        nombre: "",
        apellido: "",
        telefono: "",
      }
    }
  },
  methods: {
      buscarSocio(){
        axios.get(`http://localhost:3000/api/buscar-socio/${this.atributos.documento}`)
        .then(res => {
          if (res.data !== null){
             this.atributos = res.data
          }else{
             this.$swal.fire(
                'Socio no encontrado',
                        'No existe el socio con identificación ' + this.atributos.documento,
                        'warning'
             )
          }
        })
      },
      actualizarSocio(){
        axios.put(`http://localhost:3000/api/actualizar-socio/${this.atributos._id}`, this.atributos)
        .then(res => {
          let status_peticion = res.status
          if (status_peticion == 200) {
            this.$swal.fire(
                        'Socio modificado',
                        'Se ha modificado el socio con identificación ' + this.atributos.documento,
                        'success'
                    )
                    this.atributos = {}
          }else{
             this.$swal.fire(
                        'Socio NO modificado',
                        'Ocurrió un error al modificadar el socio con identificación ' + this.atributos.documento,
                        'error'
                    )
          }
        })
       
      },
       cerrarsesion(){
        window.localStorage.removeItem('autenticacion');
        this.$router.push({path: '/'});
      },
      historial () {
       this.$router.push({path: '/historial'});
      },
    }
}

import "@/assets/css/reserva.css";
</script>
