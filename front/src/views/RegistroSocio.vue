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
                <a class="nav-link" href="/historialcotizaciones">HISTORIAL COTIZACIONES</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" @click="cerrarsesion()">CERRAR SESION</a>
            </li>
            </ul>
        </div>
    </nav>
    <v-container>
        <div class="">
            <h3 style="padding-top: 20px">REGISTRAR SOCIO</h3>
            <div class="content1" >
                <v-form @submit.prevent="agregarSocio()">
                    <v-row>
                    <v-col
                        cols="12"
                        md="6"
                    >
                        <v-text-field
                        v-model="atributos.nombre"
                        :counter="30"
                        label="Nombre Socio"
                        type="text"
                        required
                        ></v-text-field>
                    </v-col>
                    <v-col
                    cols="12"
                    md="6"
                    >
                        <v-text-field
                        v-model="atributos.apellido"
                        :counter="30"
                        label="Apellido Socio"
                        type="text"
                        required
                        ></v-text-field>
                    </v-col>
                    </v-row>

                    <v-row>
                        <v-col
                        cols="12"
                        md="6"
                        >
                        <v-text-field
                            v-model="atributos.telefono"
                            label="Telefono"
                            type="Number"
                            required
                        ></v-text-field>
                        </v-col>

                        <v-col
                        cols="12"
                        md="6"
                        >
                        <v-text-field
                            v-model="atributos.correo"
                            label="ej: absjd@example.com"
                            type="email"
                            required
                        ></v-text-field>
                        
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col
                        cols="12"
                        md="6"
                        >

                            <v-text-field
                            v-model="atributos.documento"
                            :counter="30"
                            label="Documento Socio"
                            type="Number"
                            required
                            ></v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            md="6"
                            >

                        <v-text-field
                        v-model="atributos.contraseña"
                        label="Contraseña Socio"
                        type="password"
                        required
                        ></v-text-field>
                        </v-col>
                    </v-row>
                    <div class="button">
                     <input type="submit" value="Crear Socio">
                    </div>

                </v-form>
                  <div class="button1">
                     <input onclick="location.href='/historialsocio'" type="submit" value="Atrás">
                </div>

            </div>
        </div>
    </v-container>
</div>
</template>

<script>
  export default {
    data(){
      return{

        Atributos:[],

        atributos:{
          nombre:"",
          apellido:"",
          telefono:"",
          correo:"",
          documento:"",
          contraseña:"",
        },


      }
      
    },
    methods:{
      
      agregarSocio(){
      console.log(this.atributos);
        if(!this.atributos.nombre){
          
          this.$swal('Error!',
                      'Falta Nombre de Socio!',
                      'error');
        }
        else if(!this.atributos.apellido){
          
          this.$swal('Error!',
                      'Falta Apellido de Socio!',
                      'error');
        }
        else if(!this.atributos.telefono){
          
          this.$swal('Error!',
                      'Falta Telefono de Socio!',
                      'error');
        }
        else if(!this.atributos.correo){
          
          this.$swal('Error!',
                      'Falta Correo de Socio!',
                      'error');
        }
        else if(!this.atributos.documento){
          
          this.$swal('Error!',
                      'Falta Documento de Socio!',
                      'error');
        }
        else if(!this.atributos.contraseña){
          
          this.$swal('Error!',
                      'Falta Contraseña de Socio!',
                      'error');
        }
        else{

        this.axios
        .post("/nuevo-socio", this.atributos)
        .then((res)=>{
          this.Atributos.push(res.data);

          this.$swal('success!',
                      'Socio agregado con exito!',
                      'success');

          this.atributos.nombre="";
          this.atributos.apellido="";
          this.atributos.telefono="";
          this.atributos.correo="";
          this.atributos.documento="";
          this.atributos.contraseña="";
         

        })
        .catch((e)=>{
          console.log(e.response);

          
        })
        }       
        
      },
       cerrarsesion(){
        window.localStorage.removeItem('autenticacion');
        this.$router.push({path: '/'});
      },
         

    }
    
  }
  import "@/assets/css/reserva.css";

</script>
<style scoped>
.button1 input{
     height: 100%;
     width: 200px;
     border-radius: 5px;
     color: #fff;
     font-size: 25px;
     font-weight: 500;
     letter-spacing: 1px;
     cursor: pointer;
     transition: all 0.3s ease;
     background: linear-gradient(135deg, #71b7e6, #9b59b6);
     font-family: 'Pathway Gothic One', sans-serif;
     position: center;
     text-align: center;
   }
</style>